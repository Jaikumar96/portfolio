# 🚀 Quick Deploy Commands

## First Time Setup

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit"

# 4. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 5. Push to GitHub
git branch -M main
git push -u origin main

# 6. Deploy to GitHub Pages
npm run deploy
```

---

## Update & Redeploy

```bash
# After making changes:
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

---

## DNS Records for Namecheap

Add these in Advanced DNS:

```
Type: A     | Host: @   | Value: 185.199.108.153
Type: A     | Host: @   | Value: 185.199.109.153
Type: A     | Host: @   | Value: 185.199.110.153
Type: A     | Host: @   | Value: 185.199.111.153
Type: CNAME | Host: www | Value: YOUR_USERNAME.github.io
```

---

## Your URLs

- Live Site: https://jaikumarr.me
- GitHub Repo: https://github.com/YOUR_USERNAME/portfolio
- GitHub Pages: Settings → Pages

---

See GITHUB-PAGES-GUIDE.md for detailed instructions!
