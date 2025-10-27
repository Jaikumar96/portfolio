# 🚀 GitHub Pages Deployment Guide
## Deploy jaikumarr.me Portfolio

---

## ✅ **Prerequisites Checklist**
- [x] Domain registered: `jaikumarr.me` ✓
- [x] GitHub account with Student Pack ✓
- [x] Project ready in local machine ✓
- [ ] GitHub repository created
- [ ] Domain DNS configured
- [ ] Site deployed

---

## 📋 **Step-by-Step Deployment**

### **STEP 1: Create GitHub Repository (5 minutes)**

1. **Go to GitHub**
   - Visit: https://github.com/new
   - Sign in with your account

2. **Create New Repository**
   - Repository name: `portfolio` (or any name you like)
   - Description: `My Professional Portfolio Website`
   - Set to: **Public** (required for free GitHub Pages)
   - ❌ Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Copy the Repository URL**
   - You'll see: `https://github.com/YOUR_USERNAME/portfolio.git`
   - Keep this ready for next step

---

### **STEP 2: Initialize Git & Push Code (5 minutes)**

Open your terminal in the project folder and run these commands:

```bash
# 1. Initialize Git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit your code
git commit -m "Initial commit - Portfolio website"

# 4. Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

**Wait 1-2 minutes for files to upload to GitHub**

---

### **STEP 3: Deploy to GitHub Pages (2 minutes)**

In your terminal, run:

```bash
npm run deploy
```

This will:
- Build your production code
- Create a `gh-pages` branch
- Deploy to GitHub Pages
- Takes about 1-2 minutes

**Wait for "Published" message!**

---

### **STEP 4: Enable GitHub Pages (2 minutes)**

1. **Go to Repository Settings**
   - Visit: `https://github.com/YOUR_USERNAME/portfolio`
   - Click "Settings" tab (top right)

2. **Navigate to Pages**
   - Scroll down left sidebar
   - Click "Pages"

3. **Configure Source**
   - Source: Select `gh-pages` branch
   - Folder: `/ (root)`
   - Click "Save"

4. **Add Custom Domain**
   - Under "Custom domain", enter: `jaikumarr.me`
   - Click "Save"
   - ✅ Check "Enforce HTTPS" (wait 5 minutes first)

---

### **STEP 5: Configure DNS in Namecheap (5 minutes)**

1. **Go to Namecheap Dashboard**
   - Visit: https://namecheap.com
   - Go to "Domain List"
   - Click "Manage" next to `jaikumarr.me`

2. **Go to Advanced DNS Tab**
   - Click "Advanced DNS" tab

3. **Delete Existing Records**
   - Delete any existing A, CNAME records for @ and www

4. **Add GitHub Pages DNS Records**

   Click "Add New Record" and add these **EXACTLY**:

   | Type  | Host | Value                | TTL       |
   |-------|------|----------------------|-----------|
   | A     | @    | 185.199.108.153      | Automatic |
   | A     | @    | 185.199.109.153      | Automatic |
   | A     | @    | 185.199.110.153      | Automatic |
   | A     | @    | 185.199.111.153      | Automatic |
   | CNAME | www  | YOUR_USERNAME.github.io | Automatic |

   **Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

5. **Save All Records**
   - Click green checkmark ✓ for each record
   - Click "Save all changes"

---

### **STEP 6: Wait for DNS Propagation (10-30 minutes)**

DNS changes take time to propagate worldwide:
- **Minimum:** 10 minutes
- **Average:** 30 minutes
- **Maximum:** 24-48 hours (rare)

**Check DNS Propagation:**
- Visit: https://dnschecker.org/
- Enter: `jaikumarr.me`
- Check if A records show GitHub IPs

---

### **STEP 7: Enable HTTPS (After DNS Propagates)**

1. **Back to GitHub Pages Settings**
   - Go to: `https://github.com/YOUR_USERNAME/portfolio/settings/pages`

2. **Enable HTTPS**
   - ✅ Check "Enforce HTTPS"
   - If disabled, wait 5-10 more minutes

3. **Verify**
   - Visit: `https://jaikumarr.me`
   - You should see 🔒 padlock in browser!

---

## 🎉 **SUCCESS! Your Site is Live!**

Your portfolio is now accessible at:
- ✅ `https://jaikumarr.me`
- ✅ `https://www.jaikumarr.me`
- ✅ Secured with HTTPS 🔒

---

## 🔄 **How to Update Your Site**

Whenever you make changes:

```bash
# 1. Make your changes in code
# 2. Save all files
# 3. Run these commands:

git add .
git commit -m "Updated portfolio content"
git push origin main
npm run deploy
```

**Your site updates in 1-2 minutes!**

---

## 🐛 **Troubleshooting**

### **Problem: Site shows 404 Error**
**Solution:**
- Check if `gh-pages` branch exists on GitHub
- Verify GitHub Pages is enabled in Settings → Pages
- Make sure Source is set to `gh-pages` branch

### **Problem: Domain doesn't work**
**Solution:**
- Wait longer (DNS can take up to 48 hours)
- Check DNS records are correct in Namecheap
- Verify CNAME file exists in public folder
- Check: https://dnschecker.org/

### **Problem: "HTTPS not available yet"**
**Solution:**
- Wait 10-30 minutes after DNS propagates
- Uncheck and re-check "Enforce HTTPS" in GitHub settings
- Clear browser cache (Ctrl + Shift + R)

### **Problem: Changes not showing**
**Solution:**
- Run `npm run deploy` after pushing to main
- Clear browser cache
- Wait 2-3 minutes for GitHub to rebuild

### **Problem: CSS/Images not loading**
**Solution:**
- Check `vite.config.ts` has `base: '/'`
- Rebuild: `npm run build`
- Redeploy: `npm run deploy`

---

## 📞 **Need Help?**

If you encounter issues:
1. Check GitHub Actions tab for build errors
2. Verify all DNS records in Namecheap
3. Check browser console for errors (F12)
4. Wait for DNS propagation

---

## 🎓 **Post-Deployment Checklist**

- [ ] Site loads at `jaikumarr.me`
- [ ] HTTPS enabled (padlock visible)
- [ ] All pages/sections working
- [ ] Contact form works
- [ ] Dark mode toggle works
- [ ] Mobile responsive
- [ ] Fast loading speed
- [ ] No console errors

---

## 🌟 **Share Your Portfolio!**

Add your portfolio to:
- ✅ LinkedIn profile
- ✅ GitHub profile README
- ✅ Resume/CV
- ✅ Email signature
- ✅ Job applications
- ✅ Business cards

---

## 💰 **Cost: $0 (FREE Forever!)**

With GitHub Student Pack:
- ✅ GitHub Pages: FREE
- ✅ Domain (1 year): FREE
- ✅ HTTPS Certificate: FREE
- ✅ Unlimited bandwidth: FREE
- ✅ Custom domain: FREE

**Renewal:** Domain renews automatically next year (check if still free with Student Pack)

---

**Good luck with your deployment! 🚀**
**Visit your live site: https://jaikumarr.me**
