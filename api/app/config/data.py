import requests
import os

class Config:
    @staticmethod
    def get_public_ip():
        try:
            response = requests.get('https://httpbin.org/ip')
            response.raise_for_status()
            return response.json().get('origin', 'Unknown IP')
        except (requests.exceptions.RequestException, ValueError) as e:
            print(f"Error retrieving public IP: {e}")
            return "Unknown IP"

    @classmethod
    def get_ip_with_port(cls):
        return f'http://{cls.get_public_ip()}:8000'

    @classmethod
    def initialize(cls):
        cls.ip = cls.get_ip_with_port()
        cls.version = '1.8.1'
        cls.dev_mode = os.getenv("DEV_MODE", "false").lower() == "true"
        cls.default_promo = ""

    class token:
        ip_active_time = 86400  # 1 day in seconds
        active_time = 604800  # 1 week in seconds

# Initialize the class attributes
Config.initialize()

# Now you can access Config without errors
print(Config.ip)