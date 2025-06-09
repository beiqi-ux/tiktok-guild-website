# 🎉 TikTok公会网站 - 完整代码导出包

## 📦 导出内容

这个代码包包含了完整的TikTok公会网站，可以直接部署或进一步开发。

### 🎯 项目特色
- ✅ **现代化TikTok风格设计**
- ✅ **完全响应式布局**（PC/平板/手机）
- ✅ **申请表单系统**（包含邀请码功能）
- ✅ **创作者展示模块**
- ✅ **服务介绍页面**
- ✅ **动态效果和动画**
- ✅ **静态导出就绪**

## 🚀 快速开始

### 方法1：使用自动安装脚本

#### Linux/macOS:
```bash
chmod +x install.sh
./install.sh
```

#### Windows:
```cmd
install.bat
```

### 方法2：手动安装

```bash
# 安装依赖
npm install
# 或使用bun (推荐)
bun install

# 启动开发服务器
npm run dev
# 或
bun run dev

# 访问 http://localhost:3000
```

## 📁 项目结构

```
tiktok-guild-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # TikTok主题样式
│   │   ├── layout.tsx       # 应用布局
│   │   ├── page.tsx         # 主页面(核心功能)
│   │   └── ClientBody.tsx   # 客户端组件
│   └── lib/
│       └── utils.ts         # 工具函数
├── out/                     # 静态导出文件(可直接部署)
├── package.json             # 项目配置
├── tailwind.config.ts       # Tailwind配置
├── next.config.js          # Next.js配置
├── install.sh              # Linux/macOS安装脚本
├── install.bat             # Windows安装脚本
└── README.md               # 详细说明
```

## 🌐 部署选项

### 选项1：直接使用静态文件
```bash
# out/ 文件夹包含完整的静态网站
# 可以直接上传到任何静态托管服务
cp -r out/* /your/web/server/path/
```

### 选项2：Netlify部署
```bash
# 方法A: 拖拽 out/ 文件夹到 netlify.com
# 方法B: 连接Git仓库自动部署
```

### 选项3：Vercel部署
```bash
npm i -g vercel
vercel --prod
```

### 选项4：GitHub Pages
```bash
# 将 out/ 文件夹内容推送到 gh-pages 分支
```

## 🎨 自定义指南

### 修改公会信息
编辑 `src/app/page.tsx` 文件中的以下内容：

```tsx
// 公会名称
<span className="text-xl font-bold text-gradient">TikTok Guild</span>

// 联系方式
微信：tiktokguild2024
邮箱：contact@tiktokguild.com
电话：400-888-0000

// 创作者案例
{/* 在 creators section 中修改创作者信息 */}
```

### 修改颜色主题
编辑 `src/app/globals.css` 文件：

```css
:root {
  --tiktok-red: #fe2c55;     /* 主色调 */
  --tiktok-blue: #25f4ee;    /* 辅助色 */
  --tiktok-black: #000000;   /* 背景色 */
  /* 修改这些颜色值来改变主题 */
}
```

### 添加新功能
主要组件都在 `src/app/page.tsx` 中，你可以：
- 添加新的页面部分
- 修改表单字段
- 更新服务内容
- 添加新的动画效果

## 🛠 开发命令

```bash
npm run dev          # 开发模式
npm run build        # 构建项目
npm run start        # 生产模式启动
npm run lint         # 代码检查
npm run format       # 代码格式化
```

## 📱 功能清单

### ✅ 已实现功能
- [x] 响应式导航栏
- [x] Hero首屏展示
- [x] 服务介绍模块
- [x] 创作者展示
- [x] 申请表单系统
- [x] 邀请码功能
- [x] 关于我们页面
- [x] 数据统计展示
- [x] 动画效果
- [x] 移动端优化

### 🔮 可扩展功能
- [ ] 后端API集成
- [ ] 数据库连接
- [ ] 用户认证系统
- [ ] 管理后台
- [ ] 多语言支持
- [ ] SEO优化

## 🎯 技术栈

- **前端框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **构建工具**: Next.js Build
- **包管理**: Bun/npm

## 📞 技术支持

如果在使用过程中遇到问题：

1. **查看 README.md** - 详细的使用说明
2. **检查依赖版本** - 确保Node.js 18+
3. **清理缓存** - 删除 `.next` 和 `node_modules`，重新安装
4. **查看控制台** - 检查浏览器控制台错误信息

## 📄 许可证

MIT License - 可自由使用和修改

---

**🎉 享受你的TikTok公会网站！**
