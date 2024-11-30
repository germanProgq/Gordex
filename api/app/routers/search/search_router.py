from fastapi import APIRouter, Query

from app.database.db import ProductActions
from app.models.default import TokenData


router = APIRouter()
product_actions = ProductActions()


@router.post('/api/v1/search')
async def search_products(
    request_data: TokenData,
    query: str = Query(None, title="Query", description="Query parse parameter for search")
):
    product_list = product_actions.search_products(request_data, query)
    return {"products": product_list}
