import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saimsultan.com';

    return {
        rules: [
            {
                userAgent: '*',
                disallow: ['/api/', '/_next/', '/admin/'],
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
