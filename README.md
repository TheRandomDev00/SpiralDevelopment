# Spiral Development

A responsive, static landing page for the Spiral macro for Anime Adventures. No installation or build step required.

## Customize

- Discord invite is configured in `script.js`. All purchase buttons send visitors to the server to create a ticket. Pricing: $10 via PayPal/crypto, 1,000 Robux, or Anime Adventures units by discussion.
- Edit page text in `index.html` and colors in `style.css`.
- Product features and system requirements should be updated to match your actual macro before launch.

## Host on GitHub Pages

1. Create a GitHub repository and upload `index.html`, `style.css`, `script.js`, `favicon.svg`, and `.nojekyll` to its root.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, then save.
4. GitHub will display your website URL once deployment finishes.

All local asset links are relative, so the site supports both repository Pages URLs and custom domains. Fonts load from Google Fonts with local fallbacks. This website contains no macro executable.
