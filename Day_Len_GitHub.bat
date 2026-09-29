@echo off
chcp 65001 >nul
title Đẩy Website Nha Khoa Star Lên GitHub

echo =======================================================================
echo          CÔNG CỤ TỰ ĐỘNG ĐẨY WEBSITE NHA KHOA STAR LÊN GITHUB         
echo =======================================================================
echo.
echo Bước 1: Khởi tạo Git...
git init
git add .
git commit -m "Deploy Nha Khoa Tham My Star website"
git branch -M main

echo.
echo =======================================================================
echo Hãy dán đường link GitHub Repository của bạn vào đây
echo (Ví dụ: https://github.com/username/ten-repo.git)
echo =======================================================================
set /p REPO_URL="Nhập link GitHub: "

if "%REPO_URL%"=="" (
    echo Bạn chưa nhập link! Vui lòng chạy lại file.
    pause
    exit /b
)

git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo.
echo Đang đẩy mã nguồn lên GitHub...
git push -u origin main --force

echo.
echo =======================================================================
echo ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!
echo.
echo BƯỚC CUỐI ĐỂ BẬT LINK WEBSITE ONLINE (GitHub Pages):
echo 1. Vào trang GitHub của bạn -> Chọn Settings (Cài đặt)
echo 2. Chọn mục Pages ở cột trái
echo 3. Tại phần 'Branch' chọn 'main' rồi bấm Save.
echo =======================================================================
pause
