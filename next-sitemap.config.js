/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://saim.mrwebsol.com",
  trailingSlash: true,
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/_next/*"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    }

    const loc = path === "/" ? `${config.siteUrl}/` : `${config.siteUrl}${path.endsWith("/") ? path : `${path}/`}`;

    return {
      loc,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
