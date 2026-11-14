# TubePilot IndexNow setup

## What is included

- The public verification key is served from `public/a3becd9983474dd4996ced58c3720df5.txt` and should be reachable at `https://www.tubepilot.shop/a3becd9983474dd4996ced58c3720df5.txt`.
- `npm run indexnow` submits URLs supplied in `INDEXNOW_URLS` (newline- or comma-separated), or all canonical URLs in `public/sitemap.xml`.
- The GitHub Actions workflow **Submit changed URLs to IndexNow** is manual by design. Run it only after the corresponding website deployment is live. Supply only URLs that were added, materially updated, or deleted; leave the input blank for an initial sitemap-wide notification.
- The script validates HTTPS and the exact canonical host, deduplicates URLs, and caps each batch at 10,000.

## Run locally

```sh
npm run indexnow
```

To submit only changed pages:

```sh
INDEXNOW_URLS="https://www.tubepilot.shop/features
https://www.tubepilot.shop/blog" npm run indexnow
```

A successful HTTP 200 means IndexNow received the URLs; HTTP 202 means they were accepted while key verification is pending. Neither response guarantees indexing or ranking.

## Cloudflare Crawler Hints (dashboard step)

This part cannot be enabled by repository code. In the Cloudflare dashboard, select the `www.tubepilot.shop` zone, open **Caching** (or **Cache**) → **Configuration**, and enable **Crawler Hints**. Cloudflare documents this as a zone-level setting available on Free, Pro, Business, and Enterprise plans. It uses cache MISS signals to notify participating crawlers through IndexNow.

Do not enable it until you have confirmed the correct Cloudflare zone is serving the production domain. See:
- https://developers.cloudflare.com/cache/advanced-configuration/crawler-hints/
- https://www.indexnow.org/documentation

## Deployment and verification checklist

1. Review and merge this feature branch only when approved.
2. Deploy the website through the existing hosting workflow.
3. Open `https://www.tubepilot.shop/a3becd9983474dd4996ced58c3720df5.txt` and confirm the response body is exactly the key.
4. Enable Cloudflare Crawler Hints in the dashboard.
5. After deployment, run the GitHub Actions workflow with only changed URLs (or blank for the initial sitemap submission).
6. Check the workflow log for HTTP 200 or 202 and review received URLs in Bing Webmaster Tools.

No production deployment or Cloudflare dashboard setting is changed by these repository changes.
