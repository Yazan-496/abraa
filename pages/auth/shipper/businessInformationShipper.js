import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { withRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import { useTranslation, useLanguageQuery } from "next-export-i18n"
// import "react-toastify/dist/ReactToastify.css"
import ButtonSpinner from "@/Component/Spinner/ButtonSpinner"
import { toast } from "react-toastify"
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import "antd/dist/antd.css"
import { Radio } from "antd"
import { _register, _getCities, _getCountries } from "../../../redux/actions"
import Loading from "../loading"
import dynamic from "next/dynamic"
import { User, Mail, CheckSquare, MessageSquare, Power } from "react-feather"
const SlideButton = dynamic(() => import("react-slide-button"), { ssr: false })
import UploadFile from "../../../components/uploadFile/uploadFile"

import LanguageSwitchLink from "../../../components/LanguageSwitchLink"

import Link from "@/assets/LinkWithQuery"

function BusinessInformation(props) {
  const router = useRouter()

  const [query] = useLanguageQuery()
  const { t } = useTranslation()
  const currentLocale = query?.lang || "en"

  /***********************props */
  const notify = (err) => {
    toast.error(err)
  }
  const [username, setUserName] = useState(props.router.query.username)
  // const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(props.router.query.email)
  const [citiesArray, setCitiesArray] = useState(props.citiesArray ? props.citiesArray : [])
  const [countriesArray, setCountries] = useState(props.countriesArray ? props.countriesArray : [])
  const [password, setPassword] = useState(props.router.query.password)
  const [mobile_phone, setmobile] = useState(props.router.query.mobile)
  const [roles, setRoles] = useState([props.role])
  const [signup_country_id, setSignup_country_id] = useState(props.router.query.signup_country_id ? props.router.query.signup_country_id : 1)

  const [tags, setTags] = useState(props.keywords ? props.keywords : [])
  const [select, setSelect] = useState(false)
  const [disable, setDisable] = useState(true)
  const dispatch = useDispatch()
  const plainOptions = ["USD", "AED"]
  const [value1, setValue1] = useState("USD")
  const onChange1 = ({ target: { value } }) => {
    setValue1(value)
  }
  const [preffered_currency_id, setCurrency] = useState(props.preffered_currency_id ? props.preffered_currency_id : "1")

  const [selectedValue, setSelectedValue] = useState(props.selectedValue ? props.selectedValue : 1)
  const [keywords, setKeywords] = useState(props.keywords ? props.keywords : null)
  const [company, setCompany] = useState(props.company ? props.company : null)
  const [city_id, setCityId] = useState(props.city_id ? props.city_id : null)
  const [Loading, setLoading] = useState(false)
  const [reset, setReset] = useState(0)
  const [validatemessage, setValidatemessage] = useState(false)
  const [validate, setValidate] = useState(false)
  const [submit, setSubmit] = useState(false)
  useEffect(() => {
    _getCities(
      (d) => {
        setCitiesArray(d)
      },
      (err) => {
        //    _toast(err.response.message)
      }
    )
  }, [selectedValue])
  useEffect(() => {
    _getCountries(
      (d) => {
        setCountries(d)
      },
      (err) => {
        // _toast(err.response.message)
      }
    )
  }, [])
  const setCity = (e) => {
    setCityId(e.target.value)
  }
  const getCitiesByCountry = (e) => {
    setSelectedValue(e.target.value)

    _getCities(
      (d) => {
        setCitiesArray(d)
      },
      (err) => {
        // _toast(err.response.message)
      }
    )
  }
  const handleSlide = (e) => {
    // if (e === undefined) {
    setValidate(true)
    // }
  }
  const addTag = (e) => {
    if (e.key === "Enter" || e.key === "Tab" || e.key === "Comma") {
      if (e.target.value.length > 0) {
        if (tags.filter((tag) => tag === e.target.value).length === 0) {
          setTags([...tags, e.target.value])
          e.target.value = ""
        }
      }
    }
  }
  const locales = ["en", "ar"]
  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag)
    setTags(newTags)
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/pages/slide-to-submit.css?V=1.1" />
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/intlTelInput.css?b102" />
        <link rel="stylesheet" type="text/css" href="https://www.abraa.com/assets/css/pages/abraav2-register.css?v=3.1"></link>
        <link data-react-helmet="true" rel="icon" href="https://s101.abraacdn.com/files/favicon-32x32.png" />
      </Head>
      <div
        style={{
          backgroundColor: "#eff0f5"
        }}
        className="right_area_slider"
      >
        <div className="top_nav_main">
          <div
            style={{
              float: "left"
            }}
            className="top_nav left"
          >
            <Link href="/" locale={currentLocale}>
              <a>
                <img className="regLogo" src="https://assets.abraacdn.com/assets/images/abraa-logo.svg" alt="Abraa" title="Abraa" />
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
            <a>{t("auth.nav.about")}</a>
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
        <div className="suplier_main__form" id="suplier_form">
          <div className="supplier_extend_main" id="supplier_extend_main">
            <div className="main_extend">
              <div className="extend_ball_main">
                <div
                  onClick={() => {
                    props.switchToPrev({
                      data: {
                        citiesArray: citiesArray,
                        countriesArray: countriesArray,
                        company: company,
                        city_id: citiesArray.filter((city, key) => key === parseInt(city_id)),
                        preffered_currency_id: preffered_currency_id,
                        keywords: tags,
                        selectedValue: selectedValue
                      }
                    })
                  }}
                  className="bullet"
                  //  onClick={() => router.push("/auth/register/register")}
                >
                  <span id="supplier-active1">1</span>
                </div>
                <div className="labeltext">
                  {t("auth.main.basic")}
                  <br />
                  {t("auth.main.information")}
                </div>
              </div>
              <div className="center_line" />
              <div className="extend_ball_main">
                <div
                  className="bullet"
                  //  onClick={() =>
                  // //    router.push("/auth/register/businessInformation")
                  //  }
                >
                  <span id="supplier-active2" className="active">
                    2
                  </span>
                </div>
                <div className="labeltext">
                  {t("auth.main.business")}
                  <br />
                  {t("auth.main.information")}
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: currentLocale === "en" ? "left" : "right"
              }}
              className="top_text"
            >
              <div className="big">{t("auth.main.get_started_absoluetely_free")}</div>
              <div className="small">{t("auth.main.no_credit_card_needed")}</div>
            </div>
            <div
              style={{
                textAlignLast: "left"
              }}
            >
              <label>Shipping Information</label>
            </div>
            <div
              dir={currentLocale === "ar" ? "rtl" : "ltr"}
              method="POST"
              //   action="https://staging.abraa.com/register-new/final-supplier"
              className="supplier_express_form"
              id="supplier_extended_form2"
              style={{}}
              noValidate="novalidate"
            >
              <input type="hidden" name="user_selected" id="user_selected" defaultValue={55440} />

              <div className="input-group">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  Company Website
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="extended_company"
                  id="extended_company"
                  value={company}
                  defaultValue={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{ fontSize: "14px" }}
                />
              </div>

              <div className="input-group">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  We Can Ship From
                </label>
                <select
                  id="extended_country"
                  name="extended_country"
                  className="form-control"
                  data-error="#phone_count"
                  value={selectedValue}
                  defaultValue={selectedValue}
                  onChange={(e) => getCitiesByCountry(e)}
                >
                  <option value={0}>{props?.selectedValue ? props.selectedValue : t("auth.main.select_country")}</option>
                  {countriesArray.map((one, index) => (
                    <option key={one?.id} value={one?.id}>
                      {one.translations[0]?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  We Can Ship To
                </label>
                <select
                  id="extended_country"
                  name="extended_country"
                  className="form-control"
                  data-error="#phone_count"
                  value={selectedValue}
                  defaultValue={selectedValue}
                  onChange={(e) => getCitiesByCountry(e)}
                >
                  <option value={0}>{props?.selectedValue ? props.selectedValue : t("auth.main.select_country")}</option>
                  {countriesArray.map((one, index) => (
                    <option key={one?.id} value={one?.id}>
                      {one.translations[0]?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  Shipping Methods
                </label>
                <CheckSquare size={20} className="" />
                <label style={{ marginTop: "8px" }} htmlFor="show-hide-psw">
                  By Sea
                </label>
              </div>
              <div className="input-group curr">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  Clearance Services
                </label>
                <Radio
                  value={preffered_currency_id}
                  defaultValue={preffered_currency_id}
                  onClick={(e) => setCurrency(e.target.value)}
                  checked={preffered_currency_id === "1"}
                >
                  Yes
                </Radio>
                <Radio value="2" onClick={(e) => setCurrency(e.target.value)} checked={preffered_currency_id === "2"}>
                  No
                </Radio>
              </div>
              <div className="input-group curr">
                <label
                  style={{
                    marginLeft: currentLocale === "ar" ? "10px" : ""
                  }}
                >
                  Door To Door Services
                </label>
                <Radio
                  value={preffered_currency_id}
                  defaultValue={preffered_currency_id}
                  onClick={(e) => setCurrency(e.target.value)}
                  checked={preffered_currency_id === "1"}
                >
                  Yes
                </Radio>
                <Radio value="2" onClick={(e) => setCurrency(e.target.value)} checked={preffered_currency_id === "2"}>
                  No
                </Radio>
              </div>
              <UploadFile />

              <div id="slide-submitnextendbuy">
                <SlideButton mainText="Slide Right To Validate" overlayText="Success  !" onSlideDone={(e) => handleSlide(e)} reset={reset} />
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={
                    {
                      // marginTop: "-20px",
                      // marginLeft: "130px"
                    }
                  }
                >
                  <small className="text-danger">{!validatemessage && submit && !validate && "Please slide to validate"}</small>
                </div>
              </div>
              <div className="supplier_express_form custom-form">
                <div className="supplier_button_main">
                  <button
                    onClick={() => {
                      setLoading(true)
                      _register(
                        {
                          user_store: {
                            company,
                            name: props.username,
                            city_id: 1,
                            preffered_currency_id,
                            country_id: signup_country_id,
                            keywords: tags.map((str, id) => ({
                              name: str
                              // id: id + 1
                            }))
                          },
                          email: props.email,
                          password: props.password,
                          mobile_phone: props.mobile,
                          signup_country_id,
                          roles: roles,
                          username: props.username
                        },
                        (res) => {
                          setLoading(false)
                          props.switchToNext()
                          props.setToken(res)
                        },
                        (err) => {
                          //     notify(`${err?.data?.message}`)
                          //     toast(`${err.data.message}`)
                          //     _toast(`${err?.data?.message}`, "error")
                          notify(err)
                          setLoading(false)
                        }
                      )
                    }}
                    className="btn"
                    disabled={disable === false}
                  >
                    {t("auth.actions.register_now")}
                    <ButtonSpinner loading={Loading} />
                  </button>
                </div>
              </div>
            </div>
            <div className="last_text">
              <span className="m-1">
                {t("auth.main.by_clicking_continue_i_agree_to")}
                {t("auth.main.abraa")}
              </span>
              <span className="m-1">
                <a>{t("auth.main.terms_of_service")}</a>{" "}
              </span>
              <span className="m-1">{t("auth.main.and")} </span>
              <span className="m-1">
                <a>{t("auth.main.privacy_policy")}</a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(BusinessInformation)
