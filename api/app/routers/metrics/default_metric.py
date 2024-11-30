from fastapi import APIRouter, Request, Depends

from app.database.db import MetricActions
from app import get_token_from_cookie

router = APIRouter()


@router.get('/api/v1/admin/metrics')
async def get_metric_request(token: str = Depends(get_token_from_cookie)):
    metric = MetricActions()

    return metric.get_data()

