# Gorder With API

## Overview

Gorder With API is a web application that allows users to manage their orders, profiles, and wallets seamlessly. The application is built using React for the frontend and FastAPI for the backend, providing a robust and efficient system for handling user requests and data.

## Features

- User authentication and authorization
- Profile management
- Order history and management
- Wallet management with cryptocurrency support
- Responsive design for mobile and desktop views
- API integration for real-time data handling
- Proxy server configuration for API requests

## Tech Stack

- **Frontend**: React, Vite, TypeScript
- **Backend**: FastAPI, Python
- **Database**: SQLite (using Peewee ORM)
- **Styling**: CSS Modules, custom styles
- **Testing**: Pytest for backend testing
- **Deployment**: Uvicorn for serving the FastAPI application

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or above)
- Python (v3.7 or above)
- pip (Python package installer)
- A code editor (e.g., Visual Studio Code)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/germanProgq/Gordex.git
    cd gordex-with-api
    ```

2. **Install frontend dependencies**:

    ```bash
    cd Gordex
    npm install
    ```

3. **Install backend dependencies**:

    ```bash
    cd api
    pip install -r requirements.txt
    ```

### Running the Application

Follow these steps to launch the application:

1. **Start the backend server**:

    Open a terminal and navigate to the `api` directory:

    ```bash
    cd api
    ```

    Start the FastAPI server:

    ```bash
    uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
    ```

2. **Start the frontend development server**:

    Open another terminal and navigate to the `Gordex` directory:

    ```bash
    cd Gordex
    ```

    Start the Vite development server:

    ```bash
    npm run dev
    ```

3. **View the application**:

    Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

### User Authentication:
- **POST** `/api/v1/account/auth`: Authenticate user
- **POST** `/api/v1/account/register`: Register a new account

### Profile Management:
- **GET** `/api/v1/profile/info`: Retrieve user profile information
- **PUT** `/api/v1/profile/update/country`: Update user country information

### Order Management:
- **POST** `/api/v1/user/basket/add`: Add item to basket
- **GET** `/api/v1/user/basket/get`: Retrieve basket items

### Wallet Management:
- **GET** `/api/v1/profile/get/currencies`: Retrieve user's wallet currencies

## Testing

To run tests for the backend, navigate to the `api` directory and run:

```bash
pytest
```