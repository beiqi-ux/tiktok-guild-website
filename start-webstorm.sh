#!/bin/bash

echo "正在为WebStorm准备BROAD Guild项目..."
echo ""

echo "1. 清理旧的依赖..."
rm -rf node_modules
rm -rf .next
rm -f bun.lock
rm -f package-lock.json

echo "2. 安装依赖..."
npm install

if [ $? -eq 0 ]; then
    echo "3. 启动开发服务器..."
    echo "项目将在 http://localhost:3000 启动"
    echo ""
    npm run dev
else
    echo "安装失败，请检查错误信息"
    exit 1
fi
