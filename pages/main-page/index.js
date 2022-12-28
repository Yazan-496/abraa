import { useEffect } from "react"
import { useSelector } from "react-redux"
import dynamic from "next/dynamic"
const Footer = dynamic(() => import("../../assets/components/footer"), { ssr: false })
const Header = dynamic(() => import("../../assets/components/header"), { ssr: false })
const Main = dynamic(() => import("./main"), { ssr: false })
// import Header from "../../assets/components/header"
// import Footer from "../../assets/components/footer"
// import Man from "./main"
// import Footer from "../../assets/components/footer"
import { store } from "../../redux/storeConfig/store"
import { useRouter } from "next/router"
import { v1 as uuidv1 } from "uuid"
import Head from "next/head"

function IndexMain(props) {
  let user_id
  const guest = "guest_"
  const randomUser = guest + uuidv1().substring(0, 8)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (JSON.parse(window.localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.id !== undefined) {
        user_id = JSON.parse(window.localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.id
      } else if (
        window.localStorage.getItem("USER_RANDOM_ID") !== undefined &&
        window.localStorage.getItem("USER_RANDOM_ID") !== null
      ) {
        user_id = window.localStorage.getItem("USER_RANDOM_ID")
      } else {
        window.localStorage.setItem("USER_RANDOM_ID", randomUser)
        user_id = randomUser
      }
    }
    console.log(user_id, "user_id")
    window.dataLayer?.push({
      event: "login",
      userId: user_id
    })
  }, [])
  const router = useRouter()
  let userLocaleStorage
  const user = useSelector((store) => store?.Reducer?.username)
  const ref = useSelector((store) => store?.Reducer?.ref)
  useEffect(() => {
    if (typeof window !== undefined) {
      if (JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData !== null) {
        userLocaleStorage = JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.username
        store.dispatch({
          type: "NAME",
          action: userLocaleStorage
        })
      } else {
        //    router.push("/auth/login")
      }
    }
  }, [])

  // useEffect(() => {
  //   // console.log(ref) // console.log(user, "user")
  //   // console.log(userLocaleStorage, "userLocaleStorage")
  // }, [ref])
  return (
    <div>
      <Head>
        {/* <link
          rel="preload"
          href="https://s101.abraacdn.com/files/166503826062852.jpg?auto=format&fit=max&w=750"
          as="image"
        />
        <link rel="preload" href="https://s101.abraacdn.com/files/counter.jpg" as="image" />
        <link rel="preload" href="https://s101.abraacdn.com/files/banner2.jpg" as="image" />
        <link rel="preload" href="https://s101.abraacdn.com/files/banner3.jpg" as="image" />
        <link rel="preload" href="https://s101.abraacdn.com/files/banner.jpg" as="image" /> */}
      </Head>
      {/* <div>main</div> */}
      <Header username={userLocaleStorage} />
      <Main />
      <Footer />
    </div>
  )
}

export default IndexMain
