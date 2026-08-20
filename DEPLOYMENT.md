# COPPER Studio — Docker Deployment Guide (Hostinger VPS)

## Overview

| Service  | Technology          | Container port | Host port |
|----------|---------------------|---------------|-----------|
| frontend | Vite → nginx        | 80            | 3000      |
| backend  | Express + Mongoose  | 5000          | **5001**  |

> Port 5000 on the VPS host is occupied by another application.
> COPPER's backend is mapped to host port **5001** → container port 5000.

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

Fill in every value. The file must look exactly like this:

```env
FRONTEND_PORT=3000
VITE_API_URL=http://200.234.34.214:5001/
BACKEND_PORT=5001
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
FRONTEND_URL=http://200.234.34.214:3000
```

**Important:**
- `VITE_API_URL` must be the URL the **user's browser** can reach — `http://200.234.34.214:5001/`
- `FRONTEND_URL` must match the exact origin the browser sends — `http://200.234.34.214:3000`
- `VITE_API_URL` must end with `/`. `FRONTEND_URL` must have no trailing slash.
- If you change `VITE_API_URL` you must rebuild: `docker compose up --build -d`

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

# Test the backend API directly (host port 5001)
curl http://200.234.34.214:5001/
# Expected: {"message":"Copper Studio API is running."}

# Open frontend in browser
http://200.234.34.214:3000
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

| Variable        | Required | Value for this VPS                          |
|-----------------|----------|---------------------------------------------|
| `VITE_API_URL`  | Yes      | `http://200.234.34.214:5001/`               |
| `MONGODB_URI`   | Yes      | Your MongoDB Atlas connection string        |
| `FRONTEND_URL`  | Yes      | `http://200.234.34.214:3000`                |
| `FRONTEND_PORT` | No       | `3000` (default)                            |
| `BACKEND_PORT`  | No       | `5001` (avoids conflict with existing app)  |

---

## How frontend communicates with backend

```
Browser → http://200.234.34.214:3000   (nginx serves the React SPA)
          ↓
          React app makes API calls to VITE_API_URL
          ↓
Browser → http://200.234.34.214:5001/api/...  (Express backend, host port 5001)
          ↓
          Docker maps 5001 → container port 5000
```

`VITE_API_URL` is baked into the JavaScript bundle at **build time** by Vite.
Changing it requires a rebuild: `docker compose up --build -d`

---

## Port mapping

```
Host 3000  →  copper_frontend container port 80   (nginx)
Host 5001  →  copper_backend  container port 5000 (Express)
```

Host port 5000 is intentionally left free for the existing VPS application.

---

## How to configure MongoDB

The project uses **MongoDB Atlas** (cloud-hosted). No local database container
is needed. Provide your Atlas connection string as `MONGODB_URI`.

To allow connections from your VPS:
1. Log in to MongoDB Atlas.
2. Go to **Network Access**.
3. Add `200.234.34.214` (or `0.0.0.0/0` for all IPs — less secure).

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
- Ensure assets were built: `docker compose exec frontend ls /usr/share/nginx/html`

### API calls fail (network error / CORS error)
- Confirm `VITE_API_URL=http://200.234.34.214:5001/` — not localhost, not port 5000.
- Confirm `FRONTEND_URL=http://200.234.34.214:3000` matches the exact browser origin.
- Rebuild after any URL change: `docker compose up --build -d`
- Test backend directly: `curl http://200.234.34.214:5001/`

### Database connection failed
- Confirm `MONGODB_URI` is set correctly in `.env`.
- Confirm `200.234.34.214` is whitelisted in MongoDB Atlas Network Access.
- Check backend logs: `docker compose logs backend`

### Port already in use
- `5001` is the backend host port. If also occupied: change `BACKEND_PORT` in `.env`.
- Check what's using a port: `ss -tlnp | grep 5001`

### Container keeps restarting
- Read the logs: `docker compose logs --tail=50 backend`
- Most common cause: missing or wrong `MONGODB_URI`.
