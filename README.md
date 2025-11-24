
# Corporate Website Template

This is a code bundle for Corporate Website Template. The original project is available at https://www.figma.com/design/FzRIMzCwN94wJPGHmYPmYs/Corporate-Website-Template.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository's Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Deploy:**
   - Push to the `main` branch to trigger automatic deployment
   - Or manually run: `npm run deploy`

3. **Access your site:**
   - Your site will be available at `https://yourusername.github.io/txppie_corporate_site/`

### Manual Deployment

If you prefer manual deployment:
```bash
npm run build
npm run deploy
```

### Configuration

- **Base Path:** Configured for repository name `txppie_corporate_site`
- **Output Directory:** `docs` (GitHub Pages compatible)
- **Asset Optimization:** Enabled for static hosting  