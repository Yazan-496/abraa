import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__?.locale || "en"
    let GTM_ID = process.env.NEXT_PUBLIC_GTM

    return (
      <Html lang={currentLocale}>
        <Head>
          <link href="http://65.1.197.155:81" rel="preconnect" />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://s101.abraacdn.com" rel="preconnect" />
          <link href="https://www.googletagmanager.com" rel="preconnect" />
          <link href="https://assets.abraacdn.com" rel="preconnect" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="yandex-verification" content="54b19d7bce21816a" />
          <meta
            property="og:title"
            content="Wholesale Market For B2B Suppliers, Wholesalers in Dubai, UAE - Abraa"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.abraa.com/" />
          <meta property="og:image" content="https://www.abraa.com/assets/images/abraa-logo.svg" />
          <meta
            property="og:description"
            content="Wholesale Market For Suppliers, wholesalers, Manufacturers, Exporters, Importers, Buyers, Products, Trade Leads, Import Export at Abraa the Worldwide B2B Marketplace in Dubai, UAE"
          />
          <meta
            name="keywords"
            content="uae wholesale, wholesale market, b2b marketplace, suppliers, wholesalers, buyers, dubai wholesale, trade leads, import export"
          />
          <meta
            name="description"
            content="Wholesale Market For Suppliers, wholesalers, Manufacturers, Exporters, Importers, Buyers, Products, Trade Leads, Import Export at Abraa the Worldwide B2B Marketplace in Dubai, UAE"
          />
          <meta name="p:domain_verify" content="f91c7b9116bd420d91794b0aad634bb0" />
          <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/font-awesome.css" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://s101.abraacdn.com/files/favicon-32x32.png"
          />
          <Script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://s101.abraacdn.com/files/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://s101.abraacdn.com/files/favicon-16x16.png"
          />
          {/* icon */}

          {/* text/css */}

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css?b105"
          />

          {/* <link rel="stylesheet" type="text/css" href="https://assets.abraacdn.com/assets/css/select2.css" /> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/styles.css?b204"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/js/libraries/owl-carousel/owl.carousel.min.css?b204"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/nice.select.css?b204"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/bootstrap.min.css?b204"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/plugins.css?v=1.4"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/css/pages/common.css?v=6.204"
          />
          <link href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css?b208" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/js/libraries/multiselect/bootstrap-multiselect.css?b208"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.abraacdn.com/assets/selectstyle.css?b206"
          />

          {/* text/css */}

          {/* stylesheet */}
          <link
            rel="stylesheet"
            href="https://assets.abraacdn.com/assets/css/new-design/en/custom-css.css?b211"
          />

          <link
            rel="stylesheet"
            href="https://assets.abraacdn.com/assets/css/new-design/en/common.css?b208"
          />
          <link rel="stylesheet" href="https://assets.abraacdn.com/assets/css/new-design/en/home.css?b213" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
