export default {
  mode: "universal",
  target: "static",

  head: {
    title: "OgbeniHMMD's Blog" || process.env.npm_package_name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://kit.fontawesome.com/57b5a4abc3.js",
        crossorigin: "anonymous"
      }
    ]
  },

  env: {
    blog: {
      name: "OgbeniHMMD's Blog",
      slogan: process.env.npm_package_description
    }
  },

  plugins: [{ src: "~/plugins/disqus" }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  buildModules: ["@nuxtjs/google-analytics", "nuxt-purgecss"],

  modules: ["bootstrap-vue/nuxt", "@nuxt/content", "nuxt-webfontloader"],

  googleAnalytics: {
    id: "UA-XXXX"
  },

  webfontloader: {
    google: {
      families: ["Quicksand&display=swap"]
    }
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},

  build: {},

  generate: {
    fallback: true // Use '404.html'
  }
};
