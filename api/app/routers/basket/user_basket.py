from fastapi import APIRouter

router = APIRouter()


@router.post('/api/v1/user/basket/add')
async def basket_new_item_request():
    return {"code": "development"}

@router.post('/api/v1/user/basket/get')
async def basket_get_items_request():
    return {"code": "development"}

@router.post('/api/v1/user/basket/remove')
async def basket_remove_item_request():
    return {"code": "development"}