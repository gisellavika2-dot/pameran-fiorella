# Fiorella

Fiorella is configured as a static Next.js export so it can run directly from
Plesk's `httpdocs` directory. No Node.js process is required on the server.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build for Plesk

Use Node.js 20 or newer, then run:

```bash
npm ci
npm run build:plesk
```

The deployable website is generated in `out/`.

## Deploy to `httpdocs`

1. Back up the current contents of the domain's `httpdocs` directory.
2. Remove the old website files from `httpdocs` so stale Next.js chunks cannot
   remain. Keep unrelated server-managed files only if your hosting provider
   requires them.
3. Upload the **contents** of `out/` into `httpdocs/`. Do not upload the `out`
   folder itself as an extra nesting level.
4. Ensure hidden files are included so `out/.htaccess` reaches
   `httpdocs/.htaccess`.
5. Open the home page and test a direct visit to a nested route such as
   `/divisi/1/` and `/hari-pelaksanaan/1/`.

The export uses directory-style URLs (`trailingSlash`) so Apache can serve each
nested route through its generated `index.html`. The included `.htaccess` sets
the custom 404 page and safe caching/compression rules when the corresponding
Apache modules are enabled.

## Updating the site

After code or asset changes, rebuild and replace the contents of `httpdocs`
with the newly generated contents of `out/`. Always deploy the HTML and
`_next/` directory from the same build.
