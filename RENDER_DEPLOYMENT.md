# Render.com Deployment Guide

## ✅ Project Ready for Deployment

All changes have been completed. Your project is now ready to deploy to Render.com.

## Changes Made

### 1. Updated `server/src/index.ts`
- Changed port to use environment variable: `const PORT = process.env.PORT || 3001;`

### 2. Updated `server/package.json`
- Added build script: `"build": "tsc"`
- Added start script: `"start": "node dist/index.js"`

### 3. Verified `server/tsconfig.json`
- ✅ rootDir: "src"
- ✅ outDir: "dist"
- ✅ target: "ES2020"

### 4. Created `server/.gitignore`
```
node_modules
dist
.env
```

### 5. Local Verification
- ✅ Build successful: `npm run build`
- ✅ Production server running: `npm start`
- ✅ Health check passed
- ✅ Agent endpoint working

## Render.com Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### Step 2: Create Render Web Service
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: code-agent-server (or your choice)
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Step 3: Add Environment Variable
In Render dashboard, add:
- **Key**: `OPENAI_API_KEY`
- **Value**: `your-openai-api-key-here`

### Step 4: Deploy
Click "Create Web Service" and wait ~2 minutes for deployment.

## Your Live Endpoints

Once deployed, you'll get a URL like: `https://code-agent-server.onrender.com`

- Health: `GET https://your-app.onrender.com/health`
- Agent: `POST https://your-app.onrender.com/agent/run`
- Test Page: `https://your-app.onrender.com/test.html`

## Testing Your Deployment

```bash
# Health check
curl https://your-app.onrender.com/health

# Test agent
curl -X POST https://your-app.onrender.com/agent/run \
  -H "Content-Type: application/json" \
  -d '{"task": "Write a hello world function"}'
```

## Notes

- Free tier may sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- No credit card required for free tier
- Automatic deploys on git push (if enabled)

