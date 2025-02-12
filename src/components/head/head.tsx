import { Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Changed from weights to weight
});

export { interTight };

export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="TASIS - Tim Tata Tertib Siswa Stembayo" />
      <title>TASIS | Tata Tertib Siswa</title>
      <link rel="icon" href="/imageslogo.svg" />
    </>
  );
}