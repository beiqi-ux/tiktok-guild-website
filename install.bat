@echo off
chcp 65001 >nul

echo 🚀 开始安装TikTok公会网站...

:: 检查Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到Node.js，请先安装Node.js 18+版本
    pause
    exit /b 1
)

:: 检查包管理器
bun --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 使用Bun作为包管理器
    set PACKAGE_MANAGER=bun
    goto :install
)

npm --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 使用npm作为包管理器
    set PACKAGE_MANAGER=npm
    goto :install
)

echo ❌ 未找到包管理器，请安装npm或bun
pause
exit /b 1

:install
:: 安装依赖
echo 📦 安装项目依赖...
if "%PACKAGE_MANAGER%"=="bun" (
    bun install
) else (
    npm install
)

if %errorlevel% equ 0 (
    echo ✅ 依赖安装成功！
    echo.
    echo 🎉 安装完成！现在你可以运行以下命令：
    echo.
    if "%PACKAGE_MANAGER%"=="bun" (
        echo    启动开发服务器:  bun run dev
        echo    构建项目:        bun run build
        echo    代码格式化:      bun run format
    ) else (
        echo    启动开发服务器:  npm run dev
        echo    构建项目:        npm run build
        echo    代码格式化:      npm run format
    )
    echo.
    echo 🌐 开发服务器将在 http://localhost:3000 启动
) else (
    echo ❌ 安装失败，请检查错误信息
    pause
    exit /b 1
)

pause
