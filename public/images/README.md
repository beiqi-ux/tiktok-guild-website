# BROAD Guild Logo Setup

## Instructions to Add Your Guild Logo

1. **Save the uploaded eagle logo image** as `broad-logo.png` in this directory (`public/images/`)

2. **Image specifications:**
   - Filename: `broad-logo.png`
   - Recommended size: 200x200 pixels or higher
   - Format: PNG (for transparency support)
   - The image will be automatically resized to fit the logo container

3. **Current logo placement:**
   - Position: Top-left corner of the website (main navigation logo)
   - Size: 40x40px on mobile, 48x48px on desktop
   - Effects: Hover scale animation, glassmorphism background
   - Fallback: TikTok play icon with gradient background if image fails to load

4. **File structure:**
```
public/
  images/
    broad-logo.png  ← Save your eagle logo here
    README.md       ← This file
```

5. **After saving the image:**
   - The logo will automatically appear on the website
   - Refresh the page to see the changes
   - The logo is responsive and will scale appropriately

## Features
- ✅ Positioned in top-left corner (main navigation logo)
- ✅ Glassmorphism effect with blur background
- ✅ Hover animation (scale up)
- ✅ Responsive design (different sizes for mobile/desktop)
- ✅ Error handling with fallback TikTok icon
- ✅ Integrated with navigation bar layout
