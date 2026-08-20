# COPPER Studio — Docker Deployment Guide (Hostinger VPS)

## Overview

| Service  | Technology          | Container port | Host port |
|----------|---------------------|---------------|-----------|
| frontend | Vite → nginx        | 80            | 3000      |
| backend  | Express + Mongoose  | 5000          | **5002**  |

> Host ports 5000 and 5001 on the VPS are occupied by other applications.
> COPPER's backend is mapped to host port **5002** → container port 5000.

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
FRONTEND_PORT=3000
VITE_API_URL=http://200.234.34.214:5002/
BACKEND_PORT=5002
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
FRONTEND_URL=http://200.234.34.214:3000
```

**Important:**
- `VITE_API_URL` = `http://200.234.34.214:5002/` — must end with `/`
- `FRONTEND_URL` = `http://200.234.34.214:3000` — no trailing slash
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
http://200.234.34.214:3000
```

---

## Step 5 — Deploying through Hostinger Docker Manager

1. Upload the repository to your VPS via `git clone` or SFTP.
2. In Docker Manager, point it at `docker-compose.yml` in the repo root.
3. Set the environment variables from `.env.example` in the UI.
4. Click **Deploy**.

---

## Required Environment Variables

| Variable        | Required | Value for this VPS                               |
|-----------------|----------|--------------------------------------------------|
| `VITE_API_URL`  | Yes      | `http://200.234.34.214:5002/`                    |
| `MONGODB_URI`   | Yes      | Your MongoDB Atlas connection string             |
| `FRONTEND_URL`  | Yes      | `http://200.234.34.214:3000`                     |
| `FRONTEND_PORT` | No       | `3000` (default)                                 |
| `BACKEND_PORT`  | No       | `5002` (5000 and 5001 occupied on this VPS)      |

---

## How frontend communicates with backend

```
Browser → http://200.234.34.214:3000        (nginx serves the React SPA)
          ↓ API calls to VITE_API_URL
Browser → http://200.234.34.214:5002/api/...
          ↓ Docker maps host 5002 → container 5000
          Express backend
```

`VITE_API_URL` is baked into the JS bundle at build time by Vite.
Rebuild required after any change: `docker compose up --build -d`

---

## Port mapping

```
Host 3000  →  copper_frontend container port 80    (nginx)
Host 5002  →  copper_backend  container port 5000  (Express)

Host 5000 and 5001 are left free for other VPS applications.
```

---

## How to configure MongoDB

The project uses MongoDB Atlas. Provide your connection string as `MONGODB_URI`.

Allow VPS connections in Atlas:
1. MongoDB Atlas → **Network Access**
2. Add IP `200.234.34.214` (or `0.0.0.0/0` — less secure)

---

## Updating the deployment

```bash
git pull
docker compose up --build -d
```

## Stopping the deployment

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
- Confirm `VITE_API_URL=http://200.234.34.214:5002/` (not 5000 or 5001)
- Confirm `FRONTEND_URL=http://200.234.34.214:3000`
- Rebuild: `docker compose up --build -d`
- Test: `curl http://200.234.34.214:5002/`

### Database connection failed
```bash
docker compose logs backend
```
- Check `MONGODB_URI` is correct in `.env`
- Check `200.234.34.214` is whitelisted in Atlas Network Access

### Port already in use
```bash
ss -tlnp | grep 5002
```
Change `BACKEND_PORT` in `.env` if 5002 is also occupied.

### Container keeps restarting
```bash
docker compose logs --tail=50 backend
```
Most common cause: missing or incorrect `MONGODB_URI`.
