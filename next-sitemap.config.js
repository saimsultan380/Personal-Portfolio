/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://saimsultan.com',
    generateRobotsTxt: false, // We already have robots.txt
    generateIndexSitemap: false,
    exclude: ['/api/*', '/_next/*', '/admin/*'],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    transform: async (config, path) => {
        // Custom priority for different pages
        let priority = config.priority;
        let changefreq = config.changefreq;

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
