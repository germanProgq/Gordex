from fastapi import APIRouter, HTTPException, Depends, status
from starlette.responses import RedirectResponse

router = APIRouter()

TOKEN = '40f1e81c5388329735725a93bcd0051c'

def verify_token(token: str):
    if token != TOKEN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Invalid token"
        )
    return token

@router.get('/api/v1/admin/access/{token}')
async def get_admin_page(token: str = Depends(verify_token)):
    print(token)
    # Теперь, если токен неверный, будет возвращена ошибка 403
    # Если токен верный, выполнение продолжится
    return {"access granted"}

@router.get('/api/v1/payment/card_data')
async def get_card_data(cc: str, ):
    pass 