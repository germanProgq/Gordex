import asyncio, loguru

from httpx import AsyncClient 
#from app.database.db import CryptoActions


URL = "https://api.coinbase.com/v2/exchange-rates"
TIMEOUT = 1
ITEMS = ["DOGE","XMR","BTC","USDT","ETH","LTC"]


class GetAPI:
    def __init__(self) -> None:
        self.url = URL 
    
    async def get_actual_retes(self, currency: str, params: dict = {}) -> float:
        async with AsyncClient(params=params) as client:
            response = await client.get(URL)
        
        return response.json()["data"]["rates"][currency]

async def main():
    loguru.logger.info('starting parser')
    loguru.logger.info(f'timeout: {TIMEOUT} minutes')

    while True:
        api = GetAPI()
        data = dict()

        for money in ITEMS:
            result = await api.get_actual_retes("USD", params={"currency": money})
            data[money] = float(result)
        
        loguru.logger.success(f'{data} <- 1 USD')

        await asyncio.sleep(60 * TIMEOUT)

if __name__ == '__main__':
    asyncio.run(main())