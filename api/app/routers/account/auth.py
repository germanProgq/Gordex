from fastapi import APIRouter, HTTPException, Response, Body, Request, Depends
from app.models.default import AuthRequest, CaptchaData
from app.database.db import CaptchaActions, User, TokenActions, db
from peewee import DoesNotExist, IntegrityError


from app.config.data import Config
from app import get_token_from_cookie
from app.database.db import UserActions, CurrencyActions, EmailActions

from slowapi import Limiter
from slowapi.util import get_remote_address
from pydantic import BaseModel

from pydantic import BaseModel
userAc = UserActions()

class RegisterRequest(BaseModel):
    mail: str
    password: str
    captcha: int

class CaptchaData(BaseModel):
    captcha_id: int
    mail: str
    password: str
    captcha_text: str

class AuthRequest(BaseModel):
    captcha_data: CaptchaData

router = APIRouter()


if Config.dev_mode:
    limiter = Limiter(key_func=get_remote_address)
else:
    limiter = Limiter(key_func=lambda: None)


async def authenticate_user(username: str, password: str,):
    user = User.get_or_none(User.login == username)
    if user:
        if user.password == password:
            return user


async def register_user(mail: str, password: str):
    if User.select().where(User.email == mail).exists():
        return None
    else:
        result = User.create(email=mail, login=mail, password=password, country='Unknown', btc=0, usdt=0, eth=0, xmr=0, ltc=0, doge=0)
        return result 


@router.post('/api/v1/account/auth', tags=['Authenticate'], description="Authenticate user with mail/password")
async def auth_account_request(auth_data: AuthRequest, token: str = Depends(get_token_from_cookie)):
        # Access the fields from the nested CaptchaData
    captcha_id = auth_data.captcha_data.captcha_id
    mail = auth_data.captcha_data.mail
    password = auth_data.captcha_data.password
    captcha_text = auth_data.captcha_data.captcha_text

    user = await authenticate_user(mail, password)

    if user is None:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    token = TokenActions(token)
    captcha_data = CaptchaActions.captcha_solve(captcha_id, captcha_text)


    if token.connect_token_to_user(user.id):
        token._active_token_datetime_mark()
        userConnectionCheck = userAc.get_profile_info(token)
        print(userConnectionCheck)
        
    else:
        return Response(status_code=400, content={"error": "token_expired"})

    return {"access_token": token.token} 



@router.post('/api/v1/account/register', tags=['Authenticate'], description="Register new user with mail/password")
async def register_account(request: Request, register_data: RegisterRequest, token: str = Depends(get_token_from_cookie)):
    if not TokenActions._check_token_exists(token):
        raise HTTPException(status_code=400, detail="Token does not exist or has expired")
    
    mail = register_data.mail
    print(mail)
    password = register_data.password
    captcha = register_data.captcha
    
    token_db = TokenActions(token)
    new_user = await register_user(mail, password)

    if new_user is None:
        raise HTTPException(status_code=400, detail="Mail arlead used.")
    
    token_db.connect_token_to_user(new_user.id)
    token_db._active_token_datetime_mark()

    return {"message": "User registered successfully", "access_token": token, "token_type": "bearer"}