################################
#                              #
#        Code by Destiny       #
#         [t.me/vmilfe]        #
#                              #
################################
#     13.05.2024   [beta 5]    #
################################



from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware

from app.config.data import Config
from slowapi import Limiter
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address
from fastapi.responses import JSONResponse
from app.config.data import Config

from .routers import default, tokenize, product_range
from .routers.login import site_captcha
from .routers.admin import products, panel
from .routers.basket import user_basket
from .routers.calculator import auto
from .routers.search import search_router
from .routers.metrics import default_metric
from .routers.account import auth, favorite_products, profile


app = FastAPI()

if not Config.dev_mode:
    limiter = Limiter(key_func=get_remote_address)
    app.state.limiter = limiter

    @app.exception_handler(RateLimitExceeded)
    async def rate_limit_handler(exc: RateLimitExceeded):
        reset_time = exc.detail["reset"]
        return JSONResponse(
            status_code=429,
            content={
                "detail": "Rate limit exceeded",
                "reset_time": reset_time
            }
        )
else:
    limiter = Limiter(key_func=lambda: None)
    app.state.limiter = limiter


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=[
        "authorization", 
        "Authorization", 
        "Bearer", 
        "Cookie", 
        "Content-Type", 
        "Accept", 
        "X-Requested-With", 
        "Content-Disposition"
    ]
)
#app.add_middleware(HTTPSRedirectMiddleware)

app.include_router(default.router)
app.include_router(tokenize.router)
app.include_router(site_captcha.router)
app.include_router(product_range.router)
app.include_router(products.router)
app.include_router(user_basket.router)
app.include_router(auto.router)
app.include_router(panel.router)
app.include_router(search_router.router)
app.include_router(default_metric.router)
app.include_router(auth.router)
app.include_router(favorite_products.router)
app.include_router(profile.router)