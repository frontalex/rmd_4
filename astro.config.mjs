/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';

/*
  We are doing some URL mumbo jumbo here to tell Astro what the URL of your website will be.
  In local development, your SEO meta tags will have localhost URL.
  In built production websites, your SEO meta tags should have your website URL.
  So we give our website URL here and the template will know what URL to use
  for meta tags during build.
  If you don't know your website URL yet, don't worry about this
  and leave it empty or use localhost URL. It won't break anything.
*/
// import astroSvgComnponents from '@foxpro/astro-svg-components'

// import image from "@astrojs/image";
const SERVER_PORT = 3000;

// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = "https://wtf3d.ru";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['@astrojs/prism']
    }
  },
  // Удалить experimental: { assets: true } - может вызывать проблемы
  // experimental: {
  //   assets: true
  // },
  output: "static",
  server: {
    port: SERVER_PORT
  },
  site: BASE_URL,
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
    // Удаляем tailwind интеграцию и настраиваем вручную
  // image(),
  // astroSvgComnponents()
],
});
