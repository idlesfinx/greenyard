@echo off
echo ==========================================
echo    Green Yard Web - Deploy to GitHub
echo ==========================================

echo [1/7] Initializing Git repository...
git init

echo [2/7] Configuring Git Identity (Required)...
echo Please enter your details to identify your commits.
echo (If you already entered them, you can just press Enter to skip)
echo.
set /p git_email="Enter your email (e.g., git@example.com): "
set /p git_name="Enter your name (e.g., John Doe): "

if not "%git_email%"=="" git config user.email "%git_email%"
if not "%git_name%"=="" git config user.name "%git_name%"

echo [3/7] Adding all files to staging...
git add .

echo [4/7] Committing changes...
:: Allow empty commits just in case nothing changed since last run
git commit -m "feat: Add Netlify contact form and update AI assistant persona" --allow-empty

echo [5/7] Renaming branch to 'main'...
:: Ensure the branch is named 'main' (fixes 'src refspec main does not match any' error)
git branch -M main

echo [6/7] Configuring remote repository...
:: Try to add remote, verify if it exists
git remote add origin https://github.com/idlesfinx/greenyard.git 2>NUL
:: Ensure URL is correct even if it existed
git remote set-url origin https://github.com/idlesfinx/greenyard.git

echo [7/7] Pushing to GitHub (main branch)...
git push -u origin main

echo ==========================================
echo    Deployment sequence finished.
echo ==========================================
pause
