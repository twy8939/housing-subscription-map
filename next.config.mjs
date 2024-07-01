/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                destination: 'https://naveropenapi.apigw.ntruss.com/:path*',
                source: '/example/:path*',
            },
        ]
    }
};

export default nextConfig;
