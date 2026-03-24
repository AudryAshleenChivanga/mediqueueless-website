# Mediqueueless Website - Deployment Guide

## Quick Deployment Steps

### Step 1: Prepare Your Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Mediqueueless website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New Repository**
3. Name it: `mediqueueless-website`
4. Choose **Public** (for GitHub Pages to work)
5. Click **Create Repository**
6. Copy the repository URL

### Step 3: Push to GitHub

```bash
# Add your GitHub repository as origin
git remote add origin <YOUR_REPO_URL>
git branch -M main
git push -u origin main
```

Replace `<YOUR_REPO_URL>` with your actual GitHub repo URL.

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Click** the dropdown and look for "Deploy"
5. GitHub will auto-detect and deploy!

### Step 5: Verify Deployment

After a few minutes:
1. Go to **Settings > Pages**
2. You'll see a green checkmark with: "Your site is live at: https://USERNAME.github.io/mediqueueless-website"
3. Click the link to view your live site!

---

## Detailed Deployment Methods

### ✅ Method 1: GitHub Actions (Recommended - Automatic)

**Setup Time**: 2 minutes

1. **Create `.github/workflows/deploy.yml`** file:

```bash
mkdir -p .github/workflows
```

2. **Copy this content** into `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build site
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          force_orphan: true
```

3. **Push to GitHub**:
```bash
git add .github/
git commit -m "Add GitHub Actions deployment"
git push origin main
```

4. **Watch it deploy**:
   - Go to your repo > **Actions** tab
   - See the deployment run automatically
   - When complete, your site is live!

---

### ✅ Method 2: Manual Deployment via gh-pages Branch

**Setup Time**: 5 minutes

1. **Install gh-pages package**:
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`** - Add this line after `"version"`:
```json
"homepage": "https://YOUR-USERNAME.github.io/mediqueueless-website",
```

3. **Add deployment scripts**:
```bash
npm set-script predeploy "npm run build"
npm set-script deploy "gh-pages -d dist"
```

Or manually edit `package.json` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. **Deploy**:
```bash
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Select `gh-pages` branch
   - Select `/ (root)` folder
   - Save

---

### ✅ Method 3: Deploy from /dist Folder

**Setup Time**: 3 minutes

1. **Build the site**:
```bash
npm run build
```

2. **Commit dist folder**:
```bash
git add dist -f
git commit -m "Add dist folder"
git push origin main
```

3. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Select `main` branch
   - Select `/dist` folder
   - Save

---

## Updating Your Site

After making changes:

### If using GitHub Actions:
```bash
git add .
git commit -m "Update website content"
git push origin main
# GitHub Actions automatically rebuilds and deploys!
```

### If using gh-pages:
```bash
npm run deploy
# This builds and deploys in one command
```

### If deploying from /dist:
```bash
npm run build
git add dist -f
git commit -m "Update site"
git push origin main
```

---

## Custom Domain Setup

If you own a domain (e.g., mediqueueless.com):

### Step 1: Add CNAME File

Create `public/CNAME` with your domain:
```
mediqueueless.com
```

### Step 2: Configure DNS

Point your domain's DNS records to GitHub:
```
A record: 185.199.108.153
A record: 185.199.109.153
A record: 185.199.110.153
A record: 185.199.111.153
```

Or if using CNAME:
```
CNAME: USERNAME.github.io
```

### Step 3: Update vite.config.js

Change base path from `/mediqueueless-website/` to `/`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Root path for custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

### Step 4: GitHub Pages Settings

- Go to Settings > Pages
- Enter your custom domain
- Check "Enforce HTTPS"
- Save

Wait 24 hours for DNS propagation, then your site will be live at your custom domain!

---

## Troubleshooting

### ❌ "Failed to deploy"
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Site shows 404
- Check Settings > Pages shows correct branch/folder
- Verify `vite.config.js` has correct `base` path
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### ❌ Images/CSS not loading
- Ensure relative paths: `./images/file.jpg` not `/images/file.jpg`
- Check `base` in `vite.config.js` matches repository name

### ❌ GitHub Actions fails
- Check the Actions tab for error details
- Verify `node-version` is 16+
- Ensure npm install succeeds

### ❌ Styles broken after deploy
```bash
# Rebuild and redeploy
npm run build
# Then push changes
```

---

## Performance Check

After deployment, test at:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

Expected scores:
- ✅ Lighthouse Performance: 90+
- ✅ Load Time: < 2 seconds
- ✅ Largest Contentful Paint (LCP): < 2.5 seconds

---

## Monitoring

### View Deployment History
- Go to your repo > **Settings > Pages**
- See "Deployment history"
- Click any deployment to see details

### Check Analytics (Optional)
- Add Google Analytics code to `index.html`
- Track visitor behavior and engagement

---

## Next Steps

1. ✅ Deploy website to GitHub Pages
2. 📝 Add real content and images
3. 🔗 Update social media with your live URL
4. 📧 Connect contact form to email service
5. 📊 Add Google Analytics
6. 🎯 Monitor performance metrics

---

**Need Help?**
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://create-react-app.dev/deployment/)
