/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites() {
    //     if (process.env.NODE_ENV == "development") {
    //         return [
    //             {
    //               source: '/api/:path*',
    //               destination: 'http://localhost:8000/:path*'
    //             },
    //             {
    //               source: '/api/docs',
    //               destination: 'http://localhost:8000/docs'
    //             },
    //             {
    //               source: '/openapi.json',
    //               destination: 'http://localhost:8000/openapi.json'
    //             }
    //           ]
    //     }
    //   }
};

export default nextConfig;
 