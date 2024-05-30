// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "REMASTERED KICKS";
export const SITE_DESCRIPTION =
  "Химчистка, ремонт и реставрация обуви в Москве.";
// export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "REMASTERED KICKS";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
