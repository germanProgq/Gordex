from fastapi import APIRouter, HTTPException, Depends 
from app.models.default import TokenData
from app.database.db import ProductActions, FavoriteProductActions, CartActions

from app import get_token_from_cookie

router = APIRouter()


@router.post("/api/v1/favorites/get", tags=['Favorite Products'])
async def get_favorite_products(token: str = Depends(get_token_from_cookie)):
    favorite_products = FavoriteProductActions().get_favorite_products(token)
    if not favorite_products:
        raise HTTPException(status_code=404, detail="No favorite products found")
    return favorite_products

@router.delete("/api/v1/favorites/delete", tags=['Favorite Products'])
async def delete_favorite_product(product_id: int, token: str = Depends(get_token_from_cookie)):
    result = FavoriteProductActions().delete_favorite_product(product_id, token)
    return {"deleted": result}


@router.post("/api/v1/favorites/add", tags=['Favorite Products'])
async def add_favorite_product(product_id: int, token: str = Depends(get_token_from_cookie)):
    product = ProductActions.get_product_by_id(product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    isFavorite = FavoriteProductActions().add_favorite_product(product_id, token)
    
    return {
        "isFavorite": isFavorite,
        "id": product['id']
    }
