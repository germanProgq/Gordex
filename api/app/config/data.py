import requests
import os

class Config:
    @staticmethod
    def get_public_ip():
        response = requests.get('https://httpbin.org/ip')
        return response.json()['origin']

    ip = f'http://{get_public_ip()}:8000'
    version = '1.8.1'
    dev_mode = os.getenv("DEV_MODE", "false").lower() == "true"
    default_promo = ""


    class token:
        ip_active_time = 86400 # 1 day in seconds
        active_time = 604800  # 1 week in seconds
