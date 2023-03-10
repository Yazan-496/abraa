import { useState, useEffect } from "react";
import { store } from "../../../redux/storeConfig/store"
import Navbar1 from "../navbar1"
import Footer from "../footer"
import SideBar1 from "../sidebar1"
import KycList from "./dataTable_KYC"
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import Head from "next/head"

const KYCList = () => {
  const router = useRouter()
  let userLocaleStorage
  const user = useSelector((store) => store?.Reducer?.username)
  const ref = useSelector((store) => store?.Reducer?.ref)
  const [openSide, setOpenSide] = useState(true)
  useEffect(() => {
    if (typeof window !== undefined) {
      if (JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.username !== undefined) {
        userLocaleStorage = JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data?.username
        store.dispatch({
          type: "NAME",
          action: userLocaleStorage
        })
      } else {
        router.push("/auth/login")
      }
    }
  }, [])

  useEffect(() => {}, [ref])
  return (
    <>
      <Head></Head>
      <div className={openSide === true ? "perfect-scrollbar-on nav-open " : "perfect-scrollbar-on"}>
        <div className={openSide === true ? "   " : "sidebar1-mini"}>
          <div
            className={
              openSide === true
                ? "sidebar-wrapper"
                : "sidebar-wrapper ps-container ps-theme-default ps-active-x ps-active-y"
            }
          >
            <SideBar1 user={user} />
            <div className={openSide === true ? "main-panel" : "main-panel"}>
              {/* {console.log(openSide, "openside2")} */}
              <Navbar1 username={user} openSide={openSide} setOpenSideProps={() => setOpenSide(!openSide)} />

              <KycList />
              <div id="footer">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KYCList
