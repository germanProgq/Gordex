import random
from datetime import datetime
from random import randint
from peewee import SqliteDatabase

from app.database.db import Category, Catalog, Products


db = SqliteDatabase('app/database/database_file/database.sqlite')


categories = {
    'Electronic': ['Phones', 'Graphics Cards', 'Processors', 'Game Consoles', 'Virtual Reality', 'Headphones', 'Electronic Clock'],
    'Clothing': ['Outerwear', 'T-shirt', 'Sweatshirt', 'Sweaters', 'Shirts', 'Fleece Clothes', 'Shorts', 'Pants', 'Hats', 'Socks'],
    'Shoes': ['Boots', 'Sneakers', 'Slippers', 'Sandals'],
    'Bags': ["Women's Handbags", 'Backpacks', 'Sports Bags', 'Shoulder Bags', 'Belt Bags'],
    'Accessories': ['Watches', 'Wallets', 'Glasses', 'Belts', 'Jewelry']
}

catalogs = []
for category_name, subcategories in categories.items():
    catalogs.append({category_name: subcategories})

products_data = [
    [
        {
            'type_product': 0, 
            'usd': 150.0, 
            'usdt': 150.0, 
            'btc': 0.02, 
            'euro': 130.0, 
            'title': 'Tech Gadget', 
            'location': 'Russia', 
            'discount': 5,
            'cryptoDiscount': random.randint(1, 10),
            'fiatDiscount': random.randint(1, 10),
            'brand': random.choice(['TechBrand1', 'TechBrand2', 'TechBrand3']),
            'brandImg': f"image_{random.randint(1, 100)}.jpg",
            'colors': random.choice(['Silver', 'Black', 'White']),
            'config': random.choice(['Basic', 'Advanced', 'Pro']),
            'doge': random.uniform(0.01, 0.1),
            'oldDoge': random.uniform(0.01, 0.1),
            'xmr': random.uniform(0.01, 0.1),
            'oldXmr': random.uniform(0.01, 0.1),
            'ltc': random.uniform(0.01, 0.1),
            'oldLtc': random.uniform(0.01, 0.1),
            'eth': random.uniform(0.01, 0.1),
            'oldEth': random.uniform(0.01, 0.1),
            'oldUsd': random.uniform(150.0, 600.0),
            'oldEuro': random.uniform(130.0, 550.0),
            'deliveryPrice': random.uniform(10.0, 25.0),
            'internationalDelivery': random.choice([True, False]),
            'expressDelivery': random.choice([True, False])
        },
        {
            'type_product': 1, 
            'usd': 300.0, 
            'usdt': 300.5, 
            'btc': 0.025, 
            'euro': 270.0, 
            'title': 'Fashion Accessory', 
            'location': 'Germany', 
            'discount': 3,
            'cryptoDiscount': random.randint(1, 10),
            'fiatDiscount': random.randint(1, 10),
            'brand': random.choice(['FashionBrand1', 'FashionBrand2', 'FashionBrand3']),
            'brandImg': f"image_{random.randint(1, 100)}.jpg",
            'colors': random.choice(['Red', 'Green', 'Blue']),
            'config': random.choice(['Small', 'Medium', 'Large']),
            'doge': random.uniform(0.01, 0.1),
            'oldDoge': random.uniform(0.01, 0.1),
            'xmr': random.uniform(0.01, 0.1),
            'oldXmr': random.uniform(0.01, 0.1),
            'ltc': random.uniform(0.01, 0.1),
            'oldLtc': random.uniform(0.01, 0.1),
            'eth': random.uniform(0.01, 0.1),
            'oldEth': random.uniform(0.01, 0.1),
            'oldUsd': random.uniform(300.0, 700.0),
            'oldEuro': random.uniform(270.0, 650.0),
            'deliveryPrice': random.uniform(10.0, 25.0),
            'internationalDelivery': random.choice([True, False]),
            'expressDelivery': random.choice([True, False])
        },
        {
            'type_product': 2, 
            'usd': 450.0, 
            'usdt': 450.0, 
            'btc': 0.03, 
            'euro': 400.0, 
            'title': 'Outdoor Equipment', 
            'location': 'France', 
            'discount': 7,
            'cryptoDiscount': random.randint(1, 10),
            'fiatDiscount': random.randint(1, 10),
            'brand': random.choice(['OutdoorBrand1', 'OutdoorBrand2', 'OutdoorBrand3']),
            'brandImg': f"image_{random.randint(1, 100)}.jpg",
            'colors': random.choice(['Brown', 'Green', 'Grey']),
            'config': random.choice(['Standard', 'Enhanced', 'Premium']),
            'doge': random.uniform(0.01, 0.1),
            'oldDoge': random.uniform(0.01, 0.1),
            'xmr': random.uniform(0.01, 0.1),
            'oldXmr': random.uniform(0.01, 0.1),
            'ltc': random.uniform(0.01, 0.1),
            'oldLtc': random.uniform(0.01, 0.1),
            'eth': random.uniform(0.01, 0.1),
            'oldEth': random.uniform(0.01, 0.1),
            'oldUsd': random.uniform(450.0, 900.0),
            'oldEuro': random.uniform(400.0, 850.0),
            'deliveryPrice': random.uniform(15.0, 30.0),
            'internationalDelivery': random.choice([True, False]),
            'expressDelivery': random.choice([True, False])
    }
    ] for _ in range(48)
]

with db.atomic():
    for catalog_name, category_names in categories.items():
        # Создаем каталог
        catalog, catalog_created = Catalog.get_or_create(name=catalog_name)
        if catalog_created:
            print(f"Каталог '{catalog_name}' создан.")

        # Создаем категории внутри каталога
        for category_name in category_names:
            category, category_created = Category.get_or_create(name=category_name, catalog=catalog)
            if category_created:
                print(f"Категория '{category_name}' создана в каталоге '{catalog_name}'.")

            # Теперь, когда у нас есть категория, мы можем создать продукты
            for product_data in products_data[0]:
                # Если тип товара 2, то он не добавляется ни в какой каталог или категорию
                if product_data['type_product'] != 2:
                    product_data['category'] = category
                    # Установите поле 'catalog' для продукта, если оно требуется
                    product_data['catalog'] = catalog
                Products.create(**product_data)

# Завершение транзакции
db.commit()