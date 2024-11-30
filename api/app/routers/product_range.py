import base64

from fastapi import APIRouter, Response, Query, Depends
from app.database.db import ProductActions, FileActions, TokenActions
from app import get_token_from_cookie


router = APIRouter()


@router.get("/api/v1/product/get/list", tags=["Product"])
async def get_product_list(
    token: str = Depends(get_token_from_cookie),
    catalog: str = Query(None, title="Catalog", description="Catalog parse parameter"),
    category: str = Query(None, title="Category", description="Category parse parameter"),
    product_id: int = Query(None, title="Product Id", description="Get product <- id")
):
    print(category)
    return ProductActions().get_product_list(token, catalog=catalog, category=category, product_id=product_id)


@router.get("/api/v1/product/{product_id}/{file_id}/get", tags=["File"])
async def get_product_file(product_id: int, file_id: int):
    return Response(base64.b64decode(FileActions(file_id=file_id, product_id=product_id).get_file_data_by_request()), media_type="image/png")


@router.get("/api/v1/product/{product_id}/get", tags=["Product"])
async def get_product_data(
    product_id: int,
    token: str = Depends(get_token_from_cookie),
):
    if TokenActions._check_token_exists(token):
        return ProductActions.get_product_by_id(product_id)


@router.get("/api/v1/categories/get", tags=["Category and Catalog"])
async def get_product_categories(
    catalog: str = Query(None, title="Catalog", description="Catalog parse parameter"),
):
    return ProductActions().get_categories(catalog=catalog)


@router.get("/api/v1/catalogs/get", tags=["Category and Catalog"])
async def get_catalogs_with_categories():
    return ProductActions.get_categories_and_catalogs()


