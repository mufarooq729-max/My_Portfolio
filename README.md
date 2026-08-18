# Muhammad Umar Farooq — Software Engineer Portfolio

A modern, responsive portfolio website showcasing the work, skills, and experience of Muhammad Umar Farooq, a full-stack software engineer.

## 🌟 Features

- **Dark/Light Theme Toggle**: Seamlessly switch between dark and light modes with persistent theme preference
- **Animated Starfield Background**: Dynamic space-themed background with animated stars and orbit rings
- **Smooth Preloader**: Engaging loading animation that sets the tone for the experience
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Interactive Cursor Glow Effect**: Custom cursor experience with smooth glow animation
- **Scroll Progress Indicator**: Visual progress indicator showing scroll position on the page
- **Certificate Modal**: Fullscreen modal for displaying certificates and credentials
- **Smooth Scrolling**: Enhanced user experience with smooth scroll behavior
- **Modern Typography**: Using Google Fonts (Poppins, Inter, Space Grotesk) for professional appearance

## 📁 Project Structure

```
Task 3/
├── index.html          # Main HTML structure with all sections
├── style.css           # Complete styling with animations and theme support
├── script.js           # Interactive features and animations
├── images/             # Project images, certificates, and assets
└── README.md           # Project documentation (this file)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with CSS variables, animations, and flexbox/grid layouts
- **JavaScript (Vanilla)**: DOM manipulation and interactive features
- **Google Fonts**: Professional typography
- **Font Awesome**: Icon library for UI elements

## 📋 Sections

The portfolio includes the following main sections:

1. **Header/Navigation** - Sticky navigation with smooth link scrolling
2. **Home** - Hero section with animated title and role rotation
3. **About** - Personal introduction and background
4. **Skills** - Technical skills and expertise areas
5. **Projects** - Portfolio projects showcasing work
6. **Certificates** - Professional certifications with modal preview
7. **Contact** - Contact information and social links
8. **Footer** - Additional links and copyright information

## 🎨 Design Features

### Color Scheme
- **Dark Theme**: Navy blues and grays with sky blue accents
- **Light Theme**: Light backgrounds with complementary colors
- **Primary Accent**: Sky blue (#38BDF8)

### Animations
- Starfield background with twinkling stars
- Orbit rings for depth
- Smooth transitions on hover
- Preloader with progress bar
- Scroll-based animations

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **No build process required** - works directly as static HTML/CSS/JS

### Local Development

For local development with live reload:

```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js
npx http-server

# Or using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Visit `http://localhost:8000` in your browser.

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚙️ Customization

### Changing Theme Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --sky: #38BDF8;
  --sky-2: #7DD3FC;
  --sky-deep: #0EA5E9;
  --white: #ffffff;
}
```

### Adding More Roles

In `script.js`, modify the `roles` array:

```javascript
const roles = [
  "Your Role 1",
  "Your Role 2",
  "Your Role 3",
  // Add more roles here
];
```

### Updating Content

Edit the HTML sections in `index.html` with your own:
- Personal information
- Project details
- Skills and expertise
- Certificates
- Social links

## 📦 Dependencies

- **Google Fonts**: Loaded via CDN
- **Font Awesome 6.5.1**: Icon library via CDN
- **No external JavaScript libraries required**: Pure vanilla JavaScript

## 🔧 Key JavaScript Features

- **Preloader**: Manages initial page load experience
- **Starfield Generator**: Creates dynamic star background
- **Theme Switcher**: Handles dark/light mode toggle
- **Scroll Progress**: Tracks and displays scroll position
- **Cursor Glow**: Custom cursor effect tracking
- **Certificate Modal**: Opens and closes fullscreen certificate view
- **Role Rotator**: Cycles through different professional roles
- **Smooth Scroll Anchors**: Navigates to sections smoothly

## 🎯 Performance Optimizations

- Minimal external dependencies
- Efficient CSS animations using GPU acceleration
- Lazy loading ready for images
- Lightweight JavaScript with no framework overhead
- Optimized starfield rendering based on screen size

## 📝 License

This portfolio is personal work. Modify and customize as needed for your own use.

## 👤 Author

**Muhammad Umar Farooq**
- Software Engineer | Full Stack Developer | AI & ML Enthusiast

---

**Last Updated**: August 2026
