from fastapi import APIRouter

from app.config.data import Config

router = APIRouter()


@router.get('/api', tags=["Default API"])
async def api_data_request():
    return {
        "version": f"v{Config.version}",
        "host": Config.ip,

        "developer_mode": False
    }