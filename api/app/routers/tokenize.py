from fastapi import APIRouter, Request, Depends, Response
from app.database.db import TokenActions
from app import get_token_from_cookie

router = APIRouter()


@router.get('/api/v1/token/validate', tags=["Token"], description="Check valid token")
async def ch_token_request(request: Request, token: str = Depends(get_token_from_cookie)):
    print(f"Received token: {token}") 
    database = TokenActions(token)

    return database.check_is_valid(request.client.host)


@router.get('/api/v1/token/create', tags=['Token'], description="Create new token")
async def create_token_request(request: Request):
    database = TokenActions()
    new_token = database.create_new_token(request.client.host)

    return {"result": True, "token": new_token}
