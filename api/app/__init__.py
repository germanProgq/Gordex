from fastapi import Request, HTTPException, Cookie
import logging
from typing import Optional

def get_token_from_cookie(
    request: Request, 
    token: Optional[str] = Cookie(None)
) -> str:
    # Comprehensive logging for debugging
    logging.info("Token Extraction Attempt")
    logging.info(f"Cookie Token: {token}")
    
    # Print all headers for comprehensive debugging
    print("All Headers:")
    for header, value in request.headers.items():
        print(f"{header}: {value}")
    
    # Multiple token extraction strategies
    extracted_token = None

    # 1. Check Cookie Token
    if token:
        logging.info("Token found in cookies")
        extracted_token = token

    # 2. Check Authorization Header
    authorization = request.headers.get("Authorization")
    if authorization:
        logging.info(f"Authorization Header: {authorization}")
        
        # Handle different Authorization header formats
        if authorization.startswith("Bearer "):
            extracted_token = authorization[7:]
        elif authorization.startswith("Token "):
            extracted_token = authorization[6:]
        else:
            extracted_token = authorization

    # 3. Check Alternative Header Locations
    if not extracted_token:
        # Additional header checks
        alternative_headers = [
            "X-Access-Token", 
            "X-Token", 
            "Authentication"
        ]
        
        for header in alternative_headers:
            alt_token = request.headers.get(header)
            if alt_token:
                extracted_token = alt_token
                logging.info(f"Token found in {header} header")
                break

    # Final token validation
    if not extracted_token:
        logging.warning("No token found in any location")
        raise HTTPException(
            status_code=403, 
            detail="Token is missing or invalid",
            headers={
                "WWW-Authenticate": 'Bearer realm="auth_required"'
            }
        )

    # Optional: Add basic token format validation
    if len(extracted_token) < 10:  # Basic length check
        logging.error(f"Invalid token format: {extracted_token}")
        raise HTTPException(
            status_code=403, 
            detail="Invalid token format"
        )

    logging.info("Token successfully extracted")
    return extracted_token
