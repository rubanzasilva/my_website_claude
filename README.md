This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Google Analytics

Google Tag Manager container `GTM-WZBVT4WV` is installed in `src/app/layout.tsx`
alongside Vercel Analytics. The container script initializes before hydration,
with a noscript iframe immediately inside the body. It runs only in production;
`npm run dev` does not load the container.

To connect Google Analytics:

1. In [Google Analytics](https://analytics.google.com/), create or select a GA4
   property and a Web data stream for `https://silverrubanza.com`. Copy its
   Measurement ID (starts with `G-`).
2. In [Google Tag Manager](https://tagmanager.google.com/), open container
   `GTM-WZBVT4WV`. Add a **Google tag** using that Measurement ID, with the
   **Initialization - All Pages** trigger (or verify an existing tag).
3. Use **Preview** to verify the tag fires, then **Submit → Publish** the container.
   Keep GA4 Enhanced measurement's history-based page views enabled for
   client-side navigation; avoid adding duplicate manual page-view tags.
4. Rebuild and deploy the website. Visit it and check GA4 **Reports → Realtime**.
   Ad blockers may prevent your own test visit from appearing.

For a local production preview, run `npm run build` followed by `npm start`.
See Google's [container installation guide](https://support.google.com/tagmanager/answer/14847097)
and [single-page application measurement guide](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# my_website_claude
# my_website_claude
