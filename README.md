# The Speech Factory

Official website for The Speech Factory, a leadership communication and public speaking practice founded by Jeremiah Kobby Sekyi.

## Local development

```bash
npm install
npx next dev
```

The site is built with Next.js, React and Tailwind CSS. Core programme and testimonial content lives in `lib/content.ts`; page content lives under `app/`.

## Deployment

The production repository is designed for Vercel. Connect the GitHub repository, keep the framework preset on Next.js and deploy the `main` branch. `vercel.json` ensures Vercel uses the standard Next.js build.

Before moving `thespeechfactory.org`, verify the new deployment, add the domain in Vercel, then update the domain's DNS records as directed by Vercel.
