# Yogitha Challa — Professional Developer Portfolio

> **Computer Science Engineering Student | Web Developer | Software Development Intern | UI/UX Enthusiast**  
> *"Building Clean, Responsive & User-Friendly Digital Experiences"*

---

## 🌟 Overview

A modern, production-grade personal portfolio website engineered specifically for **Yogitha Challa**, aligned with senior UI/UX standards, recruiter expectations, and ATS guidelines. Every detail is grounded in her verified academic background and industry internship experience.

- **Email:** [challayogitha8@gmail.com](mailto:challayogitha8@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/yogitha-challa](https://www.linkedin.com/in/yogitha-challa)
- **GitHub:** [https://github.com/challayogitha8-debug](https://github.com/challayogitha8-debug)
- **Location:** Andhra Pradesh, India

---

## 📂 Project Architecture

```
Yogitha-Portfolio/
├── index.html                  # Accessible, semantic HTML5 structure with SEO metadata
├── README.md                   # Documentation and deployment instructions
├── css/
│   ├── variables.css           # Design tokens, color system, and dark theme variables
│   ├── base.css                # CSS reset, typography hierarchy, buttons, and layout
│   ├── components.css          # Modals, cards, navbar, timeline, and form components
│   ├── animations.css          # High-performance keyframes (prefers-reduced-motion safe)
│   └── responsive.css          # Responsive rules (1440px, 1200px, 1024px, 768px, 480px, 360px)
├── js/
│   ├── config.js               # Centralized config for links, resume path, and certificate URLs
│   ├── data.js                 # Single source of truth for projects, skills, education, experience
│   └── main.js                 # Theme switcher, scrollspy, modal dialogs, and form handler
└── assets/
    ├── icons/
    │   └── favicon.svg         # Modern vector brand mark
    ├── images/
    │   ├── cloud-data-networks-logo.png
    │   └── rma-housing-logo.png
    └── resume/
        └── Yogitha_Challa_Resume.pdf  # Downloadable PDF resume
```

---

## 🚀 Key Features

1. **Recruiter-Friendly Design**:
   - Clean spacing, clear typographic hierarchy, WCAG AA/AAA contrast.
   - Distinct highlight cards for CGPA (8.0/10), B.Tech CSE (2024–2028), and Software Development Internship.
2. **True-to-Resume Content**:
   - Zero hallucinated technologies (only HTML, CSS, JavaScript, Python, C, MySQL, Git/GitHub, VS Code).
   - Clear distinction between independent UI projects and internship contributions (RMA Mobile App).
3. **Interactive UI/UX Showcase**:
   - 9 core design principle cards (Responsive UI, Clean Layouts, Mobile Interfaces, Authentication UI, Dark/Light Themes, Components, Typography, Spacing, Navigation).
   - Live interactive component playground demonstrating authentication and responsive landing layouts.
4. **Dark & Light Mode**:
   - Seamless theme switcher with persistent `localStorage` and OS preference detection (`prefers-color-scheme`).
5. **Configurable Certificate Links**:
   - Verified credentials mapped in `js/config.js` (`CERTIFICATE_URL_1`, `CERTIFICATE_URL_2`, `CERTIFICATE_URL_3`) opening verified certificate sources in a new tab.
6. **SEO & Social Sharing Ready**:
   - Complete OpenGraph, Twitter Cards, Schema.org Person JSON-LD, meta description, and keywords.

---

## 💻 Local Preview & Testing

You can open `index.html` directly in any browser, or run a local static server:

```bash
# Python 3
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

---

## 🌐 Deploy to GitHub Pages

1. Initialize git in this directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready portfolio for Yogitha Challa"
   ```
2. Create a repository named `portfolio` or `challayogitha8-debug.github.io` on GitHub.
3. Push your code:
   ```bash
   git remote add origin https://github.com/challayogitha8-debug/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In your GitHub repository, go to **Settings > Pages > Branch: main / root > Save**.

---

## 📝 Updating Resume & Certificates

- To replace the resume, overwrite `assets/resume/Yogitha_Challa_Resume.pdf`.
- To update or add certificate links, edit `js/config.js` under `certificateUrls`.
- To add new skills or projects, edit `js/data.js`.

---

© 2026 Yogitha Challa. All rights reserved.
