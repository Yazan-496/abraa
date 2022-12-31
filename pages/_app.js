import "remixicon/fonts/remixicon.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = true
import ErrorBoundary from "./errorHandling"

import "../styles/css.css"
import "../styles/all.css"
import "../styles/core.css"
import "../styles/cssNewDashboard/style.css"
import "../styles/cssNewDashboard/bootstrap.min.css"

import TagManager from "react-gtm-module"
import Head from "next/head"

/* New i18n -----> Start */
// import { createRoot } from "react-dom/client"
import "../i18n"
/* New i18n -----> End */

import { Provider } from "react-redux"
import { store } from "../redux/storeConfig/store"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client"
import { useTranslation, useLanguageQuery } from "next-export-i18n"

/* New Loading -----> Start */
function Loading() {
  const router = useRouter()
  const [query] = useLanguageQuery()
  const { t } = useTranslation()
  const currentLocale = router?.query?.lang ? router?.query?.lang : null
  const changeLocale =
    router?.query?.lang === "en" ||
    router?.query?.lang === "ar" ||
    query?.lang === "en" ||
    query?.lang === "ar"
      ? true
      : false
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      const newUrl = changeLocale ? url?.length > 0 && url.slice(0, -8) : url
      const asPath = router.asPath.slice(0, -8)
      if (newUrl !== asPath || newUrl !== router.asPath) {
        setLoading(true)
      }
    }
    const handleComplete = (url) => {
      const newUrl = changeLocale ? url?.length > 0 && url.slice(0, -8) : url
      const asPath = router.asPath.slice(0, -8)
      if (newUrl === asPath || newUrl === router.asPath) {
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }
    }
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  })

  return (
    loading && (
      <div className="spinner14-wrapper">
        <div className="spinner14"></div>
      </div>
    )
  )
}

/* New Loading -----> Start */
// export function reportWebVitals(metric) {
//   console.log(metric)
// }
function MyApp({ Component, pageProps }) {
  /* New i18n -----> Start */

  // const root = createRoot(document.getElementById("__next"))

  /* New i18n -----> End */

  //<------------------------------------------------------------------>//
  // const typeDefs = gql``
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_GRAPHQL_BACKEND_URL}`,
    cache: new InMemoryCache()
    // typeDefs
  })
  //<------------------------------------------------------------------>//
  // ----> Start ----> Initialization Google Analytics into Google Tag Manager
  const gtmId = process.env.NEXT_PUBLIC_NEXT_PUBLIC_GTM || ""
  // const tagManagerArgs = (TagManagerArgs = {
  //   gtmId
  // })
  const [text, setText] = useState(false)
  useEffect(() => {
    TagManager.initialize({ gtmId })
  }, [])

  // ----> End ---> Of  Initialization
  let userLocaleStorage
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      //  gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    router.events.on("hashChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("hashChangeComplete", handleRouteChange)
    }
  }, [router.events])
  const { defaultLocale, locale } = router
  const currentLocale = router?.locale || "en"

  useEffect(() => {
    const dir = currentLocale === "ar" ? "rtl" : "ltr"
    document.querySelector("html").setAttribute("dir", dir)
  }, [locale])
  //   const user = JSON.parse(localStorage.getItem("USER_TOKEN1"))?.userData
  return (
    <Provider store={store}>
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WQ6QV3L');
      `}
      </Script> */}
      <ApolloProvider client={client}>
        <Head>
          <title>Wholesale Market For B2B Suppliers, Wholesalers in Dubai, UAE - Abraa</title>
        </Head>
        <Loading />
        <ErrorBoundary>
        <Component {...pageProps} />
        </ErrorBoundary>
      </ApolloProvider>

      <ToastContainer
        toastStyle={{
          marginTop: "4rem",
          color: "black",
          borderRadius: "6px"
          // backgroundColor: "white"
          //    borderTopColor: "red"
        }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  )
}

export default MyApp

{
  /* <Script
       strategy="afterInteractive"
       src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM}`}
       />
       <Script
       id="gtag-init"
       strategy="afterInteractive"
       dangerouslySetInnerHTML={ { __html : `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GTM}', {
         page_path: window.location.pathname,
       });` } }
       />  */
}
