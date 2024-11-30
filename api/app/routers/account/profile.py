from fastapi import APIRouter, HTTPException, Body
from app.models.default import TokenData
from app.database.db import UserActions, CurrencyActions, EmailActions
from app import get_token_from_cookie
from fastapi import Depends

router = APIRouter()
userAct = UserActions()


@router.post("/api/v1/profile/info")
async def profile_info(token: str = Depends(get_token_from_cookie)):

    profile_info = userAct.get_profile_info(token)
    user_orders = userAct.get_user_orders(token)
    user_currency = userAct.get_currencies(token)

    combined_info = {
        "profile_info": profile_info,
        "user_orders": user_orders,
        "user_currency": user_currency,
    }
    
    return combined_info

@router.put("/api/v1/profile/update/country")
async def update_country_profile(token: str = Depends(get_token_from_cookie), country: str = Body(...)):
    result = UserActions().update_country(token, country)
    if result:
        return {"country": country}
    else:
        raise HTTPException(status_code=404, detail="User not found")

@router.get("/api/v1/profile/get/currencies")
async def get_currencies_profile(token: str = Depends(get_token_from_cookie)):
    return UserActions().get_currencies(token)


@router.put("/api/v1/profile/update/email")
async def update_email_form(token: str = Depends(get_token_from_cookie), newEmail: str = Body(...)):
    new_email = EmailActions().update_email(token, newEmail)
    if new_email:
        return {"newEmail": newEmail}
    else:
        raise HTTPException(status_code=404, detail="Email update failed")