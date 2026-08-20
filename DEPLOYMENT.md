# COPPER Studio — Docker Deployment Guide (Hostinger VPS)

## Overview

| Service  | Technology          | Container port | Default host port |
|----------|---------------------|---------------|-------------------|
| frontend | Vite → nginx        | 80            | 3000              |
| backend  | Express + Mongoose  | 5000          | not exposed*      |

\* The backend is on an internal Docker network only. The browser talks to it
directly via `VITE_API_URL` (which is your VPS public IP/domain + port 5000).
If you want the backend port reachable from the host for debugging, uncomment
the `ports` block in `docker-compose.yml`.

MongoDB is hosted on MongoDB Atlas — no database container is needed.

---

## Prerequisites on the VPS

```bash
# Docker Engine
docker --version        # >= 24 recommended

# Docker Compose plugin (V2)
docker compose version  # >= 2.0
```

---

## Step 1 — Clone the repository

```bash
git clone https://github.com/shekhardixit-droid/COPPER.git
cd COPPER
```

---

## Step 2 — Create the root .env file

```bash
cp .env.example .env
nano .env   # or vim .env
```

Fill in every value. The file must look like this (replace placeholders):

```env
FRONTEND_PORT=3000
VITE_API_URL=http://YOUR_VPS_IP:5000/
BACKEND_PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
FRONTEND_URL=http://YOUR_VPS_IP:3000
```

**Important:**
- `VITE_API_URL` must be the URL the **user's browser** can reach.
  If you have a domain: `https://api.yourdomain.com/`
  Without a domain: `http://YOUR_VPS_IP:5000/`
- `FRONTEND_URL` must match what the browser sends as the `Origin` header.
  If you have a domain: `https://yourdomain.com`
  Without a domain: `http://YOUR_VPS_IP:3000`
- Both must end consistently (API URL ends with `/`, FRONTEND_URL has no trailing slash).

---

## Step 3 — Build and start

```bash
# From the repo root (where docker-compose.yml lives)
docker compose up --build -d
```

This will:
1. Build the backend image (`npm ci --omit=dev` + `node src/server.js`)
2. Build the frontend image (`npm ci` + `vite build` with `VITE_API_URL` baked in)
3. Start both containers

---

## Step 4 — Verify the deployment

```bash
# Check both containers are running
docker compose ps

# Check backend logs
docker compose logs backend

# Check frontend logs
docker compose logs frontend

# Test the backend API directly
curl http://YOUR_VPS_IP:5000/
# Expected: {"message":"Copper Studio API is running."}

# Open frontend in browser
http://YOUR_VPS_IP:3000
```

---

## Step 5 — Deploying through Hostinger Docker Manager

If you are using Hostinger's Docker Manager UI instead of the CLI:

1. Upload the entire repository to your VPS (via git clone or SFTP).
2. In Docker Manager, point it at the `docker-compose.yml` in the repo root.
3. Set the environment variables listed in `.env.example` in the UI.
4. Click **Deploy**.
5. Hostinger will run `docker compose up --build -d` internally.

---

## Required Environment Variables

### Root `.env` (read by docker-compose)

| Variable        | Required | Description                                                    |
|-----------------|----------|----------------------------------------------------------------|
| `VITE_API_URL`  | Yes      | Public backend URL the browser calls. Must end with `/`.      |
| `MONGODB_URI`   | Yes      | MongoDB Atlas connection string.                               |
| `FRONTEND_URL`  | Yes      | Public frontend URL for backend CORS allow-list.               |
| `FRONTEND_PORT` | No       | Host port for the frontend. Default: `3000`.                  |
| `BACKEND_PORT`  | No       | Internal backend port. Default: `5000`.                       |

---

## How frontend communicates with backend

```
Browser → http://YOUR_VPS_IP:3000 (nginx serves the React SPA)
          ↓
          React app makes API calls to VITE_API_URL
          ↓
Browser → http://YOUR_VPS_IP:5000/api/... (Express backend)
```

`VITE_API_URL` is baked into the JavaScript bundle at **build time** by Vite.
This means if you change `VITE_API_URL`, you must rebuild the Docker image:

```bash
docker compose up --build -d
```

---

## How to configure MongoDB

The project uses **MongoDB Atlas** (cloud-hosted). No local database container
is needed. Provide your Atlas connection string as `MONGODB_URI`.

To allow connections from your VPS:
1. Log in to MongoDB Atlas.
2. Go to **Network Access**.
3. Add your VPS public IP address (or `0.0.0.0/0` for all IPs — less secure).

---

## Updating the deployment

```bash
git pull
docker compose up --build -d
```

---

## Stopping the deployment

```bash
docker compose down
```

---

## Troubleshooting

### Frontend shows blank page
- Check nginx logs: `docker compose logs frontend`
- Ensure the `dist/` folder was built: `docker compose exec frontend ls /usr/share/nginx/html`

### API calls fail (network error / CORS error)
- Confirm `VITE_API_URL` is the **public** IP/domain, not `localhost` or an internal IP.
- Confirm `FRONTEND_URL` in backend env matches the exact origin the browser sends.
- Rebuild after changing `VITE_API_URL`: `docker compose up --build -d`
- Check backend is running: `curl http://YOUR_VPS_IP:5000/`

### Database connection failed
- Confirm `MONGODB_URI` is set correctly in `.env`.
- Confirm your VPS IP is whitelisted in MongoDB Atlas Network Access.
- Check backend logs: `docker compose logs backend`

### Port already in use
- Change `FRONTEND_PORT` or `BACKEND_PORT` in `.env`.
- Check what's using a port: `ss -tlnp | grep 3000`

### Container keeps restarting
- Read the logs: `docker compose logs --tail=50 backend`
- Most common cause: missing or wrong `MONGODB_URI`.
