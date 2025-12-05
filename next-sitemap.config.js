/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://saimsultan.com',

    // You already created a manual robots.txt — so keep this FALSE
    generateRobotsTxt: false,

    // No need for index sitemap — keeps things simpler
    generateIndexSitemap: false,

    // Exclude internal routes (correct)
    exclude: ['/api/*', '/_next/*', '/admin/*'],

    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,

    transform: async (config, path) => {
        let priority = config.priority;
        let changefreq = config.changefreq;

        // Homepage boost (SEO best practice)
        if (path === '/') {
            priority = 1.0;
            changefreq = 'daily';
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: new Date().toISOString(),
        };
    },
};
