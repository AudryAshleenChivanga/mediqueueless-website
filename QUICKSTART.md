# Quick Start Guide - 5 Minutes to Live Website

## 🚀 The Fastest Path to Deployment

### Step 1: Local Test (2 minutes)

```bash
cd C:\Users\Audry\ Ashleen\mediqueueless-website
npm run dev
```

Open http://localhost:5173 - you should see the website!

Press `Ctrl + C` to stop.

### Step 2: Build (1 minute)

```bash
npm run build
```

You should see:
```
✓ built in 909ms
dist/index.html    1.18 kB
dist/assets/...    18 kB CSS + 166 kB JS
```

### Step 3: Push to GitHub (1 minute)

1. Create new repo on GitHub.com (name: `mediqueueless-website`)
2. Run:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <YOUR_GITHUB_URL>
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages (1 minute)

1. Go to GitHub repo Settings
2. Click "Pages" (left sidebar)
3. Select "GitHub Actions" as source
4. Wait 2-5 minutes...

### Step 5: Your Live Website! ✅

Visit: `https://YOUR-USERNAME.github.io/mediqueueless-website`

---

## 📝 Customization (30 minutes)

### Change Hero Text
File: `src/components/Hero.jsx`
- Line 13: Headline
- Line 18: Subtitle

### Change Colors
File: `src/App.css` - Top lines:
```css
--primary: #FF6B35;      /* Change this */
--secondary: #1a1a1a;    /* And this */
```

### Add Your Logo
1. Put image in `src/assets/` folder
2. Edit `src/components/Navigation.jsx` line 21
3. Replace SVG with: `<img src="./logo.png" alt="Logo" />`

### Update All Content
Edit these files in `src/components/`:
- `Hero.jsx` - Headline & subtitle
- `Solution.jsx` - Service offerings
- `Achievements.jsx` - Awards
- `Contact.jsx` - Form fields

### Rebuild & Deploy
```bash
npm run build
git add .
git commit -m "Updated content"
git push origin main
```

GitHub automatically rebuilds! Check in 2-5 minutes.

---

## 📚 Documentation

| File | For What |
|------|----------|
| `README.md` | Complete project info |
| `DEPLOYMENT.md` | Detailed deploy guide |
| `WINDOWS_SETUP.md` | Windows setup help |
| `PROJECT_SUMMARY.md` | Project overview |
| `LAUNCH_CHECKLIST.md` | Pre-launch checklist |

---

## 🆘 Quick Troubleshooting

### Port 5173 in Use
```bash
npm run dev -- --port 3000
```

### Site Shows 404
- Wait 5 minutes for GitHub
- Check Settings > Pages
- Clear browser cache (Ctrl+Shift+R)

### Images Not Showing
- Use relative paths: `./images/file.jpg`
- Not: `/images/file.jpg`

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🎯 Essential Commands

```bash
npm run dev        # 👀 Preview locally
npm run build      # 📦 Create production files
npm run deploy     # 🚀 Build and push to GitHub Pages
```

---

## ✅ Success = When You See This

```
✓ built in 909ms
dist/index.html                   1.18 kB
dist/assets/index-xyz.css        18.21 kB
dist/assets/index-abc.js        166.00 kB
```

Then on GitHub Pages settings:
```
Your site is live at: 
https://YOUR-USERNAME.github.io/mediqueueless-website ✅
```

---

## 📞 Need More Help?

- Detailed guide: `DEPLOYMENT.md`
- Setup issues: `WINDOWS_SETUP.md`
- Before launch: `LAUNCH_CHECKLIST.md`
- Full info: `README.md`

---

## 🎉 Done!

Your Mediqueueless website is live. Share it with the world!

**URL**: https://YOUR-USERNAME.github.io/mediqueueless-website

---

*Built with Vite + React | Deployed on GitHub Pages*  
*Created: March 24, 2026*
