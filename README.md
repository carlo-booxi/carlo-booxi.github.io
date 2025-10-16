# Booxi UI UX Showcase

A modern portfolio website showcasing interactive UI components designed for Booxi's appointment booking platform.

## Overview

This portfolio demonstrates UI/UX components with a focus on:
- Clean, modern design inspired by UIKitchen.dev
- Interactive functionality and smooth animations
- Responsive design for all screen sizes
- Accessibility-first approach
- Production-ready code

## Structure

```
├── index.html              # Main portfolio landing page
├── about.html              # About and contact information
├── styles.css              # Global styles
├── about-styles.css        # About page specific styles
├── script.js               # Main JavaScript
│
├── widgets/                # Individual widget showcase pages
│   ├── ai-insights.html    # AI Client Insights component
│   ├── menu.html           # Back Office / Head Office Menu
│   ├── theme-editor.html   # Booking Widget Theme Editor
│   ├── theme-editor.css    # Theme editor styles
│   ├── theme-editor.js     # Theme editor functionality
│   └── widget-showcase.css # Shared widget page styles
│
├── ai-insights/            # AI Insights component assets
│   ├── ai-insight.html
│   ├── ai-insight.css
│   ├── ai-insight.js
│   └── icons/
│
└── status-bar/             # Status Bar component assets
    ├── status-bar.html
    ├── status-bar.css
    └── status-bar.js
```

## Components

### 1. AI Client Insights
**Path:** `widgets/ai-insights.html`

An intelligent insight component that displays AI-generated recommendations for client interactions.

**Features:**
- Dynamic content with read more/less functionality
- Interactive feedback system (thumbs up/down)
- Contextual tooltips
- Smooth animations and transitions
- Multiple layout variations

**Use Cases:**
- Retail appointment preparation
- Cross-selling recommendations
- Client preference tracking
- Behavioral insights

### 2. Back Office / Head Office Menu
**Path:** `widgets/menu.html`

A sophisticated status bar navigation system with multiple variants for different office contexts.

**Features:**
- Multiple theme variants (Head Office, Back Office, CS Dashboard)
- Real-time clock updates
- Interactive search functionality
- Dropdown menus (language, account)
- Notification indicators
- Responsive layout

**Variants:**
- **Head Office:** Dark theme for corporate management
- **Back Office:** Light theme for store-level operations
- **CS Dashboard:** Simplified for customer service

### 3. Booking Widget Theme Editor
**Path:** `widgets/theme-editor.html`

A powerful customization interface for real-time widget styling.

**Features:**
- Live preview of changes
- Color picker with hex input
- Typography controls (font family, size)
- Spacing and layout controls
- Border radius customization
- Preset themes (Default, Modern, Classic, Vibrant)
- Export/Import theme configurations
- Dark mode preview toggle

**Use Cases:**
- Brand customization for clients
- White-label booking solutions
- A/B testing visual styles
- Seasonal theme variations

## Getting Started

1. **Open the portfolio:**
   - Open `index.html` in a modern web browser
   - Or serve the directory with a local server

2. **Explore components:**
   - Click on any widget card on the homepage
   - Interact with the live demos
   - Explore different variants and configurations

3. **View component code:**
   - Navigate to the respective folders
   - Each component includes HTML, CSS, and JavaScript files
   - All code is production-ready and well-documented

## Technologies Used

- **HTML5:** Semantic markup
- **CSS3:** Modern styling with CSS variables, Grid, Flexbox
- **Vanilla JavaScript:** No framework dependencies
- **Google Fonts:** Inter and Poppins font families

## Design Principles

1. **Simplicity:** Clean, uncluttered interfaces
2. **Consistency:** Unified design language across components
3. **Accessibility:** Keyboard navigation, ARIA labels, focus states
4. **Responsiveness:** Mobile-first approach
5. **Performance:** Optimized assets and smooth animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Integration

### Using Components

Each component can be easily integrated into your project:

1. Copy the component folder (e.g., `ai-insights/`)
2. Include the CSS and JS files in your HTML
3. Use the HTML structure as a template
4. Customize colors and spacing with CSS variables

### CSS Variables

The portfolio uses CSS variables for easy customization:

```css
:root {
    --primary-color: #4f60ff;
    --text-primary: #1a1a1a;
    --bg-primary: #ffffff;
    --radius-md: 12px;
    /* ... more variables */
}
```

## Figma MCP Integration

This portfolio was built with Figma MCP (Model Context Protocol) integration to Cursor, enabling:
- Seamless design-to-code workflows
- Rapid prototyping and iteration
- Design system consistency
- Automated component generation

## Credits

**Design & Development:** Booxi Team  
**Inspiration:** UIKitchen.dev  
**Fonts:** Inter & Poppins (Google Fonts)  
**Icons:** Custom SVG icons

## License

© 2025 Booxi. All rights reserved.

## Contact

- **Website:** [booxi.com](https://booxi.com)
- **Email:** hello@booxi.com
- **GitHub:** [github.com/booxi](https://github.com/booxi)
- **LinkedIn:** [linkedin.com/company/booxi](https://linkedin.com/company/booxi)

---

**Note:** This is a showcase portfolio demonstrating UI/UX components. For production use, ensure components meet your specific requirements and accessibility standards.

