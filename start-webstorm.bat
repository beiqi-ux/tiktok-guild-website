@echo off
echo 正在为WebStorm准备BROAD Guild项目...
echo.

echo 1. 清理旧的依赖...
if exist node_modules rmdir /s /q node_modules
if exist .next rmdir /s /q .next
if exist bun.lock del bun.lock
if exist package-lock.json del package-lock.json

echo 2. 安装依赖...
npm install

echo 3. 启动开发服务器...
echo 项目将在 http://localhost:3000 启动
echo.
npm run dev

pause
