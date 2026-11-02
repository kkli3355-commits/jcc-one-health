# JCC One Health — Hero Banner

A static website for the JCC One Health Innovation hero banner, deployed on **Azure Static Web Apps**.

## Project Structure

```
one-health-hero/
├── index.html                          # Main HTML page
├── style.css                           # Responsive styles + animations
├── script.js                           # Particle effects + interactions
├── staticwebapp.config.json            # Azure Static Web Apps config
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml   # GitHub Actions CI/CD
├── .gitignore
├── hero-assets/
│   └── hero-artwork.png                # Hero background artwork
└── README.md                           # This file
```

## Deploy to Azure Static Web Apps

### Option A: GitHub (recommended — auto CI/CD)

1. Create a new GitHub repository and push this folder to it:
   ```bash
   cd one-health-hero
   git init
   git add .
   git commit -m "JCC One Health hero banner"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. Go to [Azure Portal](https://portal.azure.com) → Create "Static Web App"

3. Fill in:
   - **Source**: GitHub
   - **Repo**: select your repo
   - **Branch**: `main`
   - **Build Presets**: Custom
   - **App location**: `/`
   - **API location**: (leave empty)
   - **Output location**: (leave empty)

4. Azure will auto-generate `AZURE_STATIC_WEB_APPS_API_TOKEN` in your GitHub Secrets and trigger the workflow.

5. Your site will be live at `https://<app-name>.azurestaticapps.net` within ~2 minutes.

### Option B: Azure CLI (quick deploy)

```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Login
swa login

# Deploy from this folder
swa deploy --env production
```

### Option C: VS Code Extension

1. Install "Azure Static Web Apps" extension in VS Code
2. Sign in to Azure
3. Right-click the folder → "Deploy to Static Web App"
4. Select subscription → create new → done

## Local Development

```bash
# Using Python
python3 -m http.server 8080

# Using Node (if swa-cli installed)
swa start

# Then open http://localhost:8080
```

## Customization

- **Text content**: edit `index.html`
- **Colors / layout**: edit `style.css`
- **Background image**: replace `hero-assets/hero-artwork.png`
- **Particles**: edit `script.js`

## Tech Stack

- Pure HTML / CSS / JavaScript — no build step required
- Azure Static Web Apps (Free tier supported)
- GitHub Actions for CI/CD
