# One Big Bull — AI Ecommerce Growth Marketing Agency

> Official website for **One Big Bull** — a premier full-stack AI E-commerce growth partner scaling 7 and 8-figure direct-to-consumer (D2C) brands with Paid Media, Conversion Rate Optimization (CRO), Lifecycle Retention, and High-Converting UGC.

🌐 **Live Website**: [https://onebigbull.com](https://onebigbull.com)  
📦 **Repository**: [https://github.com/Sudharsan0727/Onebigbull](https://github.com/Sudharsan0727/Onebigbull)

---

## 📖 About The Website

**One Big Bull** is designed to provide high-growth e-commerce brands with a modern, high-performance agency experience. Key highlights include:

- **Hero & Credibility Strip**: Instant brand authority featuring performance metrics, client logos, and direct call-to-action triggers.
- **Core Pillars (Services)**: Deep dives into Paid Media Scaling, Retention & Lifecycle Marketing, Conversion Rate Optimization (CRO), and UGC Creative Strategy.
- **Client Marquee & Trust**: Dynamic infinite brand logo strip featuring top-tier D2C brands.
- **Growth Studies**: Real case study results showcasing verified revenue milestones, ROAS, and percentage sales growth.
- **Team Section**: Dedicated operator profiles introducing the core leadership and specialist talent.
- **Interactive Booking Modal & Audit Form**: Direct lead capture integrated with Google Sheets, automatically followed by Calendly strategy session scheduling.

---

## 🛠️ Tech Stack Used

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Modern component-based UI library |
| **Build Tool** | [Vite 8](https://vite.dev/) | Next-generation fast frontend bundler & dev server with HMR |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework with `@tailwindcss/vite` |
| **Animations** | [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) | Professional scroll-linked animations and smooth motion |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set |
| **Linting** | [Oxlint](https://oxc.rs/) | Ultra-fast Rust-based JavaScript / React linter |
| **Lead Integration** | [Google Apps Script Webhook](https://developers.google.com/apps-script) | Direct contact form submission to Google Sheets |
| **Booking** | [Calendly](https://calendly.com/) | Automated 30-min growth strategy scheduling |

---

## 🚀 How to Open and Run the Project

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended, tested on Node v22 LTS).

### 1. Clone the Repository
```bash
git clone https://github.com/Sudharsan0727/Onebigbull.git
cd Onebigbull
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root folder (or use the existing template):
```env
VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfycbzCXX8Zlo955iL8G6TVt5DCxOMQY6AEzfvLbPU5kWTcUSmtXFnfe2WQXRQ4Vm9FMW8/exec
```

### 4. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

> **Windows Quick Start**: You can also double-click `run.bat` to automatically launch the dev server.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This compiles optimized HTML, CSS, JavaScript, and assets into the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

> **Windows Build Helper**: Run `build.bat` in the terminal to execute the production build.

---

## 📂 Project Structure

```text
one-big-bull/
├── public/                 # Static assets (favicons, Open Graph social images)
│   ├── favicon.jpg         # Browser favicon
│   └── og-image.jpg        # WhatsApp & social share preview image
├── src/
│   ├── assets/             # Brand logos, team photos, client badges, SVG vectors
│   │   ├── img/            # Brand imagery and icons
│   │   │   ├── client-one/ # Partner brand logos for marquee
│   │   │   └── team/       # Team operator headshots
│   ├── components/         # Modular React UI components
│   │   ├── Navbar.jsx      # Navigation header with sticky blur and mobile drawer
│   │   ├── Hero.jsx        # Hero section with credibility metrics
│   │   ├── BrandResponsibility.jsx # Core agency philosophy statement
│   │   ├── Services.jsx    # 4 core service pillars with modals
│   │   ├── BrandMarquee.jsx# Infinite logo marquee carousel
│   │   ├── GrowthStudies.jsx# Case studies with verified metrics
│   │   ├── Testimonials.jsx# Client endorsement cards
│   │   ├── Team.jsx        # Meet the operators section
│   │   ├── ContactSection.jsx# Final CTA and embedded contact form
│   │   ├── Footer.jsx      # Dark footer with navigation and branding
│   │   └── BookingModal.jsx# Lead capture modal synced to Google Sheets
│   ├── hooks/              # Custom React hooks (e.g. useInView)
│   ├── App.jsx             # Main application layout and modal state
│   ├── index.css           # Tailwind CSS imports and custom design tokens
│   └── main.jsx            # React root mount
├── .env                    # Environment configuration
├── index.html              # HTML shell with Open Graph and SEO meta tags
├── package.json            # Project dependencies and npm scripts
└── vite.config.js          # Vite and Tailwind configuration
```

---

## 📄 License

Private & Proprietary © 2026 **One Big Bull**. All Rights Reserved.
