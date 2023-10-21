import MapComponent from '@/components/maobox/Mapcomponent'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome Homes - Kaya: Your Gateway to Dream Getaways</title>
        <meta
          name="description"
          content="Discover a curated selection of exceptional homes with Welcome Homes - Kaya. Book your perfect stay and create lasting memories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Kaya" /> {/* Add the author's name */}
        <meta name="name" content="Welcome Homes - Kaya" /> {/* Add the web name */}
        <meta name="robots" content="index, follow" />{" "}
        {/* Direct Google bot to index the page */}
        <meta name="googlebot" content="index, follow" /> {/* For Google bot */}
        <meta
          property="og:title"
          content="Welcome Homes - Kaya: Your Gateway to Dream Getaways"
        />
        <meta
          property="og:description"
          content="Discover a curated selection of exceptional homes with Welcome Homes - Kaya. Book your perfect stay and create lasting memories."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/asikur/image/upload/v1697922761/Screenshot_510_zagdim.png"
        />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <div className="container">
        <MapComponent />
      </div>
    </>
  );
}
