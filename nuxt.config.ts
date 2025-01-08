// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  fonts: {
    families: [
      // do not resolve this font with any provider from `@nuxt/fonts`
      // { name: 'Custom Font', provider: 'none' },
      // only resolve this font with the `google` provider
      { name: 'montserrat', provider: 'google' },
      // specify specific font data - this will bypass any providers
      // { name: 'Other Font', src: 'https://example.com/font.woff2', weight: 'bold' },
    ]
  }
})