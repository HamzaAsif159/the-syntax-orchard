# 🌳 The Syntax Orchard

A personal knowledge base and digital garden built with **Astro 5.0** and **Sanity.io v3**. This project focuses on high-performance static generation (SSG) with a headless CMS for structured, interconnected note-taking.

**Live Garden:** [https://the-syntax-orchard.vercel.app/](https://the-syntax-orchard.vercel.app/)



## 🚀 Tech Stack

* **Framework:** [Astro 5.17+](https://astro.build/)
* **CMS:** [Sanity.io v5](https://www.sanity.io/) (Embedded via `@sanity/astro`)
* **Rendering:** [React 19](https://react.dev/) (via `@astrojs/react`)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Syntax Highlighting:** [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer)
* **Deployment:** [Vercel](https://vercel.com/) (using `@astrojs/vercel` adapter)

## ✨ Features

* **Integrated Studio:** Full Sanity Studio experience embedded at the `/admin` route.
* **Growth Stages:** Organized note-taking flow (Seedlings 🌱, Budding 🌿, Evergreen 🌳).
* **Portable Text:** Flexible rich-text rendering using `@portabletext/react`.
* **Responsive Design:** Mobile-first layout powered by Tailwind CSS.
* **Optimized Performance:** Static Site Generation (SSG) for lightning-fast page loads.

---

## 📂 Project Structure

* `src/pages/notes/[slug].astro`: Dynamic routing for individual garden notes.
* `src/schema/`: Sanity document and object type definitions.
* `src/utils/sanityClient.ts`: Configuration for fetching data from the Sanity Content Lake.
* `astro.config.mjs`: Integration setup for React, Tailwind, and Sanity.

---

## 📝 Usage

### Adding Notes
1. Navigate to your local or deployed Studio at `/admin`.
2. Create a new **Note** document.
3. Assign a **Growth Stage** (Seedling, Budding, or Evergreen).
4. Write your content in the Portable Text editor.
5. Click **Publish** to make the note available to the frontend.

### Customizing Code Blocks
Code highlighting is handled by `prism-react-renderer`. You can swap themes or add language support by modifying the `PortableText` component settings in your note template.

---

## 🚀 Deployment

This project is optimized for **Vercel**. Ensure the following **Environment Variables** are set in your dashboard:

* `PUBLIC_SANITY_PROJECT_ID`
* `PUBLIC_SANITY_DATASET`



## 📜 License
MIT
