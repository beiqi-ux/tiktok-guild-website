# WebStorm运行问题诊断与解决方案

## 🚨 常见问题与解决方案

### 问题1: 依赖安装冲突
**症状**: 项目无法启动，提示依赖错误
**原因**: 项目中同时存在多个lock文件 (bun.lock, yarn.lock)

**解决方案A: 使用Yarn (推荐)**
```bash
# 1. 删除node_modules和bun.lock
rm -rf node_modules
rm bun.lock

# 2. 使用yarn安装依赖
yarn install

# 3. 启动开发服务器
yarn dev
```

**解决方案B: 使用npm**
```bash
# 1. 删除所有lock文件和node_modules
rm -rf node_modules
rm bun.lock yarn.lock

# 2. 使用npm安装
npm install

# 3. 启动开发服务器
npm run dev
```

### 问题2: Node.js版本不兼容
**症状**: 启动时报版本错误
**检查版本**:
```bash
node --version
# 需要 >= 18.0.0
```

**解决方案**:
- 升级到Node.js 18或更高版本
- 或使用nvm切换版本: `nvm use 18`

### 问题3: WebStorm TypeScript配置
**症状**: TypeScript错误，无法识别类型

**解决方案**:
1. File → Settings → Languages & Frameworks → TypeScript
2. 选择 "Use TypeScript Service"
3. 设置TypeScript版本为 "project"
4. 重启WebStorm

### 问题4: 端口占用
**症状**: Error: listen EADDRINUSE :::3000

**解决方案**:
```bash
# 检查端口占用
lsof -i :3000

# 杀死占用进程
kill -9 <PID>

# 或使用不同端口
npm run dev -- -p 3001
```

## 🔧 WebStorm配置步骤

### 步骤1: 项目设置
1. 打开WebStorm
2. File → Open → 选择 `tiktok-guild-website` 文件夹
3. 信任项目并等待索引完成

### 步骤2: 包管理器设置
1. File → Settings → Languages & Frameworks → Node.js and NPM
2. 设置Node interpreter为系统Node.js
3. Package manager设置为你想使用的 (npm/yarn)

### 步骤3: 运行配置
**方法A: 使用预设配置**
1. Run → Edit Configurations
2. 点击 "+" → npm
3. Name: "Dev Server"
4. Scripts: "dev"
5. 点击OK并运行

**方法B: 直接运行**
1. 打开package.json
2. 找到 `"scripts"` 部分
3. 点击 `"dev"` 旁边的绿色箭头

### 步骤4: 验证运行
1. 运行成功后会显示: `Local: http://localhost:3000`
2. 在浏览器中打开该地址
3. 应该看到BROAD Guild网站

## 🛠️ 完整重置方案

如果以上都不工作，请执行完整重置:

```bash
# 1. 清理所有依赖
rm -rf node_modules
rm -rf .next
rm bun.lock yarn.lock package-lock.json

# 2. 重新安装 (选择一种方式)
# 使用npm:
npm install
npm run dev

# 或使用yarn:
yarn install
yarn dev

# 或使用pnpm:
pnpm install
pnpm dev
```

## 📱 手动启动方法

如果WebStorm配置有问题，可以手动启动:

```bash
# 方法1: 使用npm
cd tiktok-guild-website
npm install
npm run dev

# 方法2: 使用yarn
cd tiktok-guild-website
yarn install
yarn dev

# 方法3: 使用npx (无需安装)
cd tiktok-guild-website
npx next dev
```

## 🔍 系统要求检查

### 必需软件版本:
- **Node.js**: >= 18.0.0 (检查: `node --version`)
- **npm**: >= 8.0.0 (检查: `npm --version`)
- **WebStorm**: 2022.1+ (推荐最新版)

### 可选但推荐:
- **yarn**: >= 1.22.0 (检查: `yarn --version`)
- **Git**: 最新版本

## 📞 如果仍然无法运行

请提供以下信息:
1. **错误信息**: 完整的错误日志
2. **系统信息**:
   - 操作系统版本
   - Node.js版本 (`node --version`)
   - WebStorm版本
3. **尝试的解决方案**: 你已经试过的方法

## 🎯 快速诊断命令

```bash
# 检查系统环境
echo "Node版本: $(node --version)"
echo "npm版本: $(npm --version)"
echo "当前目录: $(pwd)"
echo "项目文件:"
ls -la

# 检查package.json
cat package.json | grep -A 10 '"scripts"'

# 测试基本命令
npm --version && echo "npm正常" || echo "npm有问题"
node --version && echo "node正常" || echo "node有问题"
```
