# Jaikumar R - Portfolio Website

A modern, interactive portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS featuring smooth animations, dark mode, and responsive design.

![Portfolio Preview](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Features

- 🎨 **Modern Design**: Mocha Mousse color scheme (Pantone 2025) with high-contrast sections
- 🌓 **Dark Mode**: Smooth theme toggle with persistent preference
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Code splitting, lazy loading, and bundle optimization (<300KB)
- 🎭 **Smooth Animations**: Framer Motion powered scroll animations and micro-interactions
- 🎯 **SEO Ready**: Meta tags, Open Graph tags, and semantic HTML
- ♿ **Accessible**: ARIA labels, keyboard navigation, and screen reader support
- 📧 **Contact Form**: EmailJS integration for direct messaging
- 🚀 **GitHub Pages Ready**: Configured for easy deployment

## 🛠️ Tech Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Libraries
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon components
- **EmailJS** - Email service integration
- **React Intersection Observer** - Scroll animations trigger

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jaikumar96/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (optional)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service and email template
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Add your resume** (optional)
   - Place your PDF resume in `public/resume.pdf`
   - Or update the `resumeUrl` in `src/constants/data.ts`

5. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### GitHub Pages

1. **Update `vite.config.ts`**
   - Change the `base` value to your repository name:
   ```typescript
   base: '/your-repo-name/',
   ```

2. **Update repository in `package.json`**
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Other Platforms
- **Vercel**: Connect your GitHub repo and deploy
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Custom Server**: Build and serve the `dist` folder

## 📝 Customization

### Personal Information
Edit `src/constants/data.ts` to update:
- Personal details (name, email, phone, etc.)
- Work experience
- Projects
- Skills
- Certifications
- Achievements
- Education

### Theme Colors
Modify `tailwind.config.js` to change:
- Color palette
- Fonts
- Animations

### Content Sections
All sections are in `src/components/sections/`:
- `Hero.tsx` - Landing section
- `About.tsx` - About me
- `Experience.tsx` - Work experience timeline
- `Projects.tsx` - Featured projects
- `Skills.tsx` - Technical skills
- `Certifications.tsx` - Certifications
- `Achievements.tsx` - Achievements
- `Education.tsx` - Educational background
- `Contact.tsx` - Contact form

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf          # Your resume (add this file)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollToTop.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Certifications.tsx
│   │       ├── Achievements.tsx
│   │       ├── Education.tsx
│   │       └── Contact.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useAnimations.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── constants/
│   │   └── data.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Design Features

- **Hero Section**: Animated name reveal with typewriter effect and floating code snippets
- **About Section**: Animated stat counters showing key metrics
- **Experience Timeline**: Interactive vertical timeline with scroll animations
- **Projects Section**: Filterable project cards with detailed modals
- **Skills Section**: Animated progress bars with category grouping
- **Certifications**: Card layout with credential links
- **Achievements**: Icon-based achievement cards
- **Education**: Detailed academic information with visual elements
- **Contact Form**: Working contact form with validation and EmailJS integration

## 📄 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run deploy    # Deploy to GitHub Pages
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jaikumar R**
- GitHub: [@Jaikumar96](https://github.com/Jaikumar96)
- LinkedIn: [jakum](https://linkedin.com/in/jakum)
- Email: jaikumarfocus@gmail.com

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends of 2025
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

⭐ Star this repo if you find it helpful!
