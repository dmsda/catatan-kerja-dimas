import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Catatan Kerja Dimas',
    short_name: 'DimasOS',
    description: 'Personal Work Operating System dengan gaya Retro Digital Workspace.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#D90000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
