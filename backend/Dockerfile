# ── Stage: production ────────────────────────────────────────
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency manifests first (layer cache)
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy source code
COPY src/ ./src/

# Run as non-root for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose port (must match PORT env var, default 5000)
EXPOSE 5000

# Start the server
CMD ["node", "src/server.js"]
