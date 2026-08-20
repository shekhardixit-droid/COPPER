# ── Stage 1: build ───────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (layer cache)
COPY package.json package-lock.json ./

# Install all dependencies (dev needed for vite build)
RUN npm ci

# Copy source files
COPY index.html ./
COPY vite.config.js ./
COPY eslint.config.js ./
COPY public/ ./public/
COPY src/ ./src/

# VITE_API_URL is a build-time arg — baked into the JS bundle by Vite
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Build production bundle
RUN npm run build

# ── Stage 2: serve ────────────────────────────────────────────
FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom nginx config that handles SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
