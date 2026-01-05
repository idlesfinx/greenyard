@echo off
echo ==========================================
echo    Green Yard Web - Deploy to GitHub
echo ==========================================

echo [1/6] Initializing Git repository...
git init

echo [2/6] Configuring Git Identity (Required)...
echo Please enter your details to identify your commits.
echo.
set /p git_email="Enter your email (e.g., git@example.com): "
set /p git_name="Enter your name (e.g., John Doe): "

git config user.email "%git_email%"
git config user.name "%git_name%"

echo [3/6] Adding all files to staging...
git add .

echo [4/6] Committing changes...
git commit -m "feat: Add Netlify contact form and update AI assistant persona"

echo [5/6] Configuring remote repository...
:: Try to add remote, verify if it exists
git remote add origin https://github.com/idlesfinx/greenyard.git 2>NUL
:: Ensure URL is correct even if it existed
git remote set-url origin https://github.com/idlesfinx/greenyard.git

echo [6/6] Pushing to GitHub (main branch)...
git push -u origin main

echo ==========================================
echo    Deployment sequence finished.
echo ==========================================
pause
