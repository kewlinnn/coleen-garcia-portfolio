# Coleen Garcia Portfolio

A modern, responsive portfolio website showcasing my journey as a web developer, built with Vue.js 3 and Vite. This portfolio highlights my technical skills, internship experiences, projects, and provides an easy way to get in touch.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Hero Section**: Dynamic typewriter animation and professional introduction
- **About Section**: Educational background and personal story
- **Technical Skills**: Comprehensive display of frontend, backend, and development tools
- **Experience Timeline**: Visual timeline of internship experiences
- **Project Showcase**: Featured projects with live demos and source code links
- **Contact Form**: Functional contact form with backend API integration and rate limiting
- **Email Integration**: Automated email delivery using MailerSend API
- **Social Integration**: Links to LinkedIn and GitHub profiles
- **Modern UI/UX**: Clean design with smooth animations and transitions

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework (v3.5.17)
- **Vite** - Fast build tool and development server (v7.0.0)
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6+)** - Interactive functionality

### Backend
- **Node.js** - Serverless API functions
- **MailerSend API** - Email delivery service integration

### Development Tools
- **npm** - Package management
- **Git** - Version control
- **VS Code** - Development environment

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kewlinnn/coleen-garcia-portfolio.git
   cd coleen-garcia-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ⚙️ Environment Variables

For the contact form to work properly, you'll need to set up the following environment variables:

```bash
MAILERSEND_API_KEY=your_mailersend_api_key
FROM_EMAIL=your_verified_sender_email
TO_EMAIL=your_recipient_email
```

Create a `.env` file in the root directory or configure these in your deployment platform.

## 🎯 Usage

The portfolio is a single-page application with the following sections:

- **Hero**: Introduction and professional title
- **About**: Personal story and educational background
- **Skills**: Technical expertise organized by category
- **Experience**: Professional internship timeline
- **Projects**: Showcase of development projects with live demos
- **Contact**: Get in touch via contact form or social media

## 📱 Demo

Visit the live portfolio: [Coming Soon]

## 🚀 Deployment

This portfolio includes serverless API functions for the contact form. Deploy to platforms that support serverless functions:

- **Vercel** (Recommended): Automatic deployment with API routes
- **Netlify**: Supports Netlify Functions
- **Other platforms**: Ensure they support serverless/edge functions

The contact form requires the environment variables listed above to be configured in your deployment platform.

## 🎨 Project Structure

```
src/
├── components/           # Reusable Vue components
│   └── icons/           # Custom icon components
├── assets/              # Static assets
│   ├── images/          # Images and graphics
│   └── main.css         # Global styles
├── App.vue              # Main application component
└── main.js              # Application entry point

api/
└── contact.js           # Contact form API endpoint

public/
├── CG-icon.png          # Favicon and site icon
└── images/              # Public image assets
```

## 📧 Contact

**Coleen Garcia**
- LinkedIn: [Coleen Garcia](https://www.linkedin.com/in/coleenagarcia)
- GitHub: [kewlinnn](https://github.com/kewlinnn)
- Location: Pasig, Metro Manila, Philippines

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are always welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/suggestion`)
3. Commit your changes (`git commit -am 'Add some suggestion'`)
4. Push to the branch (`git push origin feature/suggestion`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Vite team for the fast build tool
- Design inspiration from modern portfolio websites
- All the open-source contributors who make development better

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Coleen Garcia*
