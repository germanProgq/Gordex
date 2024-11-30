from pydantic import BaseModel

class TokenData(BaseModel):
    token: str or None

class CaptchaData(BaseModel):
    captcha_id: int
    captcha_text: str

class AuthRequest(BaseModel):
    captcha_data: CaptchaData
    mail: str
    password: str

class ProductData(BaseModel):
    usd: float or int 
    usdt: float or int
    btc: float or int 
    euro: float or int 
    title: str 
    location: str  
    item_type: int
    discount: int or 0
    catalog: str or None
    category: str or None
    brand: str or None
    brandImg: str or None
    colors: str or None
    config: str or None
    doge: float or int
    oldDoge: float or int
    xmr: float or int
    oldXmr: float or int
    ltc: float or int
    oldLtc: float or int
    eth: float or int
    oldEth: float or int
    oldUsd: float or int
    oldEuro: float or int
    deliveryPrice: float or int
    internationalDelivery: bool
    expressDelivery: bool

