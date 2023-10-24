import Layout from "@/components/layout/Layout";
import "../styles/globals.css";
import Topbar from "@/components/layout/Topbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { ContextProvider } from "@/components/context/ContextProvider";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect } from "react";
import { loadUser } from "@/redux/actions/userActions";
export default function App({ Component, pageProps }) {

   useEffect(() => {
     
     store.dispatch(loadUser());
   }, [store.dispatch]);
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
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <ContextProvider>
          {/* <Topbar /> */}
          <Layout>
            <Component {...pageProps} />
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
          </Layout>
        </ContextProvider>
      </Provider>

      {/* Same as */}
    </>
  );
}
