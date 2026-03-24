# Windows Setup Guide for Mediqueueless Website

## Prerequisites

### 1. Install Node.js

1. Visit [nodejs.org](https://nodejs.org/)
2. Click the **LTS** (Long Term Support) button
3. Run the installer
4. Follow the installation wizard (accept defaults)
5. Restart your computer
6. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### 2. Install Git (Optional but Recommended)

1. Visit [git-scm.com](https://git-scm.com/)
2. Download and run the installer
3. Follow the installation wizard
4. Use the default settings

### 3. Choose a Code Editor

**Recommended**: [Visual Studio Code](https://code.visualstudio.com/)
- Free
- Great for web development
- Built-in terminal
- Extensions support

### 4. Install a Terminal (Optional)

Use the built-in **Command Prompt** or **PowerShell**, or:
- **Windows Terminal** (Modern, recommended)
  - Download from [Microsoft Store](https://www.microsoft.com/store/apps/9n0dx20hk701)

---

## Project Setup

### Step 1: Open Terminal/Command Prompt

Press `Win + R`, type `cmd`, and press Enter.

Or open PowerShell:
Press `Win + X`, then select **Windows PowerShell**

### Step 2: Navigate to Project Directory

```bash
cd C:\Users\YourUsername\mediqueueless-website
```

Replace `YourUsername` with your actual Windows username.

### Step 3: Install Dependencies

```bash
npm install
```

This may take 1-2 minutes. Wait for the `added X packages` message.

---

## Development Workflow

### Start Development Server

```bash
npm run dev
```

You'll see:
```
  VITE v4.5.14  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

Open **http://localhost:5173** in your browser.

**Changes are hot-reloaded** - save a file and the browser updates automatically!

To stop the server: Press `Ctrl + C`

### Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder. Files in `dist` are ready to deploy.

### Preview Production Build

```bash
npm run preview
```

Opens the built version locally to test before deployment.

---

## Using Visual Studio Code

### 1. Open Project in VS Code

```bash
code .
```

Or: File > Open Folder > Select the project folder

### 2. Integrated Terminal

Use the built-in terminal: `Ctrl + ` ` (backtick)

Type npm commands directly there.

### 3. Useful Extensions

Install in VS Code (Extensions panel on left):
- **ES7+ React/Redux/React-Native snippets** - Shortcuts for React
- **Prettier** - Auto-format code
- **HTML CSS Support** - CSS autocompletion
- **Thunder Client** - Test API calls (optional)

### 4. Edit Files

- Component files: `src/components/*.jsx`
- Styles: `src/App.css`
- HTML: `index.html`
- Config: `vite.config.js`

---

## Project Structure

```
mediqueueless-website/
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── Hero.jsx
│   │   ├── Solution.jsx
│   │   ├── Navigation.jsx
│   │   └── ... (other sections)
│   ├── App.jsx                   # Main app
│   ├── App.css                   # All styles
│   └── main.jsx                  # Entry point
├── dist/                         # Built files (created by npm run build)
├── package.json                  # Dependencies
├── vite.config.js               # Build config
├── index.html                   # HTML entry
├── README.md                    # Project docs
├── DEPLOYMENT.md                # Deploy guide
└── CONTRIBUTING.md              # Contributing guide
```

---

## Common Tasks

### Edit Hero Section
File: `src/components/Hero.jsx`
- Change headline in `<h1>`
- Modify subtitle in `.hero-subtitle`
- Update buttons

### Change Colors
File: `src/App.css` (top of file)
```css
:root {
  --primary: #FF6B35;      /* Change this color */
  --secondary: #1a1a1a;
  /* ... other colors ... */
}
```

### Add Images
1. Create `src/assets/images/` folder
2. Place image files there
3. Use in components:
```jsx
<img src="./images/photo.jpg" alt="Description" />
```

### Update Contact Form
File: `src/components/Contact.jsx`
- Change form fields as needed
- Connect to backend service for email submissions

---

## Troubleshooting

### Port 5173 Already in Use

```bash
# Kill the process using the port
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

Or use a different port:
```bash
npm run dev -- --port 3000
```

### Node Modules Issues

```bash
# Delete and reinstall
rmdir /s node_modules
del package-lock.json
npm install
```

### Build Fails

```bash
# Clear cache and rebuild
npm cache clean --force
npm install
npm run build
```

### Styles Not Updating

- Hard refresh browser: `Ctrl + Shift + R`
- Clear VS Code cache
- Restart dev server: `Ctrl + C` then `npm run dev`

---

## Deployment Checklist

Before deploying to GitHub Pages:

- [ ] All content updated
- [ ] No console errors: `npm run build` succeeds
- [ ] Images load correctly
- [ ] Links work properly
- [ ] Mobile view is responsive
- [ ] Form works (or has backend integration)
- [ ] Speed tested (< 2 second load time)

---

## Next Steps

1. ✅ Complete setup above
2. 📝 Customize content in component files
3. 🖼️ Add real images
4. 🔗 Update links
5. 🚀 Deploy to GitHub Pages (see DEPLOYMENT.md)

---

## Getting Help

- Check **README.md** for general info
- See **DEPLOYMENT.md** for deploy issues
- Read **CONTRIBUTING.md** for code style
- [Vite Docs](https://vitejs.dev/) for build questions
- [React Docs](https://react.dev/) for React questions

---

## Commands Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies (run once) |
| `npm run dev` | Start dev server (local testing) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

---

**Happy coding!** 🚀

Questions? Check the documentation files or reach out to your team.
