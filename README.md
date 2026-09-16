# Muneeb Ahmed — Portfolio

A Next.js portfolio with a contact form that opens WhatsApp (+923254306247) with the visitor's message pre-filled.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Edit your content

Almost everything you'll want to change lives in one file:

`src/lib/data.ts`

- `profile` — your name, role, WhatsApp number, email, GitHub/LinkedIn links, tagline, bio
- `skillGroups` — your skill categories
- `projects` — add/edit/remove projects and their links

## How the contact form works

There's no backend — it's a pure frontend trick. When someone submits the form, it builds a `https://wa.me/923254306247?text=...` link with their name, email, and message pre-filled, and opens it in a new tab so they just hit send on WhatsApp. If you ever want it to also email you, or save submissions to a database, that would need a backend API route added.

## Deploy

The easiest free option is [Vercel](https://vercel.com):

1. Push this folder to a GitHub repo
2. Import the repo on vercel.com
3. Deploy — no configuration needed

## Structure

```
src/
  app/            → layout, global styles, the page itself
  components/      → Nav, Hero, About, Skills, Projects, Contact, Footer
  lib/data.ts      → all your editable content
```
