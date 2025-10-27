# 🚀 Deployment Guide - Custom Domain

## Prerequisites
✅ GitHub Student Developer Pack activated
✅ Project ready for deployment
✅ Custom domain (from Namecheap or get.tech)

---

## 📋 **Quick Deployment Steps**

### **Method 1: Vercel (Recommended)**

#### **Step 1: Get Your Free Domain**

**Option A: Namecheap (.me domain)**
1. Visit: https://nc.me/
2. Sign in with GitHub Student Pack
3. Choose your domain: `yourname.me`
4. Complete registration (FREE for 1 year)

**Option B: Get.tech (.tech domain)**
1. Visit: https://get.tech/github-student-developer-pack
2. Choose your domain: `yourname.tech`
3. Complete registration (FREE for 1 year)

---

#### **Step 2: Deploy to Vercel**

1. **Sign up for Vercel**
   - Go to: https://vercel.com/signup
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub repositories

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Find and select `POrtfolio` repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: **Vite** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Click "Deploy"

4. **Wait for Deployment** (1-2 minutes)
   - Vercel will build and deploy your site
   - You'll get a temporary URL: `your-portfolio.vercel.app`

---

#### **Step 3: Connect Custom Domain**

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your custom domain (e.g., `jaikumar.me`)
   - Click "Add"

2. **Configure DNS (In Namecheap/Get.tech)**
   
   **For Namecheap:**
   - Go to Dashboard → Domain List → Manage
   - Go to "Advanced DNS" tab
   - Add these records:
   
   | Type  | Host | Value              | TTL  |
   |-------|------|--------------------|------|
   | A     | @    | 76.76.21.21        | Auto |
   | CNAME | www  | cname.vercel-dns.com | Auto |
   
   **For Get.tech:**
   - Go to DNS Management
   - Add same records as above

3. **Verify Domain**
   - Back in Vercel, wait 5-10 minutes
   - Your site will be live at `yourname.me`
   - HTTPS automatically enabled! 🔒

---

### **Method 2: Netlify**

#### **Step 1: Deploy to Netlify**

1. **Sign up for Netlify**
   - Go to: https://www.netlify.com/
   - Click "Sign up with GitHub"

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select `POrtfolio` repository

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Get Temporary URL**
   - You'll get: `random-name.netlify.app`

#### **Step 2: Add Custom Domain**

1. **In Netlify Dashboard**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `jaikumar.me`)

2. **Configure DNS**
   - Netlify will show you the nameservers
   - Go to your domain registrar
   - Update nameservers to Netlify's

3. **Enable HTTPS**
   - Netlify auto-enables HTTPS
   - Wait 5-10 minutes for propagation

---

### **Method 3: GitHub Pages (Free but limited)**

#### **For Custom Domain with GitHub Pages:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Add Custom Domain**
   - Go to GitHub repository → Settings → Pages
   - Under "Custom domain", enter: `yourname.me`
   - Click "Save"

4. **Configure DNS**
   - In your domain registrar:
   
   | Type  | Host | Value                    | TTL  |
   |-------|------|--------------------------|------|
   | A     | @    | 185.199.108.153          | Auto |
   | A     | @    | 185.199.109.153          | Auto |
   | A     | @    | 185.199.110.153          | Auto |
   | A     | @    | 185.199.111.153          | Auto |
   | CNAME | www  | yourusername.github.io   | Auto |

---

## 🎯 **Recommended Setup**

For **best performance and ease**:

### **Vercel + Namecheap .me Domain**

**Why?**
- ✅ Automatic deployments on every GitHub push
- ✅ Instant HTTPS
- ✅ Global CDN (super fast worldwide)
- ✅ Analytics included
- ✅ Zero configuration
- ✅ Professional domain (.me)

**Total Cost:** **$0** (FREE with Student Pack for 1 year)

---

## 📱 **After Deployment Checklist**

- [ ] Test your site at custom domain
- [ ] Verify HTTPS is working (padlock icon)
- [ ] Test all pages and navigation
- [ ] Check mobile responsiveness
- [ ] Verify contact form works
- [ ] Test dark/light mode toggle
- [ ] Share your portfolio URL! 🎉

---

## 🔄 **Auto-Deploy Setup**

Both Vercel and Netlify support automatic deployments:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Your site automatically rebuilds and deploys! ✨

---

## 🆘 **Need Help?**

Common issues:
- **DNS not working**: Wait 24-48 hours for full propagation
- **Site not updating**: Clear browser cache (Ctrl+Shift+R)
- **Build failing**: Check build logs in Vercel/Netlify dashboard

---

## 🎓 **Student Pack Benefits**

Don't forget to claim:
- ✅ Vercel Pro ($20/month) - FREE
- ✅ Netlify Pro ($19/month) - FREE
- ✅ Domain (.me or .tech) - FREE for 1 year
- ✅ Azure Credits ($100) - FREE
- ✅ MongoDB ($200 credit) - If you add backend later

Visit: https://education.github.com/pack

---

**Good luck with your deployment! 🚀**
