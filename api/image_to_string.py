import base64
from peewee import SqliteDatabase
from app.database.db import Products, FilesData

db = SqliteDatabase('app/database/database_file/database.sqlite')


with db.atomic():
    products_type_0 = Products.select().where(Products.type_product == 2)

    for product in products_type_0:
        with open("tests/camo.jpg", "rb") as image_file:
            image_data = image_file.read()
            b64_image = base64.b64encode(image_data).decode('utf-8')

        FilesData.create(data=b64_image, product=product)

db.commit()