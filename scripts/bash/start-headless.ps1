# Navigate to the Gordex folder and run npm commands
Start-Process -FilePath "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd 'C:\Users\gvino\Desktop\Coding\Projects\Gorder_With_Api\Gordex'; npm install; npm run dev" -WindowStyle Hidden

# Navigate to the api folder and run Python commands
Start-Process -FilePath "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd 'C:\Users\gvino\Desktop\Coding\Projects\Gorder_With_Api\api'; IF (-Not (Test-Path 'venv')) { python -m venv venv }; .\venv\Scripts\Activate.ps1; pip install -r requirements.txt; uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload" -WindowStyle Hidden