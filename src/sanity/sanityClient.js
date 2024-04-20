import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityConfig = {
    projectId: 'onqbxcsz',
    dataset: 'production',
    token: 'sku7no3a9Pr7uwkZ50Ym93lCGgwG2I11L5yc5dIDzu4e00hzHg1VPgYyI372QVFuRxkgnkOPQcmlCjcmAgVHo25KiCchvWZjzCaxxVwD6pvtZrkPv6IAa6RAx0NVxlzQZbS5M5Kaky7cCIU6EpOPwib1LODyFY8KV0bNh1TUPo61xORAHzcl', // Optional: If using private datasets or need authentication
    useCdn: false, // Set to true for faster response, but you won't get real-time data updates
    apiVersion: '2022-03-07',
}

const sanityClient = createClient(sanityConfig);
export default sanityClient;

const builder = imageUrlBuilder(sanityConfig)

export function urlFor(source) {
    if (source) {
        return builder.image(source)
    }
}