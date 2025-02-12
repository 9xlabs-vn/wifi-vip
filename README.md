# WiFi Frontend

A Next.js application with TypeScript, Tailwind CSS, and Prisma integration.

## Features

- 🔐 Authentication system
- 🎨 UI Component library with shadcn/ui
- 🎯 Dashboard interface
- 🔄 Database integration with Prisma
- 📱 Responsive design with Tailwind CSS

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 16.x or higher)
- npm or yarn or pnpm
- Git

## Setup

1. Clone and switch to develop branch:
```bash
git checkout develop
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your database with Prisma:
```bash
npx prisma generate
npx prisma db push
```

4. Create a `.env` file in the root directory with necessary environment variables.

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js 13+ app directory with route groups
  - `/auth` - Authentication related pages and components
  - `/dashboard` - Dashboard interface
- `/components` - Reusable UI components
  - `/ui` - shadcn/ui component library
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and shared logic
- `/prisma` - Database schema and migrations
- `/public` - Static assets

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
