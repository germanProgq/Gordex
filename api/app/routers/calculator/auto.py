from fastapi import APIRouter

router = APIRouter()

@router.get('/api/v1/exchange-rates/history')
async def get_exchange_rates_history():
    return {
        "DOGE": 0.076,
        "MONERO": 167.14,
        "USDT": 1.00,
        "BTC": 36_702.40,
        "LTC": 72.55,
        "ETH": 2_084.40
        }