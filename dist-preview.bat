@echo off
cd /d "%~dp0"
call build.bat
if errorlevel 1 exit /b %errorlevel%
docker compose --profile preview up preview
