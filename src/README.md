# SFDS-Website
# SFDS Website

> A fast, Vite-powered React site for SFDS, styled with Tailwind and Docker-ready.

## Table of Contents

- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Getting Started](#getting-started)  
- [Development](#development)  
- [Production Build](#production-build)  
- [Docker](#docker)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  

## Features

- ✅ Blazing-fast dev server with [Vite](https://vitejs.dev/)  
- 🎨 Utility-first styling with [Tailwind CSS](https://tailwindcss.com/)  
- 📦 Simple production build (`dist/`)  
- 🐳 Dockerfile + `.dockerignore` for containerized hosting  

## Prerequisites

- [Node.js](https://nodejs.org/) v18+  
- [npm](https://www.npmjs.com/) (bundled with Node)  
- [Docker](https://www.docker.com/) (optional, for container builds)  

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/you/SFDS-Website.git
cd SFDS-Website
npm install
```

## Development

Start the Vite dev server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser. Any edits hot-reload instantly.

## Production Build

Generate an optimized, static bundle in `dist/`:

```bash
npm run build
```

You can preview it locally with:

```bash
npm run preview
```

## Docker

Build the Docker image and run it on port 80:

```bash
docker build -t sfds-website .
docker run -d -p 80:80 sfds-website
```

The app will be served by Nginx at http://localhost.

## Deployment

This is just a static site—deploy `dist/` (or the Docker image) to any static-hosting provider or container platform (Netlify, Vercel, AWS S3/CloudFront, Docker-based VPS, etc.).

## Contributing

1. Fork the repo  
2. Create a feature branch: `git checkout -b feat/my-new-feature`  
3. Commit your changes: `git commit -m "feat: add my new feature"`  
4. Push and open a PR  

## License
(https://github.com/sai-chaitanya-raj)
