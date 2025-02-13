import { Inter_Tight } from "next/font/google";

/**
 * Font configuration for Inter Tight
 * Loads the Inter Tight font with multiple weights
 * for use throughout the application
 */
const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export { interTight };

/**
 * Head component that sets up document metadata and resources
 * Includes font preconnect, favicon, viewport settings, and meta descriptions
 * @returns JSX element containing head configurations
 */
export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="icon" href="/images/logo.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="TASIS - Tim Tata Tertib Siswa Stembayo"
      />
      <title>TASIS | Tata Tertib Siswa</title>
    </>
  );
}
