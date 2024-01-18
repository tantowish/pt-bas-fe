/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async() =>{
        return [
            {
                source: '/project',
                destination:'/project/griya-cendana-asri-2',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
