# Customization Guide

This guide will help you personalize your portfolio website.

## 🎨 Quick Customization Checklist

### 1. Personal Information (5 minutes)
**File:** `src/constants/data.ts`

Update the `personalInfo` object:
```typescript
export const personalInfo = {
  name: 'YOUR NAME',
  title: 'Your Professional Title',
  subtitle: 'Your Key Skills',
  location: 'Your City, State, Country',
  email: 'your.email@example.com',
  phone: '+XX XXXXXXXXXX',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  leetcode: 'https://leetcode.com/yourusername',
  resumeUrl: '/resume.pdf',
};
```

### 2. About Section (5 minutes)
Update `aboutData` in `src/constants/data.ts`:
- Change the description
- Update highlight numbers (CGPA, projects, etc.)

### 3. Experience (10 minutes)
Modify the `experiences` array:
- Add/remove experiences
- Update dates, titles, companies
- Modify achievements
- Change technology badges

### 4. Projects (15 minutes)
Edit the `projects` array:
- Update project titles and descriptions
- Change tech stacks
- Add your GitHub repository URLs
- Add live demo URLs
- Update achievements

### 5. Skills (10 minutes)
Customize the `skills` object:
- Add/remove skills
- Adjust proficiency levels (0-100)
- Reorganize categories

### 6. Certifications (5 minutes)
Update the `certifications` array:
- Add your certifications
- Include issuer and date
- Add credential URLs

### 7. Achievements (5 minutes)
Modify the `achievements` array:
- Add your accomplishments
- Choose appropriate icons (code, certificate, workshop)

### 8. Education (5 minutes)
Update the `education` object:
- Change institution name
- Update degree and field
- Modify CGPA and duration

## 🎨 Visual Customization

### Colors
**File:** `tailwind.config.js`

Change the Mocha color palette:
```javascript
colors: {
  mocha: {
    50: '#f9f7f4',   // Lightest
    // ... customize each shade
    900: '#5d412d',  // Darkest
  }
}
```

### Fonts
**File:** `tailwind.config.js`

Update font families:
```javascript
fontFamily: {
  sans: ['Your Sans Font', 'system-ui'],
  display: ['Your Display Font', 'serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

Then update `index.html` with Google Fonts link.

### Animations
**File:** `tailwind.config.js`

Adjust animation durations in the `animation` and `keyframes` sections.

## 📧 EmailJS Setup

### Step-by-Step:

1. **Sign up** at https://www.emailjs.com/

2. **Add Email Service**
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. **Create Email Template**
   - Go to Email Templates
   - Click "Create New Template"
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_email}}` - Your email

4. **Get Your Keys**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account > API Keys

5. **Add to .env**
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 📄 Resume Setup

### Option 1: Local PDF
1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. The download button will work automatically

### Option 2: External Link
1. Upload your resume to Google Drive, Dropbox, or your website
2. Update `resumeUrl` in `src/constants/data.ts`:
   ```typescript
   resumeUrl: 'https://yourwebsite.com/resume.pdf',
   ```

### Option 3: LinkedIn Profile
```typescript
resumeUrl: 'https://linkedin.com/in/yourprofile',
```

## 🖼️ Images and Media

### Project Images
1. Create images for your projects (recommended: 800x600px)
2. Save in `public/projects/` folder
3. Update image paths in `src/constants/data.ts`:
   ```typescript
   image: '/projects/your-project.jpg',
   ```

### Favicon
Replace `public/vite.svg` with your own logo/icon.

### Social Media Preview Image
1. Create an image (1200x630px recommended)
2. Save as `public/og-image.jpg`
3. It's already configured in `index.html`

## 🚀 Deployment Customization

### GitHub Pages
**File:** `vite.config.ts`

Update the base path:
```typescript
base: '/your-repository-name/',
```

**File:** `package.json`

Update repository URL:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

### Custom Domain
1. Add a `CNAME` file to `public/` folder
2. Add your domain name in the file
3. Configure DNS settings with your domain provider

## 🎭 Advanced Customization

### Add New Section
1. Create a new component in `src/components/sections/`
2. Import it in `src/App.tsx`
3. Add data to `src/constants/data.ts`
4. Style with Tailwind classes

### Modify Animations
Edit files in `src/hooks/useAnimations.ts` to customize:
- Typewriter speed
- Counter duration
- Scroll trigger thresholds

### Change Layout
Modify components in `src/components/layout/`:
- `Navbar.tsx` - Header navigation
- `Footer.tsx` - Footer content
- `ScrollToTop.tsx` - Scroll button

## 📱 Testing Your Changes

After each change:
1. Save the file
2. Check the browser (auto-refreshes with Vite)
3. Test on different screen sizes
4. Toggle dark mode
5. Verify animations work

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Resume PDF added (or link updated)
- [ ] EmailJS configured (if using contact form)
- [ ] Project links verified
- [ ] Social media links checked
- [ ] Images optimized and added
- [ ] Tested on mobile device
- [ ] Dark mode works correctly
- [ ] All sections reviewed
- [ ] No console errors in browser
- [ ] Build succeeds (`npm run build`)

## 🆘 Common Issues

**Problem:** Contact form not working
**Solution:** Verify EmailJS credentials in `.env` file

**Problem:** Images not showing
**Solution:** Check file paths and ensure files are in `public/` folder

**Problem:** Build fails
**Solution:** Run `npm install` again, check for TypeScript errors

**Problem:** Dark mode not persisting
**Solution:** Check browser's localStorage is enabled

**Problem:** Animations not smooth
**Solution:** Reduce the number of animated elements or adjust durations

## 💡 Tips for Best Results

1. **Professional Photo**: Add a professional headshot if desired
2. **Concise Text**: Keep descriptions brief and impactful
3. **Metrics**: Use numbers to quantify achievements
4. **Keywords**: Include relevant technologies and skills
5. **Links**: Ensure all external links work
6. **Mobile First**: Always test on mobile devices
7. **Loading Speed**: Optimize images before adding
8. **Consistent Tone**: Maintain professional voice throughout
9. **Update Regularly**: Keep projects and skills current
10. **Proofread**: Check for typos and grammatical errors

---

Need more help? Check the main README.md or PROJECT_SUMMARY.md files!
