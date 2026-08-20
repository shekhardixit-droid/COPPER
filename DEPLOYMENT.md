# COPPER Studio — Docker Deployment Guide (Hostinger VPS)

## Overview

| Service  | Technology          | Container port | Host port |
|----------|---------------------|---------------|-----------|
| frontend | Vite → nginx        | 80            | **3002**  |
| backend  | Express + Mongoose  | 5000          | **5002**  |

> Host ports 5000 and 5001 are occupied by other VPS applications.
> Frontend host port 3000 and 3001 may also be occupied — using 3002.
> All host ports are hardcoded in docker-compose.yml (no variable interpolation).

MongoDB is hosted on MongoDB Atlas — no database container is needed.

---

## Prerequisites on the VPS

```bash
docker --version        # >= 24 recommended
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
nano .env
```

Fill in every value exactly like this:

```env
FRONTEND_PORT=3002
BACKEND_PORT=5002
VITE_API_URL=http://200.234.34.214:5002/
FRONTEND_URL=http://200.234.34.214:3002
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```

**Important:**
- `VITE_API_URL` = `http://200.234.34.214:5002/` — must end with `/`
- `FRONTEND_URL` = `http://200.234.34.214:3002` — no trailing slash
- Changing `VITE_API_URL` requires a rebuild: `docker compose up --build -d`

---

## Step 3 — Build and start

```bash
docker compose up --build -d
```

---

## Step 4 — Verify the deployment

```bash
# Check containers are running
docker compose ps

# Test backend API (host port 5002)
curl http://200.234.34.214:5002/
# Expected: {"message":"Copper Studio API is running."}

# Open frontend in browser
http://200.234.34.214:3002
```

---

## Step 5 — Deploying through Hostinger Docker Manager

1. Upload the repository to your VPS via `git clone` or SFTP.
2. In Docker Manager, point it at `docker-compose.yml` in the repo root.
3. Set the environment variables from `.env.example` in the UI.
4. Click **Deploy**.

---

## Required Environment Variables

| Variable        | Required | Value                                        |
|-----------------|----------|----------------------------------------------|
| `VITE_API_URL`  | Yes      | `http://200.234.34.214:5002/`                |
| `MONGODB_URI`   | Yes      | Your MongoDB Atlas connection string         |
| `FRONTEND_URL`  | Yes      | `http://200.234.34.214:3002`                 |
| `FRONTEND_PORT` | No       | `3002` (informational only — port hardcoded) |
| `BACKEND_PORT`  | No       | `5002` (informational only — port hardcoded) |

---

## Port mapping

```
Host 3002  →  copper_frontend container port 80    (nginx)
Host 5002  →  copper_backend  container port 5000  (Express)

Host ports 5000, 5001, 3000, 3001 left free for other VPS applications.
```

Both ports are **hardcoded** in docker-compose.yml. No variable interpolation.

---

## How frontend communicates with backend

```
Browser → http://200.234.34.214:3002        (nginx serves the React SPA)
          ↓ API calls to VITE_API_URL
Browser → http://200.234.34.214:5002/api/...
          ↓ Docker maps host 5002 → container 5000
          Express backend
```

`VITE_API_URL` is baked into the JS bundle at build time. Rebuild required after change:
```bash
docker compose up --build -d
```

---

## How to configure MongoDB

Provide your Atlas connection string as `MONGODB_URI`. Allow VPS connections:
1. MongoDB Atlas → **Network Access**
2. Add IP `200.234.34.214`

---

## Updating the deployment

```bash
git pull
docker compose up --build -d
```

## Stopping

```bash
docker compose down
```

---

## Troubleshooting

### Frontend shows blank page
```bash
docker compose logs frontend
docker compose exec frontend ls /usr/share/nginx/html
```

### API calls fail (CORS / network error)
- Confirm `VITE_API_URL=http://200.234.34.214:5002/`
- Confirm `FRONTEND_URL=http://200.234.34.214:3002`
- Rebuild: `docker compose up --build -d`
- Test: `curl http://200.234.34.214:5002/`

### Database connection failed
```bash
docker compose logs backend
```
- Check `MONGODB_URI` in `.env`
- Check `200.234.34.214` is whitelisted in Atlas Network Access

### Port already in use
```bash
ss -tlnp | grep 3002
ss -tlnp | grep 5002
```

### Container keeps restarting
```bash
docker compose logs --tail=50 backend
```
Most common cause: missing or incorrect `MONGODB_URI`.
