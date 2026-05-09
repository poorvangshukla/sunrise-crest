import { useEffect } from 'react';

/**
 * SEO Component for managing page meta tags
 * Updates document title and meta tags for better SEO
 */
const SEO = ({
    title = 'Sunrise Crest',
    description = 'Premium food import and export trading company based in Tokyo, Japan',
    keywords = 'food trading, import export, Tokyo, food stuff, spices, grains, nuts',
    ogImage = '/og-image.jpg',
    url = ''
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Helper function to update or create meta tags
        const updateMetaTag = (property, content, attribute = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${property}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, property);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Standard meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Open Graph meta tags for social sharing
        updateMetaTag('og:title', title, 'property');
        updateMetaTag('og:description', description, 'property');
        updateMetaTag('og:image', ogImage, 'property');
        updateMetaTag('og:type', 'website', 'property');
        if (url) {
            updateMetaTag('og:url', url, 'property');
        }

        // Twitter Card meta tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        // Additional SEO meta tags
        updateMetaTag('robots', 'index, follow');
        updateMetaTag('author', 'Sunrise Crest');
        updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    }, [title, description, keywords, ogImage, url]);

    return null; // This component doesn't render anything
};

export default SEO;
