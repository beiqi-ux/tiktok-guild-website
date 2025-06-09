# BROAD Guild TikTok Website

Professional BROAD Guild TikTok website with modern design and comprehensive creator support.

## 🚀 Quick Start for WebStorm

### ⚡ One-Click Setup (Recommended)

**Windows:**
```bash
# Double-click this file in Windows Explorer
start-webstorm.bat
```

**Mac/Linux:**
```bash
# Run in terminal
./start-webstorm.sh
```

### 📋 Manual Setup

If the automatic setup doesn't work:

```bash
# 1. Clean installation
rm -rf node_modules .next bun.lock package-lock.json

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

### 🔧 WebStorm Configuration

1. **Open Project**: File → Open → Select `tiktok-guild-website` folder
2. **Trust Project**: Click "Trust and Open"
3. **Wait for Indexing**: Let WebStorm finish indexing
4. **Run**: Use Run → Edit Configurations → Add npm configuration with script "dev"

## 🌟 Features

- ✅ **Professional BROAD Guild Branding**
- ✅ **Eagle Logo Integration** (top-left corner)
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **TikTok Official Style** (colors: #fe2c55, #25f4ee)
- ✅ **English Content** (international audience)
- ✅ **Creator Application Form** (with invitation code support)

## 🦅 Adding Your BROAD Logo

1. Save your eagle logo as `broad-logo.png`
2. Place it in `public/images/broad-logo.png`
3. The logo will automatically appear in the top-left corner

## 📱 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run code linting |

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build**: Turbopack (development)

## 🌐 Access

Once running, visit:
- **Local**: http://localhost:3000
- **Network**: Check terminal for network URL

## 🔧 Troubleshooting

### Common Issues:

**"Cannot find module" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 in use:**
```bash
npm run dev -- -p 3001
```

**TypeScript errors:**
- Enable TypeScript service in WebStorm settings
- Restart WebStorm

### Need Help?

See `WEBSTORM_TROUBLESHOOTING.md` for detailed solutions.

## 📞 Support

If you're still having issues:
1. Check Node.js version: `node --version` (need >= 18.0.0)
2. Check npm version: `npm --version`
3. Try the troubleshooting guide
4. Provide error messages for specific help

## 🎯 Project Structure

```
tiktok-guild-website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main homepage (BROAD Guild)
│   │   ├── layout.tsx        # App layout
│   │   └── globals.css       # TikTok styles
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   └── images/
│       └── broad-logo.png    # Your eagle logo here
├── package.json              # Dependencies
└── README.md                 # This file
```

---

**Built for BROAD Guild** 🦅 | **Powered by Next.js** ⚡
