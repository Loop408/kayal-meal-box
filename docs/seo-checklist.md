# SEO Implementation Checklist

## Completed Tasks
- [x] **Core SEO Component**: Created `components/SEO.tsx` to handle meta tags, Open Graph, and Twitter Cards (using theme color #1B5E20 and banner.jpg).
- [x] **Structured Data (JSON-LD)**: Created `components/StructuredData.tsx`.
- [x] **Breadcrumbs**: Implemented `components/Breadcrumbs.tsx`.
- [x] **Page Metadata**: Added global metadata in `app/layout.tsx`.
- [x] **Manifest & Theme Color**: Created `public/manifest.json` with theme color `#1B5E20`.
- [x] **Sitemap & Robots.txt**: Configured and generated via `next-sitemap`.
- [x] **Image SEO**: Replaced `<img>` tags with `next/image` in `WeeklyMenu`, `WhyChooseUs`, and `NavBar` for automatic WebP/AVIF optimization and lazy loading.
- [x] **Performance Optimization**: Updated `next.config.ts` to enable compression and cache headers.
- [x] **Google Analytics**: Created `components/GoogleAnalytics.tsx` and injected it into `app/layout.tsx`.
- [x] **Security**: Added security headers in `next.config.ts`.

## Notes on Page-Specific Metadata
The user requested metadata for Home, Menu, Meal Box, Catering, About, and Contact.
- **Home & About**: Exist as standalone pages (`app/page.tsx`, `app/about/page.tsx`).
- **Menu, Meal Box, Catering, Contact**: These are rendered as sections within the Home page rather than separate routes. Thus, the homepage metadata covers them.

## Next Steps for the User
- Set `NEXT_PUBLIC_SITE_URL` in your deployment environment variables (e.g., Vercel) to your production domain.
- Set `NEXT_PUBLIC_GA_ID` in your environment variables to enable Google Analytics tracking.
- Run `npm run build` to verify the build and generate the sitemap.
- Register your site in Google Search Console and submit the sitemap URL (`https://kayalkerala.in/sitemap.xml`).
