#!/bin/bash

echo "🚀 开始安装TikTok公会网站..."

# 检查Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 未找到Node.js，请先安装Node.js 18+版本"
    exit 1
fi

# 检查包管理器
if command -v bun &> /dev/null; then
    echo "✅ 使用Bun作为包管理器"
    PACKAGE_MANAGER="bun"
elif command -v npm &> /dev/null; then
    echo "✅ 使用npm作为包管理器"
    PACKAGE_MANAGER="npm"
else
    echo "❌ 未找到包管理器，请安装npm或bun"
    exit 1
fi

# 安装依赖
echo "📦 安装项目依赖..."
if [ "$PACKAGE_MANAGER" = "bun" ]; then
    bun install
else
    npm install
fi

# 检查安装是否成功
if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功！"
    echo ""
    echo "🎉 安装完成！现在你可以运行以下命令："
    echo ""
    if [ "$PACKAGE_MANAGER" = "bun" ]; then
        echo "   启动开发服务器:  bun run dev"
        echo "   构建项目:        bun run build"
        echo "   代码格式化:      bun run format"
    else
        echo "   启动开发服务器:  npm run dev"
        echo "   构建项目:        npm run build"
        echo "   代码格式化:      npm run format"
    fi
    echo ""
    echo "🌐 开发服务器将在 http://localhost:3000 启动"
else
    echo "❌ 安装失败，请检查错误信息"
    exit 1
fi
