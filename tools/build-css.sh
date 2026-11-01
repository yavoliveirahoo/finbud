#!/bin/sh
# Gera o tailwind.css a partir das classes usadas no index.html (rode depois de mudar classes).
# Requer Node: npx tailwindcss@3.4.19
cd "$(dirname "$0")/.." && npx --yes tailwindcss@3.4.19 -c tools/tailwind.config.js -i tools/in.css -o tailwind.css --minify
