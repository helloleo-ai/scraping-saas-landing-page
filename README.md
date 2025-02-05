# Modern SaaS Landing Page Template

A modern, responsive landing page template built with React, Vite, and TailwindCSS. Perfect for SaaS products and services.

[Live Demo](https://github.com/helloleo-ai/scraping-saas-landing-page)

![Screenshot of the landing page](screenshot.png)

## Features

- 🚀 Built with React + Vite for lightning-fast development
- 🎨 Styled with TailwindCSS + DaisyUI for beautiful UI components
- ✨ Smooth animations with Framer Motion
- 📊 Interactive charts with Recharts
- 📱 Fully responsive design
- 🔄 React Router for client-side routing
- 🎯 Modern landing page sections:
  - Hero section with animated background
  - Features grid
  - Interactive demo section
  - Pricing cards
  - Testimonials
  - FAQ accordion
  - Registration page

## Quick Start

1. Clone the repository:
```bash
git clone git@github.com:helloleo-ai/scraping-saas-landing-page.git
cd scraping-saas-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Hero.jsx       # Hero section
│   ├── Features.jsx   # Features grid
│   ├── ScrapeDemo.jsx # Interactive demo
│   ├── Pricing.jsx    # Pricing cards
│   └── ...
├── pages/             # Page components
│   └── RegisterPage.jsx
├── App.jsx            # Main app component
└── main.jsx          # Entry point
```

## Customization

### Colors and Theme

The template uses DaisyUI for theming. You can customize colors in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      }
    }
  }
}
```

### Content

Update the content by modifying the data in each component:

- `Features.jsx`: Update `features` array
- `Pricing.jsx`: Update `plans` array
- `Testimonials.jsx`: Update `testimonials` array
- `FAQ.jsx`: Update `faqs` array

## Dependencies

- React 18
- Vite 5
- TailwindCSS 3
- DaisyUI 4
- Framer Motion 10
- Recharts 2
- React Router DOM 6
- React Icons 5

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this template helpful, please consider giving it a ⭐️ on GitHub!

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Enhanced by [DaisyUI](https://daisyui.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
