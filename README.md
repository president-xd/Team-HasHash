# hashash CTF Team Website

A modular static website for the Hashash CTF Team, built with Next.js and designed for easy content management through JSON configuration files.

## Features

- **Static Export**: Optimized for deployment on any static hosting service
- **Modular Design**: Easy to add/remove components and content
- **JSON-Driven Content**: Update team members, sponsors, and writeups through simple JSON files
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **SEO Optimized**: Built with Next.js best practices for search engine optimization
- **Dark Mode**: Default dark theme with light and system theme options

## Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment**:
   - Every push to the `main` branch triggers a deployment
   - The site will be available at `https://hashash.vercel.app/`

3. **Manual Deployment**:
   - Go to the "Actions" tab in your repository
   - Click "Deploy to GitHub Pages" workflow
   - Click "Run workflow" to manually trigger a deployment

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a static export:

```bash
npm run build
```

This will generate a static site in the `out` directory.

## Project Structure

```
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment workflow
├── app/
│   ├── page.tsx             # Homepage
│   ├── members/page.tsx     # Team members page
│   ├── sponsors/page.tsx    # Sponsors page
│   ├── writeups/page.tsx    # Writeups page
│   └── writeups/[slug]/page.tsx # Individual writeup pages
├── components/
│   ├── navigation.tsx       # Shared navigation component
│   ├── theme-switcher.tsx   # Theme switching component
│   ├── member-card.tsx      # Individual member display
│   ├── sponsor-card.tsx     # Individual sponsor display
│   └── writeup-card.tsx     # Individual writeup display
├── data/
│   ├── members.ts          # Team members data
│   ├── sponsors.ts         # Sponsors data
│   └── writeups.ts         # Writeups data
└── next.config.mjs         # Next.js configuration with static export
```

## Content Management

### Adding Team Members

Edit `data/members.ts` to add new team members:

```typescript
{
  name: "New Member",
  role: "member", // or "admin"
  description: "Brief description of the member",
  avatar: "/path/to/avatar.jpg",
  social: {
    website: "https://example.com",
    email: "member@Hashash.team",
    twitter: "https://twitter.com/member",
    github: "https://github.com/member",
    linkedin: "https://linkedin.com/in/member",
    discord: "member#1234"
  }
}
```

### Adding Sponsors

Edit `data/sponsors.ts` to add new sponsors:

```typescript
{
  name: "Sponsor Name",
  logo: "/path/to/logo.png",
  social: {
    website: "https://sponsor.com",
    twitter: "https://twitter.com/sponsor",
    linkedin: "https://linkedin.com/company/sponsor"
  }
}
```

### Adding Writeups

Edit `data/writeups.ts` to add new writeups:

```typescript
{
  title: "Challenge Name - Competition",
  author: "Author Name",
  date: "MM/DD/YYYY",
  tags: ["category", "subcategory"],
  description: "Brief description of the writeup",
  image: "/path/to/preview.jpg",
  slug: "url-friendly-slug"
}
```

## Theme System

The website supports three themes:
- **Dark** (default): Dark background with light text
- **System**: Follows the user's system preference
- **Light**: Light background with dark text

Users can cycle through themes using the theme switcher in the navigation bar.

## Customization

- **Colors**: Modify the color scheme in the Tailwind classes throughout the components
- **Layout**: Adjust the grid layouts in the page components
- **Styling**: Update the component styles to match your team's branding
- **Content Structure**: Modify the TypeScript interfaces in the components to add new fields

## Alternative Deployment Options

The site can also be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

Simply upload the contents of the `out` directory after running `npm run build`.

## License

MIT License - feel free to use this template for your own CTF Team website.
