import { useState, useEffect } from "react"
import Head from "next/head"
// import Link from "next/link"
import Link from "@/assets/LinkWithQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import LanguageSwitchLink from "../../../components/LanguageSwitchLink"

import { useRouter } from "next/router"

import { useTranslation, useLanguageQuery } from "next-export-i18n"

const locales = ["en", "ar"]
const Index1 = (props) => {
  const router = useRouter()
  const [query] = useLanguageQuery()
  const { t } = useTranslation()
  const currentLocale = query?.lang || "en"
  // const onToggleLanguageClick = (newLocale) => {
  //   const { pathname, asPath, query } = router
  //   router.push({ pathname, query }, asPath, { locale: newLocale })
  // }
  useEffect(() => {
    // console.log(query, "roter")
  }, [])

  const changeTo = router.locale === "en" ? "ar" : "en"
  const [role, setRole] = useState(null)
  const [select, setSelect] = useState("")
  const setRoleFun = (e) => {
    props.setRole(e)
    // console.log(role, "role")
  }
  //   useEffect(() => {
  //     let dir = router.locale == "ar" ? "rtl" : "ltr"
  //     document.querySelector("html").setAttribute("dir", dir)
  //   }, [router.locale])
  return (
    <>
      <Head>
        <title>Wholesale Market For B2B Suppliers, Wholesalers in Dubai, UAE - Abraa</title>
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/pages/slide-to-submit.css?V=1.1" />
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/intlTelInput.css?b102" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.abraa.com/assets/css/pages/abraav2-register.css?v=3.1"
        ></link>
        <link data-react-helmet="true" rel="icon" href="https://s101.abraacdn.com/files/favicon-32x32.png" />
      </Head>
      <div style={{ backgroundColor: "#eff0f5", height: "100vh !important" }}>
        <div className="right_area_slider">
          <div className="top_nav_main">
            <div
              style={{
                float: "left"
              }}
              className="top_nav left"
            >
              {" "}
              <Link href="/" locale={currentLocale}>
                <a>
                  <img
                    className="regLogo"
                    src="https://assets.abraacdn.com/assets/images/abraa-logo.svg"
                    alt="Abraa"
                    title="Abraa"
                  />
                </a>
              </Link>
            </div>
            <div
              style={{
                float: "left"
              }}
              className="top_nav left"
              dir="ltr"
            >
              <a>{t("About")}</a>
              <a>{t("auth.nav.request_a_quote")}</a>
              {/* <a onClick={() => onToggleLanguageClick(changeTo)}></a> */}
              {locales?.map((locale) => {
                if (locale === currentLocale) return null
                return <LanguageSwitchLink locale={locale} key={locale} />
              })}
            </div>
            <div
              style={{
                float: "right"
              }}
              className="top_nav right"
            >
              <a>{t("auth.nav.already_have_an_account")}</a>
              <Link href="/auth/login" locale={currentLocale}>
                <a className="btn">{t("auth.nav.sign_in")}</a>
              </Link>
            </div>
          </div>
          <div
            className="main_login_option"
            id="main_login_option"
            style={{ display: "block", height: "100vh" }}
          >
            <div className="top_text">
              <div className="first">{t("auth.main.select_your_business")}</div>
              <div className="second">{t("auth.main.register_as")}</div>
            </div>
            <div className="middle_option_select">
              <input
                type="radio"
                style={{
                  display: "none"
                }}
                className="option_input"
                id="select_1"
                onClick={() => setRoleFun(1)}
                name="optionselect"
              />
              <label onClick={() => setSelect(1)} className="option_select" htmlFor="select_1" id="select_1s">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="fa fa-check-circle"
                    style={{
                      display: select === 1 ? "block" : "none",
                      color: "white"
                    }}
                    aria-hidden="true"
                  />
                </span>
                <div className="supplier" />
                <span className="text">{t("auth.main.supplier")}</span>
              </label>
              <input
                type="radio"
                className="option_input"
                id="select_2"
                style={{
                  display: "none"
                }}
                onClick={() => setRoleFun(2)}
                name="optionselect"
              />
              <label onClick={() => setSelect(2)} className="option_select" htmlFor="select_2" id="select_2s">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="fa fa-check-circle"
                    style={{
                      display: select === 2 ? "block" : "none",
                      color: "white"
                    }}
                    aria-hidden="true"
                  />
                </span>
                <div className="buyer"></div>
                <span className="text">{t("auth.main.buyer")}</span>
              </label>
              <input
                type="radio"
                style={{
                  display: "none"
                }}
                className="option_input"
                id="select_3"
                onClick={() => setRoleFun(3)}
                name="optionselect"
              />
              <label onClick={() => setSelect(3)} className="option_select" htmlFor="select_3" id="select_3s">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="fa fa-check-circle"
                    style={{
                      display: select === 3 ? "block" : "none",
                      color: "white"
                    }}
                    aria-hidden="true"
                  />
                </span>
                <div className="shipper" />
                <span className="text">{t("auth.main.shipper")}</span>
              </label>
            </div>
            <div className="second" />
            <div className="bottom_button">
              <button
                id="type_reg_submit"
                disabled={select === 0}
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  marginBottom: 0,
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  backgroundColor: "#1180b0"
                }}
                className="btn button_submit"
                onClick={() => {
                  props.switchToPass(), props.setRole(role)
                }}
              >
                {t("auth.actions.continue")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index1
