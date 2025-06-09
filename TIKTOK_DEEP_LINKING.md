# TikTok Deep Linking 配置指南

## 🔗 智能跳转功能

网站现在支持智能跳转到TikTok app！当用户点击"Apply Now"或"Join Our Guild Now"按钮时：

- **移动端**: 自动尝试打开TikTok app，失败则打开网页版
- **桌面端**: 在新标签页打开TikTok网页版

## 📱 支持的平台

### 移动设备 (iOS & Android)
- **功能**: 直接在移动浏览器中打开TikTok网页版
- **原因**: 确保创作者招募页面正确显示和功能完整
- **用户体验**: 可以完整访问所有招募功能和表单

### 桌面设备
- **功能**: 在新标签页打开TikTok网页版
- **用户体验**: 完整的网页浏览体验

## ⚙️ 配置你的TikTok链接

### 1. 找到配置位置
在文件 `src/app/page.tsx` 中找到这一行：

```typescript
const BROAD_GUILD_TIKTOK_URL = 'https://www.tiktok.com/@broadguild';
```

### 2. 替换为你的实际链接
替换为你的真实TikTok链接：

```typescript
// 用户主页示例
const BROAD_GUILD_TIKTOK_URL = 'https://www.tiktok.com/@你的实际用户名';

// 创作者招募页面示例
const BROAD_GUILD_TIKTOK_URL = 'https://www.tiktok.com/tcn/scout_creators?use_spark=1&agency_scout_source=qr_code_leads&ShareLinkID=7511510409707555601';
```

### 3. 支持的URL格式
以下格式都被支持：

**标准用户主页**:
```
https://www.tiktok.com/@username
https://www.tiktok.com/username
https://vm.tiktok.com/短链接
```

**特殊功能页面**:
```
https://www.tiktok.com/tcn/scout_creators (创作者招募)
https://www.tiktok.com/creator/* (创作者中心)
https://www.tiktok.com/business/* (商业页面)
```

## 🔧 自定义配置

### 修改默认用户名
如果无法从URL提取用户名，系统会使用默认值 `broadguild`。

要修改默认值，在 `src/lib/utils.ts` 中找到：

```typescript
// 如果无法提取用户名，返回默认值
return 'broadguild';
```

改为你的用户名：

```typescript
return '你的默认用户名';
```

### 添加更多按钮
如果你想为其他按钮也添加TikTok跳转功能：

```typescript
<button onClick={handleTikTokRedirect}>
  你的按钮文字
</button>
```

## 📊 用户体验流程

### 移动端用户体验
1. 用户点击按钮
2. 系统检测为移动设备
3. 直接在新标签页打开TikTok网页版
4. 用户进入完整的创作者招募页面
5. 可以填写申请表单和查看所有信息

### 桌面端用户体验
1. 用户点击按钮
2. 在新标签页打开TikTok网页版
3. 用户可以完整浏览招募页面
4. 桌面端拥有更好的表单填写体验

## 🎯 最佳实践

### 1. 测试不同设备
- 在iPhone/iPad上测试iOS deep linking
- 在Android设备上测试Intent URLs
- 在桌面浏览器中测试网页版跳转

### 2. 提供清晰的用户指示
考虑在按钮附近添加提示文字：
- "点击直接打开TikTok app"
- "移动端将自动跳转到app"

### 3. 监控跳转效果
你可以添加分析代码来监控跳转成功率：

```typescript
const handleTikTokRedirect = () => {
  // 添加分析代码
  console.log('TikTok redirect triggered');
  smartRedirect(BROAD_GUILD_TIKTOK_URL);
};
```

## 🔍 故障排除

### 问题：iOS设备无法打开app
**解决方案**: 确保TikTok app已安装，检查URL格式

### 问题：Android设备跳转失败
**解决方案**: 检查Intent URL格式，确保包名正确

### 问题：桌面端无法跳转
**解决方案**: 检查浏览器是否阻止弹窗，确保URL有效

## 📱 测试清单

- [ ] iOS Safari中点击按钮
- [ ] Android Chrome中点击按钮
- [ ] 桌面Chrome中点击按钮
- [ ] 桌面Firefox中点击按钮
- [ ] 移动端app未安装情况下的备用方案
- [ ] 网络连接差的情况下的用户体验

---

**配置完成后，你的用户就能一键从网站跳转到你的TikTok主页了！**
