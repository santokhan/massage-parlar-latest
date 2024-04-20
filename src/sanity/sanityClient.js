import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import blockContentToHtml from '@sanity/block-content-to-html';

const sanityConfig = {
    projectId: 'onqbxcsz',
    dataset: 'production',
    token: 'sku7no3a9Pr7uwkZ50Ym93lCGgwG2I11L5yc5dIDzu4e00hzHg1VPgYyI372QVFuRxkgnkOPQcmlCjcmAgVHo25KiCchvWZjzCaxxVwD6pvtZrkPv6IAa6RAx0NVxlzQZbS5M5Kaky7cCIU6EpOPwib1LODyFY8KV0bNh1TUPo61xORAHzcl', // Optional: If using private datasets or need authentication
    useCdn: false, // Set to true for faster response, but you won't get real-time data updates
    apiVersion: '2022-03-07',
}

const sanityClient = createClient(sanityConfig);
export default sanityClient;

// Image builder
const builder = imageUrlBuilder(sanityConfig)

export function urlFor(source) {
    return builder.image(source)
}

// Block content
// Define serializers for marks
const serializers = {
    marks: {
        span: (text) => `<span>${text}</span>`,
        strong: (text) => `<strong>${text}</strong>`,
        link: ({ mark, children }) => `<a href="${mark.href}">${children}</a>`,
    },
};

export function generateHTML(sanityPortableText) {
    // Convert Sanity Portable Text to HTML
    const html = blockContentToHtml({
        blocks: sanityPortableText,
        serializers: serializers,
    });

    return html;
}