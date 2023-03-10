import Footer from "../../../assets/components/footer"
import Header from "../../../assets/components/header"
import Main from "./main"
import Head from "next/head"

function Index() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/about-style.css?v=1.13"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/fax-style.css?b102"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/fax-responsive.css?b102"
        />
        <link
          rel="stylesheet"
          href="https://assets.abraacdn.com/assets/css/static-pages/about-animate.css?b102"
        />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Index
