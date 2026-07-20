#!/bin/bash
npx @cloudflare/next-on-pages
echo "_worker.js" > .vercel/output/static/.assetsignore
