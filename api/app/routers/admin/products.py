from fastapi import APIRouter, UploadFile, File, HTTPException
from app.database.db import ProductActions
from app.database.db import FileActions
from app.database.db import FilesData
from app.models.default import ProductData
import json
from typing import List
import uuid
import os


router = APIRouter()


@router.post('/api/v1/admin/product/new', tags=["Product"])
async def create_new_product_request(
    json_file: UploadFile = File(...), 
    image_files: List[UploadFile] = File(...)
):
    # Read and parse the JSON contents
    try:
        json_contents = await json_file.read()
        product_data = json.loads(json_contents)
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON format")

    # Ensure the images directory exists
    directory = 'app/test/images'
    os.makedirs(directory, exist_ok=True)

    # List to store image paths
    image_paths = []

    # Process each uploaded image file
    for image_file in image_files:
        try:
            # Read the contents of the uploaded image file
            image_contents = await image_file.read()

            # Generate a unique filename
            unique_filename = f"{uuid.uuid4().hex}_{image_file.filename}"
            image_path = os.path.join(directory, unique_filename)

            # Save the image to a file
            with open(image_path, "wb") as image:
                image.write(image_contents)

            # Append the image path to the list
            image_paths.append(image_path)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error processing image {image_file.filename}: {str(e)}")

    # Store the image paths in product_data
    product_data['product_img'] = image_paths  # This will be a list of paths

    # Unpack the JSON data and pass it to the create_new method
    try:
        product = ProductActions.create_new(
            product_data['usd'],
            product_data['usdt'],
            product_data['btc'],
            product_data['euro'],
            product_data['title'],
            product_data['location'],
            product_data['type'],
            product_data['discount'],
            product_data['catalog'],
            product_data['category'],
            product_data['brand'],
            product_data['brandImg'],
            product_data['colors'],
            product_data['config'],
            product_data['doge'],
            product_data['oldDoge'],
            product_data['xmr'],
            product_data['oldXmr'],
            product_data['ltc'],
            product_data['oldLtc'],
            product_data['eth'],
            product_data['oldEth'],
            product_data['oldUsd'],
            product_data['oldEuro'],
            product_data['deliveryPrice'],
            product_data['internationalDelivery'],
            product_data['expressDelivery'],
        )

        # Store the image paths in the database
        for image_path in image_paths:
            FilesData.create(data=image_path, product=product)  # Store the path instead of bytes
    except KeyError as e:
        raise HTTPException(status_code=400, detail=f"Missing required field: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating product: {str(e)}")
    


@router.post('/api/v1/admin/product/info/add', tags=["Product"])
async def add_product_info_request(product_data: ProductData):
    ProductActions.add_info(
        product_data.brand,
        product_data.brandImg,
        product_data.colors,
        product_data.config,
        product_data.doge,
        product_data.oldDoge,
        product_data.xmr,
        product_data.oldXmr,
        product_data.ltc,
        product_data.oldLtc,
        product_data.eth,
        product_data.oldEth,
        product_data.oldUsd,
        product_data.oldEuro,
        product_data.deliveryPrice,
        product_data.internationalDelivery,
        product_data.expressDelivery
    )


# @router.post("/api/v1/admin/files/upload", tags=["File"])
# async def upload_file_request(product_id: int, file: UploadFile = File(...)):
    try:
        contents = await file.read()
        file_id = FileActions(product_id=product_id).upload_file(contents)

        if not file_id:
            raise HTTPException(status_code=500, detail="Failed to save file to database")

        return {"filename": file.filename, "content_type": file.content_type}
    except Exception as e:
        raise HTTPException(status_code=500, detail="File upload failed")