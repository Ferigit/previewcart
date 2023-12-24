/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ceezer-public-assets.s3.eu-central-1.amazonaws.com',
            },
        ],
    },
}

