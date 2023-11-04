
import Loader from '@/components/Loader';
import dynamic from 'next/dynamic';
import Head from "next/head";

const MapComponent = dynamic(() => import("@/components/mapbox/Mapcomponent"), {
  ssr: false,
   loading:()=> <Loader/>,
});



export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome Homes - Your Gateway to Dream Getaways</title>
        <meta
          name="description"
          content="Discover a curated selection of exceptional homes with Welcome Homes . Book your perfect stay and create lasting memories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Welcome Homes" /> {/* Add the author's name */}
        <meta name="name" content="Welcome Homes" /> {/* Add the web name */}
        <meta name="robots" content="index, follow" />{" "}
        {/* Direct Google bot to index the page */}
        <meta name="googlebot" content="index, follow" /> {/* For Google bot */}
        <meta
          property="og:title"
          content="Welcome Homes - Your Gateway to Dream Getaways"
        />
        <meta
          property="og:description"
          content="Discover a curated selection of exceptional homes with Welcome Homes - Kaya. Book your perfect stay and create lasting memories."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/asikur/image/upload/v1697922761/Screenshot_510_zagdim.png"
        />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <MapComponent />
      </div>
      
    </>
  );
}
