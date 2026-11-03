# T-CLOSET Deployment

The storefront is a static HTML/CSS/JavaScript site. `.github/workflows/deploy-pages.yml` publishes the repository root to GitHub Pages whenever changes are pushed to `main`.

## Publish to GitHub Pages

1. Commit and push the storefront files and workflow to the `main` branch of `Oyindamolamajek/T-Closet`.
2. In GitHub, open the repository's **Settings / Pages** and set the build source to **GitHub Actions** if it is not already selected.
3. Wait for the **Deploy T-CLOSET to GitHub Pages** workflow to complete successfully in the **Actions** tab.
4. Open the published site at `https://oyindamolamajek.github.io/T-Closet/`.

The site is not public until the workflow has run successfully. Later pushes to `main` deploy updates automatically.

## Supabase Authentication Redirects

After the site is published, add this URL under Supabase **Authentication / URL Configuration / Redirect URLs**:

```text
https://oyindamolamajek.github.io/T-Closet/**
```

Once confirmed, change Supabase's **Site URL** to the published site. The app passes its current page URL to Supabase for confirmation and magic-link callbacks, so the public URL must remain on the redirect allow-list.

## Use a Branded Domain

To let customers enter a short branded address, register a domain such as `tcloset.com` or `t-closet.com` if available. Underscores are not allowed in normal domain names, so `T_closet` cannot be used as the domain itself.

Then add the registered domain in GitHub **Settings / Pages / Custom domain**, configure the DNS records GitHub specifies at the domain provider, enable HTTPS after DNS verification, and add the HTTPS domain and its redirect pattern to Supabase's URL configuration. Domain registration and DNS changes require access to the chosen domain provider.

## Before Customer Launch

- Configure custom SMTP in Supabase so confirmation and magic-link emails can reach customers.
- Confirm the deployed callback works by creating a test account and signing in from another device/network.
- Replace sample product prices, variants, descriptions, and images with verified store data.
- Connect a real order and payment backend; checkout currently displays a demo preview only.
