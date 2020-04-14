const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://www.mexicobaila.com',
  ignoredPaths: ['admin'],
  pagesDirectory: 'pages',
  targetDirectory: 'static/'
})
