# ✨ Nuxt 4 Starter Clean and Minimal ✨

Welcome to the Nuxt 4 Starter project! This starter template is designed to help you quickly set up a Nuxt 4 application with essential features and best practices.

## Features

- **Nuxt 3 (Compatibility Mode)**: Leverage the power of Nuxt 3 while maintaining compatibility with Nuxt 4.
- **Nuxt UI**: Utilize Nuxt UI components for a seamless development experience.
- **Tailwind CSS**: Style your application with the utility-first CSS framework.
- **Nuxt Content**: Manage your content with ease using Nuxt Content.
- **Custom Fonts**: Easily integrate custom fonts into your project.
- **Optimized Images**: Use WebP format and lazy loading for better performance.
- **nuxt-og-image**: Generate Open Graph images dynamically.

## Installation

To get started, clone the repository and install the dependencies:

```bash
# with pnpm
pnpm dlx degit regenrek/nuxt4-starter-clean my-nuxt4-project

# or with npm
npx degit regenrek/nuxt4-starter-clean my-nuxt4-project

# or classic
git clone --depth 1 git@github.com:regenrek/nuxt4-starter-clean.git <my-project-name>
cd <my-project-name>
pnpm install
```

## Usage

### Development

Run the development server:

```bash
pnpm run dev
```

### Build

Build the application for production:

```bash
pnpm run build
```

## Configuration

### Custom Fonts

Add your custom fonts in the `assets` directory and configure them in your `tailwind.config.js`:

```javascript:tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        custom: ['YourCustomFont', 'sans-serif'],
      },
    },
  },
};
```

### Optimized Images

Use WebP format and lazy loading for images. Example:

```html
<img src="/path/to/image.webp" alt="Description" loading="lazy" />
```

## Links to Packages

- [Nuxt 3](https://nuxt.com/)
- [Nuxt UI](https://ui.nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Content](https://content.nuxtjs.org/)
- [nuxt-og-image](https://github.com/nuxt-community/nuxt-og-image)

## License

This project is licensed under the MIT License.


## Follow Me

Follow me on X [@kregenrek](https://x.com/kregenrek)
