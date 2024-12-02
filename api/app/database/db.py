import secrets, datetime

from peewee import * 
from pathlib import Path
from PIL import Image
# Define the absolute path to your project folder
from pathlib import Path

# Get the current file's directory and then the parent directory
PROJECT_FOLDER = Path(__file__).resolve().parent.parent.parent # Adjust the number of .parent as needed



# Now you can use PROJECT_FOLDER for any file operations

# Now, any relative file operations will be relative to the project folder
from app.models.default import TokenData
from app.config.data import Config


db = SqliteDatabase('app/database/database_file/database.sqlite')


class User(Model):
    id = PrimaryKeyField()
    login = TextField()
    password = TextField()
    email = TextField()
    country = TextField()

    btc = FloatField()
    usdt = FloatField()
    eth = FloatField()
    xmr = FloatField()
    ltc = FloatField()
    doge = FloatField()


    class Meta:
        database = db 

class Token(Model):
    token = TextField()
    ip = TextField()
    last_active_datetime = DateTimeField()
    user = ForeignKeyField(User, backref='token', null=True)

    class Meta:
        database = db 


class Catalog(Model):
    name = TextField()

    class Meta:
        database = db


class Captcha(Model):
    token = TextField()
    text = TextField()
    base64 = TextField()
    retry_count = IntegerField(default=0)

    class Meta:
        database = db


class Category(Model):
    name = TextField()
    catalog = ForeignKeyField(Catalog, backref='categories')

    class Meta:
        database = db


class Products(Model):
    id = PrimaryKeyField()
    type_product = IntegerField()  # 0 - Discounts, 1 - on trend, 2 - maximum benefit
    usd = FloatField()
    usdt = FloatField()
    btc = FloatField()
    euro = FloatField()
    title = TextField()
    location = TextField()
    discount = IntegerField()
    catalog = ForeignKeyField(Catalog, backref='products', null=True)
    cryptoDiscount = IntegerField(null=True)
    fiatDiscount = IntegerField(null=True)
    brand = TextField(null=True)
    brandImg = TextField(null=True)
    colors = list() 
    config = TextField(null=True) 
    doge = FloatField(null=True)
    oldDoge = FloatField(null=True)
    xmr = FloatField(null=True)
    oldXmr = FloatField(null=True)
    ltc = FloatField(null=True)
    oldLtc = FloatField(null=True)
    eth = FloatField(null=True)
    oldEth = FloatField(null=True)
    oldUsd = FloatField(null=True)
    oldEuro = FloatField(null=True)
    category = ForeignKeyField(Category, backref='products', null=True)
    deliveryPrice = FloatField(null=True)
    internationalDelivery = BooleanField(null=True)
    expressDelivery = BooleanField(null=True)
    # Removed img field

    class Meta:
        database = db


class UserBasket(Model):
    id = PrimaryKeyField()
    user = ForeignKeyField(User, backref='basket')
    product = ForeignKeyField(Products, backref='baskets')

    class Meta:
        database = db

class Cart(Model):
    user = ForeignKeyField(User, backref='carts')
    product = ForeignKeyField(Products, backref='in_carts')
    config = TextField()

    class Meta:
        database = db

class FilesData(Model):
    id = PrimaryKeyField()
    data = TextField()
    product = ForeignKeyField(Products, backref='files')

    class Meta:
        database = db 

class CryptocurrencyPrices(Model):
    btc = FloatField()
    usdt = FloatField()
    eth = FloatField()
    xmr = FloatField()
    ltc = FloatField()
    doge = FloatField()
    
    class Meta:
        database = db 

class FavoriteProducts(Model):
    id = PrimaryKeyField()
    user = ForeignKeyField(User, backref='favorites')
    product = ForeignKeyField(Products, backref='favorited_by')

    class Meta:
        database = db


with db:
    db.create_tables([Token, Products, User, FilesData, CryptocurrencyPrices, Catalog, Category, UserBasket, FavoriteProducts, Cart, Captcha])


class MetricActions:
    def __init__(self):
        self.currently_time = datetime.datetime.now()

    def get_data(self) -> dict:
        monthly_online = self.get_activity_count(datetime.timedelta(days=30))
        weekly_online = self.get_activity_count(datetime.timedelta(weeks=1))
        today_online = self.get_activity_count(datetime.timedelta(days=1))
        yesterday_online = self.get_activity_count(datetime.timedelta(days=1), offset=datetime.timedelta(days=1))
        three_days_online = self.get_activity_count(datetime.timedelta(days=3))
        four_days_online = self.get_activity_count(datetime.timedelta(days=4))

        return dict(
            monthlyOnline=monthly_online,
            weeklyOnline=weekly_online,
            todayOnline=today_online,
            yesterdayOnline=yesterday_online,
            threeDaysOnline=three_days_online,
            fourDaysOnline=four_days_online,
            currentlyOnline=self.get_currently_online()
        )

    def get_activity_count(self, period: datetime.timedelta, offset: datetime.timedelta = None) -> int:
        query_time = self.currently_time - period
        if offset:
            query_time += offset

        return Token.select().where(
            (Token.last_active_datetime >= query_time)
        ).distinct().count()

    def get_currently_online(self) -> int:
        recent_online_threshold = datetime.datetime.now() - datetime.timedelta(minutes=5)
        return Token.select().where(
            (Token.last_active_datetime >= recent_online_threshold)
        ).distinct().count()


class BasketActions:
    def __init__(self, token: str = None) -> None:
        self.token = token 
    
    def add_product_to_basket(self, product_id: int, quantity: int = 1, token: str = None) -> None:
        token = token or self.token
        if not token:
            raise ValueError("Токен не предоставлен")
        # Здесь должен быть код для добавления продукта в корзину пользователя, идентифицируемого по токену

class CryptoActions:
    def update(usdt: float, usd: float, btc: float) -> None:
        '''
        Обновляет курс криптовалюты.
        - usdt: курс USDT к USD
        - usd: курс USD к местной валюте
        - btc: курс BTC к USD
        '''



class CaptchaActions:
    def __init__(self, _base64: str = None, token: str = None, text: str = None) -> None:
        self.token = token
        self.base64 = _base64
        self.text = text
    
    def create_new(self) -> Captcha:
        existing_captcha = Captcha.get_or_none(Captcha.token == self.token)
        if existing_captcha:
            return False
        
        return Captcha.create(base64=self.base64, token=self.token, text=self.text)
    

    def refresh(self) -> Captcha:
        Captcha.delete().where(Captcha.token == self.token).execute()
        return Captcha.create(base64=self.base64, token=self.token, text=self.text)
    
    def captcha_solve(captcha_id: int, text: str) -> dict:
        captcha = Captcha.get_or_none(Captcha.id == captcha_id)

        if captcha is None:
            return {"result": False, "message": "captcha_not_found"}

        if captcha.retry_count > 3:
            Captcha.delete().where(Captcha.id == captcha_id).execute()
            return {"result": False, "message": "captcha_deleted"}
        
        Captcha.update(retry_count=captcha.retry_count + 1).where(Captcha.id == captcha_id).execute()

        if captcha.text == text:
            return {"result": True, "message": "captcha_solved"}
        
        return {"result": False, "message": "captcha_not_solved"}

    def get_captcha_by_token(self, token: str) -> Captcha:
        return Captcha.get_or_none(Captcha.token == token)


class UserActions:
    def __init__(self, token: str = None) -> None:
        self.token = token

    def get_profile_info(self, token: str = None) -> dict:
        if not token:
            token = self.token
        
        try:
            token_record = Token.get_or_none(Token.token == token)
            if not token_record:
                return {"error": "Token not found"}
            
            user = User.get(User.id == token_record.user_id)
            
            return {
                "result": True,
                "data": {
                    "login": user.login,
                    "email": user.email,
                    "country": user.country,
                    "promo": Config.default_promo
                }
            }
        except User.DoesNotExist:
            return {"error": "User  not found"}
        except Exception as e:
            return {"error": str(e)} 
           
    def get_user_orders(self, token: str) -> dict:
        if not token:
            token = self.token
        try:
            token_record = Token.get_or_none(Token.token == token)
            if not token_record:
                return {"error": "Token not found"}
            user = User.get(User.id == token_record.user_id)
            return {
                "result": True,
                "data": {
                    "orders": user.country
                }
            }
        except User.DoesNotExist:
            return {"error": "User not found"}
    
    def get_currencies(self, token: str) -> dict:
        if not token:
            token = self.token
        try:
            token_record = Token.get_or_none(Token.token == token)
            if not token_record:
                return {"error": "Token not found"}
            user = User.get(User.id == token_record.user_id)
            return {
                "result": True,
                "data": {
                    "usdt": user.usdt,
                    "btc": user.btc,
                    "eth": user.eth,
                    "xmr": user.xmr,
                    "ltc": user.ltc,
                    "doge": user.doge
                }
            }
        except User.DoesNotExist:
            return {"error": "User not found"}

    def update_country(self, token: str, country: str) -> bool:
        try:
            user = User.get(User.token == token)
            user.country = country  # Assuming a 'country' field exists in User model
            user.save()
            return True
        except User.DoesNotExist:
            return False

    def update_setting(self, token: str, setting: str, value: str) -> bool:
        return False

class CurrencyActions:
    def refresh_currencies(self, token: str) -> dict:
        return {"result": True, "message": "Currencies refreshed"}

    def get_currency_info(self, token: str, currency: str) -> dict:
        # Placeholder method to simulate retrieving currency information for a user
        return {"currency": currency, "info": "Currency information"}

    def get_usdt_address(self, token: str, blockchain: str, currency: str, amount: float, type: str) -> dict:
        # Placeholder method to simulate retrieving a USDT address for a user
        return {"address": "USDT_ADDRESS", "blockchain": blockchain, "currency": currency, "amount": amount, "type": type}

class EmailActions:
    def update_email(self, token: str, newEmail: str) -> bool:
        try:
            user = User.get(User.token == token)
            user.email = newEmail  # Assuming an 'email' field exists in User model
            user.save()
            return True
        except User.DoesNotExist:
            return False

import io

def load_file(file_path):
    try:
        full_path = PROJECT_FOLDER / Path(file_path)
        print (full_path)
        with open(full_path, 'rb') as f:  # Open the file in binary mode
            read = f.read()
            if (read):
                return io.BytesIO(read)
    except FileNotFoundError:
        # Handle the error (e.g., log it, return None, etc.)
        return None
import base64
import json
class FileActions:
    def __init__(self, file_id: int = None, product_id: int = None) -> None:
        self.file_id = file_id 
        self.product_id = product_id

    def get_files_by_product(self) -> list:
        file_paths = [_.data for _ in FilesData.select(FilesData.data).where(FilesData.product == self.product_id)]
        responses = []  # Initialize an empty list to hold all responses
        for path in file_paths:
            print(f"Trying to load file: {path}")  # Debug statement
            img = load_file(path)
            if img is not None:
                img.seek(0)
                image_data = img.read()
                baseencode = base64.b64encode(image_data).decode('utf-8')
                response = {
                    'image': baseencode,
                    'filename': path
                }
                responses.append(response)  # Append each response to the list
            else:
                print(f"File not found: {path}")  # Debug statement
                responses.append({'error': 'File not found'})  # Append an error response if the file
        return json.dumps(responses)  # Return the list of responses as JSON
    
    def get_file_data_by_request(self) -> bytes or None:
        product = Products.get_or_none(Products.id == self.product_id)
        
        if product is None:
            return {"error": "product_not_found"}
        
        if not FilesData.select().where(FilesData.product == product, FilesData.id == self.file_id).exists():
            return {"error": "files_not_found"}
        
        return FilesData.get(FilesData.id == self.file_id).data
    
    def upload_file(self, file_data: str) -> bool or dict:
        if not Products.select().where(Products.id == self.product_id).exists():
            return {"error": "product_not_found"}
        
        product = Products.get(Products.id == self.product_id)
        FilesData.create(data=file_data, product=product)


class FavoriteProductActions:
    def __init__(self, token: str = None) -> None:
        self.token = token 
    
    def get_favorite_products(self, token: str = None) -> list:
        if not token:
            token = self.token
        if not token:
            return []
        try:
            user_token = Token.get(Token.token == token)
            favorites = FavoriteProducts.select().where(FavoriteProducts.user == user_token.user)
            return [{"product_id": favorite.product.id, "product_name": favorite.product.title} for favorite in favorites]
        except Token.DoesNotExist:
            return []

    def delete_favorite_product(self, product_id: int, token: str = None) -> bool:
        if not token:
            token = self.token
        try:
            user_token = Token.get(Token.token == token)
            favorite = FavoriteProducts.get((FavoriteProducts.user == user_token.user) & (FavoriteProducts.product_id == product_id))
            favorite.delete_instance()
            return True
        except (Token.DoesNotExist, FavoriteProducts.DoesNotExist):
            return False

    def add_favorite_product(self, product_id: int, token: str = None) -> bool:
        if not token:
            token = self.token
        try:
            user_token = Token.get(Token.token == token)
            product = Products.get(Products.id == product_id)
            if not FavoriteProducts.select().where(FavoriteProducts.user == user_token.user, FavoriteProducts.product == product).exists():
                FavoriteProducts.create(user=user_token.user, product=product)
                return True
            return False  # Возвращает False, если продукт уже в фаворитах
        except (Token.DoesNotExist, Products.DoesNotExist):
            return False

class CartActions:
    def __init__(self, token: str = None) -> None:
        self.token = token

    def add_product_to_cart(self, product_id: int, config: str, token: str = None) -> bool:
        if not token:
            token = self.token
        try:
            user = User.get(User.token == Token.get(Token.token == token).id)
            product = Products.get(Products.id == product_id)
            Cart.create(user=user, product=product, config=config)
            return True
        except (User.DoesNotExist, Products.DoesNotExist):
            return False


class ProductActions:
    def __init__(self, token: str or None = None) -> None:
        self.token = token 
    
    def search_products(self, request_data: TokenData,  query: str) -> list:
        if request_data.token:
            self.token = request_data.token 

        result = []

        if True: #Tokens.select().where(Tokens.token == self.token).exists():
            if query == '' or query is None:
                return result

            for item in Products.select():
                if query.lower() in item.title.lower():
                    result.append(
                            {"product_id": item.id}
                        )
        
        return result 
    
    def get_categories_and_catalogs():
        catalogs = Catalog.select()
        result = []
        for catalog in catalogs:
            categories = Category.select().where(Category.catalog == catalog)
            result.append({
                "catalog": catalog.name,
                "categories": [category.name for category in categories]
            })
        return result

    def get_categories(self, catalog: str = None) -> list or None:
        if catalog is not None:
            catalog = catalog.casefold()
            print(catalog)
            catalog_instance = Catalog.get_or_none(fn.LOWER(Catalog.name) == catalog)
            print(f"Catalog: {catalog}, Catalog Instance: {catalog_instance}")
            if catalog_instance is not None:
                categories = [category.name for category in Category.select().where(Category.catalog == catalog_instance)]
                print(f"Categories: {categories}")
                return categories
        return None

    def get_product_list(self, token: str = None, category: str = None, catalog: str = None, product_id: int = None) -> list or None:  
        if token:
            self.token = token 

        # Check for a specific product by ID
            if product_id is not None:
                if Products.select().where(Products.id == product_id).exists():
                    product = Products.get(Products.id == product_id)
                    return {
                        "id": product.id, 
                        "usd": product.usd,
                        "usdt": product.usdt,
                        "btc": product.btc,
                        "euro": int(product.euro),
                        "title": product.title,
                        "location": product.location,
                        "discount": product.discount,
                        "product_type": product.type_product, 
                        "brand": product.brand,
                        "category": product.category.name,
                        "files": FileActions(product_id=product.id).get_files_by_product()
                    }
                return {"error": "not_found"}

            # Normalize category and catalog
            category = category.casefold() if category is not None else None
            catalog = catalog.casefold() if catalog is not None else None

            print("Normalized Catalog:", catalog)
            print("Normalized Category:", category)

            # Start with all products
            items = Products.select()

            # Check for category existence regardless of catalog
            if category:
                category_instance = Category.get_or_none(fn.LOWER(Category.name) == category)
                print("Category Instance:", category_instance)

                if category_instance:
                    # If the category exists, filter products by category
                    items = items.where(Products.category == category_instance)
                else:
                    print(f"Category '{category}' not found.")
                    return {"error": f"Category '{category}' not found."}

            # Check for catalog existence
            if catalog:
                # Retrieve all catalogs that match the given name
                catalog_instances = Catalog.select().where(fn.LOWER(Catalog.name) == catalog)
                catalog_list = list(catalog_instances)  # Convert the query result to a list
                
                print("Catalog Instances:", catalog_list)
                
                if catalog_list:
                    # If there are multiple catalogs, combine them
                    # Assuming you want to filter products by all found catalogs
                    items = items.where(Products.catalog.in_(catalog_list))
                else:
                    print(f"Catalog '{catalog}' not found.")
                    return {"error": f"Catalog '{catalog}' not found."}

            # Check for token validity (assuming you have a token validation logic)
            if True:  # Replace with actual token validation logic
                return {
                    "data": [
                        {
                            "id": item.id, 
                            "usd": item.usd,
                            "usdt": item.usdt,
                            "btc": item.btc,
                            "euro": item.euro,
                            "title": item.title,
                            "location": item.location,
                            "discount": item.discount,
                            "product_type": item.type_product, 
                            "brand": item.brand,
                            "category": item.category.name,
                            "files": FileActions(product_id=item.id).get_files_by_product()
                        }
                        for item in items
                        if item.id is not None
                    ]
                }
        else:
            return {"error": "token_error"}
 
    def get_product_by_id(product_id: int):
        if Products.select(Products.id == product_id).exists():
            product = Products.get(Products.id == product_id)
            return {
                "id": product.id, 
                "usd": product.usd,
                "usdt": product.usdt,
                "btc": product.btc,
                "euro": int(product.euro),
                "title": product.title,
                "location": [item for item in product.location.split('|')],
                "discount": product.discount,
                "product_type": product.type_product, 
                "files": FileActions(product_id=product.id).get_files_by_product(),
                "brand": product.brand,
                "brandImg": product.brandImg,
                "colors":  [item for item in (product.colors or '').split('|')],
                "config": [item for item in (product.config or '').split('|')],
                "doge": product.doge,
                "oldDoge": product.oldDoge,
                "xmr": product.xmr,
                "oldXmr": product.oldXmr,
                "ltc": product.ltc,
                "oldLtc": product.oldLtc,
                "eth": product.eth,
                "oldEth": product.oldEth,
                "oldUsd": product.oldUsd,
                "oldEuro": product.oldEuro,
                "category": product.category,
                "deliveryPrice": product.deliveryPrice,
                "internationalDelivery": product.internationalDelivery,
                "expressDelivery": product.expressDelivery
            }
        else:
            return {"error": "not_found"}

    def create_or_get_category(category_name: str, catalog_instance) -> int:
        # Check if the category exists
        category_instance = Category.get_or_none(fn.LOWER(Category.name) == category_name, Category.catalog == catalog_instance)
        
        if category_instance:
            return category_instance.id  # Return the existing category ID
        else:
            # Create a new category if it doesn't exist
            new_category = Category.create(name=category_name, catalog=catalog_instance)
            return new_category.id  # Return the new category ID

    def create_new(
        usd: float, 
        usdt: float, 
        btc: float, 
        euro: float, 
        title: str, 
        location: str, 
        product_type: int, 
        discount: int, 
        catalog: str, 
        category: str, 
        brand: str, 
        brandImg: str, 
        colors: list, 
        config: str, 
        doge: float, 
        oldDoge: float, 
        xmr: float, 
        oldXmr: float, 
        ltc: float, 
        oldLtc: float, 
        eth: float, 
        oldEth: float, 
        oldUsd: float, 
        oldEuro: float, 
        deliveryPrice: float, 
        internationalDelivery: bool, 
        expressDelivery: bool,
    ):
        # Ensure catalog instance exists or create it
        catalog_instance = Catalog.get_or_none(fn.LOWER(Catalog.name) == catalog)
        if not catalog_instance:
            # Create the catalog if it does not exist
            catalog_instance = Catalog.create(name=catalog)
            print(f"Catalog '{catalog}' created successfully.")

        # Ensure category instance exists or create it
        category_id = ProductActions.create_or_get_category(category, catalog_instance)

        # Create the product with the validated category ID
        product = Products.create(
            type_product=product_type,
            usd=usd,
            usdt=usdt,
            btc=btc,
            euro=euro,
            title=title,
            location=location,
            discount=discount,
            catalog=catalog_instance,  # Use the catalog instance
            category=category_id,  # Use category_id instead of category name
            brand=brand,
            brandImg=brandImg,
            colors=colors,
            config=config,
            doge=doge,
            oldDoge=oldDoge,
            xmr=xmr,
            oldXmr=oldXmr,
            ltc=ltc,
            oldLtc=oldLtc,
            eth=eth,
            oldEth=oldEth,
            oldUsd=oldUsd,
            oldEuro=oldEuro,
            deliveryPrice=deliveryPrice,
            internationalDelivery=internationalDelivery,
            expressDelivery=int(expressDelivery),
        )
        return product.id  # Return the ID of the created product

class TokenActions:
    def __init__(self, token: str or None = None):
        self.token = token
        self.result_code = {
            0: {
                "result": False,
                "error": "token_not_found"
            },
            1: {
                "result": True,
                "token": self.token
            }, 
            2: {
                "result": False,
                "error": "token_expired"
            }
        }
    

    @staticmethod
    def _check_token_exists(token: str) -> bool:
        return Token.select().where(Token.token == token).exists()
    

    @staticmethod
    def create_new_token(ip: str):
        token = Token.create(token=secrets.token_hex(32), ip=ip, generate_datetime=datetime.datetime.now(), user=None, last_active_datetime=datetime.datetime.now())
        return token.token


    def _active_token_datetime_mark(self) -> None:
        if self.token is not None:
            token_actived = Token.get_or_none(Token.token == self.token)
            if token_actived is not None:
                token_actived.last_active_datetime = datetime.datetime.now()
                token_actived.save()


    def check_is_valid(self, ip: str) -> tuple:
        if self.token is None:
            return self.result_code[0]
        else:
            token_actived = Token.get_or_none(Token.token == self.token)

            if token_actived is None:
                return self.result_code[0] 
            
            elif token_actived.ip != ip:
                token_actived.delete_instance()
                return self.result_code[0]
            
            else:
                if token_actived.last_active_datetime + datetime.timedelta(seconds=Config.token.active_time) < datetime.datetime.now():
                    token_actived.delete_instance()
                    return self.result_code[2]  
                
                return self.result_code[1]
    
    def connect_token_to_user(self, user_id: int):
        if self.token is None:
            print("Token is None.")
            return False

        print(f"Attempting to connect token: {self.token} to user: {user_id}")

        token_actived = Token.get_or_none(Token.token == self.token)
        if token_actived is None:
            print(f"Token {self.token} does not exist.")
            return False

        try:
            user = User.get(User.id == user_id)
            print(f"User  found: {user}")
            token_actived.user = user
            token_actived.save()
            print(f"Connected token {self.token} to user {user_id}.")
            return True
        except Exception as e:
            print(f"Error connecting token to user: {e}")
            return False    
        