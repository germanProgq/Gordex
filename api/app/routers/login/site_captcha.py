import string, random
import base64

from captcha.image import ImageCaptcha
from fastapi import APIRouter, Response, Request, Depends
from app.models.default import CaptchaData

from app.database.db import TokenActions, CaptchaActions
from app import get_token_from_cookie
import logging


router = APIRouter()
image = ImageCaptcha(width=2000, height=760, font_sizes=[220])
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@router.get('/api/v1/captcha/create', tags=['Captcha'])
async def generate_captcha_request(token: str = Depends(get_token_from_cookie)):
    try:
        if TokenActions._check_token_exists(token):
            captcha_actions = CaptchaActions()
            existing_captcha = captcha_actions.get_captcha_by_token(token=token)
            
            if existing_captcha:
                # If a CAPTCHA exists, refresh it
                random_string = ''.join([random.choice(string.ascii_letters + string.digits) for _ in range(6)])
                captcha_image = image.generate(random_string)
                captcha_base64 = base64.b64encode(captcha_image.getvalue()).decode('utf-8')
                
                # Update the existing CAPTCHA
                result = CaptchaActions(_base64=captcha_base64, token=token, text=random_string).refresh()
                
                return Response(
                    content=base64.b64decode(result.base64), 
                    media_type="image/png", 
                    headers={"Captcha-ID": str(result.id)}  # Ensure ID is a string
                )
            else:
                # Generate a new CAPTCHA since none exists
                random_string = ''.join([random.choice(string.ascii_letters + string.digits) for _ in range(6)])
                captcha_image = image.generate(random_string)
                captcha_base64 = base64.b64encode(captcha_image.getvalue()).decode('utf-8')

                result = CaptchaActions(_base64=captcha_base64, token=token, text=random_string).create_new()
                if result:
                    return Response(
                        content=base64.b64decode(result.base64), 
                        media_type="image/png", 
                        headers={"Captcha-ID": str(result.id)}  # Ensure ID is a string
                    )
                else:
                    logger.error("Error creating new CAPTCHA.")
                    return Response(status_code=500, content="Error creating new CAPTCHA")
        else:
            logger.warning(f"Invalid token: {token}")
            return Response(status_code=401)
    except Exception as e:
        logger.error(f"Error generating captcha: {str(e)}")
        return Response(status_code=500, content="Internal server error")

@router.get('/api/v1/captcha/get/image', tags=['Captcha'])
async def get_captcha_image(token: str = Depends(get_token_from_cookie)):
    if TokenActions._check_token_exists(token):
        captcha_data = CaptchaActions().get_captcha_by_token(token)
        
        # Check if captcha_data is None
        if captcha_data is None:
            return Response(status_code=404, content="Captcha not found")

        captcha_base64 = captcha_data.base64
        
        # Check if base64 string is valid
        try:
            captcha_image = base64.b64decode(captcha_base64)
        except (ValueError, TypeError) as e:
            logger.error(f"Failed to decode base64 captcha: {str(e)}")
            return Response(status_code=500, content="Internal server error")

        return Response(
            content=captcha_image,
            media_type="image/png",
            headers={"Captcha-ID": str(captcha_data.id)}  # Ensure ID is a string
        )
    else:
        return Response(status_code=401)


@router.get('/api/v1/captcha/get/data', tags=['Captcha'])
async def get_captcha_data(token: str = Depends(get_token_from_cookie)):
    if TokenActions._check_token_exists(token):
        captcha_data = CaptchaActions().get_captcha_by_token(token)
        return {
            "id": captcha_data.id,
            "retry_count": captcha_data.retry_count
        }
    else:
        return Response(status_code=401)