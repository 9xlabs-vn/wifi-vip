# Base stage for both development and production
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./

# Development stage
FROM base AS development
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production dependencies stage
FROM base AS production-deps
RUN npm ci

# Production build stage
FROM production-deps AS production-build
COPY . .
RUN npx prisma generate
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Copy production dependencies and build output
COPY --from=production-deps /app/node_modules ./node_modules
COPY --from=production-build /app/.next ./.next
COPY --from=production-build /app/public ./public
COPY --from=production-build /app/package.json ./package.json
COPY --from=production-build /app/next.config.ts ./next.config.ts

# Copy Prisma files and generate client
COPY --from=production-build /app/prisma ./prisma
RUN npx prisma generate

EXPOSE 3000
CMD ["npm", "run", "start"]