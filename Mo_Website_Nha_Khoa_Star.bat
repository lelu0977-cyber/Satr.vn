@echo off
chcp 65001 >nul
title Nha Khoa Thẩm Mỹ Star - Local Server

echo ========================================================
echo       ĐANG KHỞI ĐỘNG WEBSITE NHA KHOA THẨM MỸ STAR       
echo ========================================================
echo.
echo Địa chỉ: 57 P. Lê Văn Hưu, Hai Bà Trưng, Hà Nội
echo Hotline: +84 24 6666 6586
echo.
echo Đang mở trình duyệt tại: http://localhost:3000 ...
start http://localhost:3000

echo Đang chạy máy chủ web... (Đừng đóng cửa sổ này khi đang xem web)
node server.js
pause
