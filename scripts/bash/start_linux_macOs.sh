#!/bin/bash

# Navigate to the Gordex folder and run npm commands
cd "/home/gvino/Desktop/Coding/Projects/Gorder_With_Api/Gordex"
gnome-terminal -- bash -c "npm install; npm run dev; exec bash"

# Navigate to the api folder
cd "/home/gvino/Desktop/Coding/Projects/Gorder_With_Api/api"

# Check if the venv directory exists
if [ ! -d "venv" ]; then
    # Create a virtual environment
    python3 -m venv venv
fi

# Activate the virtual environment and install requirements
gnome-terminal -- bash -c "source venv/bin/activate; pip install -r requirements.txt; uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload; exec bash"

# Minimize the terminal window
xdotool getactivewindow windowminimize