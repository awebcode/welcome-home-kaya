import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect, useState } from "react";
import { getUsers, loadUser } from "@/redux/actions/userActions";
import ContextProvider from "@/context/ContextProvider";
import { getProjects } from "@/redux/actions/projectsActions";
//mapbox
import "mapbox-gl/dist/mapbox-gl.css";
//react image gallery
import "react-image-gallery/styles/css/image-gallery.css";
const Layout = dynamic(() => import("@/components/layout/Layout"), {
  ssr: false,
});
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import DashboardSidebar from "@/components/admin/dashboard/DashLayout";
import { getProducts } from "@/redux/actions/productActions";
import dynamic from "next/dynamic";

export default function App({ Component, pageProps }) {
 const router = useRouter();
 const [loading, setLoading] = useState(false);
const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setLoading(false);
      setTimeout(() => {
        setShowFooter(true);
      }, 3000); // Adjust the delay time as needed (in milliseconds)
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  //redux load user and projects
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getProjects());
    store.dispatch(getUsers());
    store.dispatch(getProducts());
  }, [store.dispatch]);
  //for dashboard layout
 const isDashboardRoute =
   router.pathname.includes("/admin")||
   router.pathname.includes("/dashboard");
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          
        />
      </Head>
      <Provider store={store}>
        <ContextProvider>
          {/* <Topbar /> */}
          {isDashboardRoute ? (
            loading ? (
              <Loader />
            ) : (
              <Component {...pageProps} />
            )
          ) : (
            <Layout>
              {/* <DashboardSidebar> */}
              {loading ? <Loader /> : <Component {...pageProps} />}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
              {/* </DashboardSidebar> */}
            </Layout>
          )}

          {showFooter && !isDashboardRoute && <Footer />}
        </ContextProvider>
      </Provider>
      {/* Same as */}
    </>
  );
}
