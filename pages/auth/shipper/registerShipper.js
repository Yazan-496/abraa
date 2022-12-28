import { useState, useEffect } from "react"
import "react-phone-number-input/style.css"
import { withRouter } from "next/router"
import "react-toastify/dist/ReactToastify.css"
import ButtonSpinner from "@/Component/Spinner/ButtonSpinner"
import PhoneInput from "react-phone-number-input"
// import { useTranslation } from "react-i18next"
import { useTranslation, useLanguageQuery } from "next-export-i18n"
import { Controller, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {
  SendPhoneNumber,
  check_existing_email,
  _getCountries,
  _register,
  _getCities
} from "../../../redux/actions"
import Link from "@/assets/LinkWithQuery"
import dynamic from "next/dynamic"
// import SlideButton from "react-slide-button"

const SlideButton = dynamic(() => import("react-slide-button"), { ssr: false })
// import ReactSlider from "react-slider";

import LanguageSwitchLink from "../../../components/LanguageSwitchLink"
import Head from "next/head"

const RegisterShipper = (props) => {
  const locales = ["en", "ar"]

  const [query] = useLanguageQuery()
  const { t } = useTranslation()
  const currentLocale = query?.lang || "en"
  const checkFunction = (email) => {
    check_existing_email(
      email,
      (existing) => {
        // console.log(existing, "number")
        setExisting(true)
      },
      (notexisting) => {
        setExisting(false)
      }
    )
  }
  const [existing, setExisting] = useState(false)
  const [city_id, setCityId] = useState(props.city_id ? props.city_id : null)
  const [roles, setRoles] = useState([props.role])
  const [Loading, setLoading] = useState(false)
  const [validatemessage, setValidatemessage] = useState(false)
  const [validate, setValidate] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [citiesArray, setCitiesArray] = useState(props.citiesArray ? props.citiesArray : [])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
    //     errors
  } = useForm({
    // use mode to specify the event that triggers each input field
    mode: "onBlur"
  })
  const registerOptions = {
    username: { required: `${t("auth.main.name_is_required")}` },
    mobile: {
      required: `${t("auth.main.mobile_is_required")}`,
      minLength: {
        message: `${t("auth.main.mobile_phone_must_have_at_least_6_characters")}`
      }
    },
    password: {
      required: `${t("auth.main.password_is_required")}`,
      minLength: {
        value: 6,
        message: `${t("auth.main.password_must_have_at_least_6_characters")}`
      }
    }
  }

  const onSubmit = (data) => {
    if (validate) {
      setLoading(true), props.setmobile(data?.mobile), props.switchToNext()
      // _register(
      //   {
      //     user_store: {
      //       company: data?.company,
      //       productYouLike: data?.productYouLike,
      //       name: data?.username,
      //       country_id: headOffice
      //     },
      //     email: email,
      //     password: data?.password,
      //     mobile_phone: data?.mobile,
      //     signup_country_id: headOffice,
      //     roles: roles,
      //     username: data?.username
      //   },
      //   (res) => {
      //     setLoading(false)
      //     props.switchToNext()
      //     props.setToken(res)
      //   },
      //   (err) => {
      //     setLoading(false)
      //   }
      // )
    } else {
      setValidatemessage(false)
    }
  }

  const dispatch = useDispatch()
  const [disable, setDisable] = useState(true)
  const [countriesArray, setCountries] = useState(props.countriesArray ? props.countriesArray : [])
  //   const [loading, setLoading] = useState(false)
  const [username, setUserName] = useState(props.username)
  const [company, setCompany] = useState("")
  const [productYouLike, setProductYouLike] = useState("")
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(props.password)
  const [mobile, setmobile] = useState(props.mobile)
  const [reset, setReset] = useState(1)
  const [signup_country_id, setSignup_country_id] = useState(
    props.router.query.signup_country_id ? props.router.query.signup_country_id : 1
  )

  const [selectedValue, setSelectedValue] = useState(props.selectedValue ? props.selectedValue : 1)
  const [designation, setDesignation] = useState("")
  const [headOffice, setHeadOffice] = useState("")
  const [landLine, setLandLine] = useState("")
  let sessionInfo
  useEffect(() => {
    // console.log(props, "props")
    if (typeof window !== undefined) {
      sessionInfo = JSON.parse(localStorage.getItem("GET_SEESION"))?.sessionInfo
    }

    // console.log(sessionInfo, "sessionInfo")
    username !== null || email !== null || password !== null || mobile !== null || signup_country_id !== null
      ? setDisable(true)
      : setDisable(false)
  })
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
  const getCitiesByCountry = (e) => {
    setHeadOffice(e.target.value)

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
  useEffect(() => {
    _getCities(
      (d) => {
        setCitiesArray(d)
      },
      (err) => {
        //    _toast(err.response.message)
      }
    )
  }, [headOffice])
  const setCity = (e) => {
    setCityId(e.target.value)
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/pages/slide-to-submit.css?V=1.1" />
        <link rel="stylesheet" href="https://www.abraa.com/assets/css/intlTelInput.css?b102" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.abraa.com/assets/css/pages/abraav2-register.css?v=3.1"
        ></link>
        <link data-react-helmet="true" rel="icon" href="https://s101.abraacdn.com/files/favicon-32x32.png" />
      </Head>
      <div style={{ backgroundColor: "#eff0f5", height: "600px" }}>
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
          <div
            style={{
              backgroundColor: "#f0f0f0"
            }}
            className="suplier_main__form"
            id="suplier_form"
          >
            <div className="supplier_extend_main" id="supplier_extend_main">
              <div className="main_extend">
                <div className="extend_ball_main">
                  <div
                    className="bullet"
                    //    onClick={() => router.push("/register/register")}
                  >
                    <span id="supplier-active1" className="active">
                      1
                    </span>
                  </div>
                  <div className="labeltext">
                    {t("auth.main.basic")}
                    <br />
                    {t("auth.main.information")}
                  </div>
                </div>
                <div className="center_line" />
                <div className="extend_ball_main">
                  <div className="bullet">
                    <span id="supplier-active2">2</span>
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
              <form
                dir={currentLocale === "ar" ? "rtl" : "ltr"}
                onSubmit={handleSubmit(onSubmit)}
                className="supplier_express_form custom-form"
                id="supplier_extended_form"
                noValidate="novalidate"
              >
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                    htmlFor="username"
                  >
                    {t("auth.main.full_name")}
                  </label>
                  <Controller
                    control={control}
                    type="text"
                    className="form-control txtOnlyabraa"
                    name="username"
                    id="username"
                    value={username}
                    defaultValue={username}
                    rules={registerOptions.username}
                    render={({ field }) => <input {...field} label="Text field" />}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">{errors?.username && errors.username.message}</small>
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                  >
                    Designation
                  </label>
                  <select
                    id="designation"
                    name="designation"
                    className="form-control"
                    data-error="#phone_count"
                    value={designation}
                    defaultValue={designation}
                    onChange={(e) => getCitiesByCountry(e)}
                  >
                    <option value={0}>Select Designation</option>
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
                    htmlFor="username"
                  >
                    {t("auth.main.company")}
                  </label>
                  <Controller
                    control={control}
                    type="text"
                    className="form-control txtOnlyabraa"
                    name="company"
                    id="company"
                    value={company}
                    defaultValue={company}
                    // rules={registerOptions.company}
                    render={({ field }) => <input {...field} label="Text field" />}
                  />
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                  >
                    Head Office
                  </label>
                  <select
                    id="headOffice"
                    name="headOffice"
                    className="form-control"
                    data-error="#phone_count"
                    value={headOffice}
                    defaultValue={headOffice}
                    onChange={(e) => getCitiesByCountry(e)}
                  >
                    <option value={0}>
                      {props?.selectedValue ? props.selectedValue : t("auth.main.select_country")}
                    </option>
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
                    {t("auth.main.city")}
                  </label>
                  <select
                    disabled={citiesArray.length === 0}
                    //    isLoading={citiesArray.length === 0}
                    //    options={citiesArray}
                    name="extended_city"
                    className="form-control"
                    value={city_id}
                    defaultValue={city_id}
                    onChange={(e) => setCity(e)}
                    id="extended_city"
                    style={{ fontSize: "14px" }}
                  >
                    <option className="nice-select form-control" value={0}>
                      {props?.city ? props.city : t("auth.main.select_city")}
                    </option>
                    {citiesArray
                      ?.filter((one) => one.id === parseInt(headOffice))
                      .map((city) => (
                        <option key={city.id} value={city.id}>
                          {city?.translations[0].name}
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
                    {t("auth.main.mobile_number")}
                  </label>
                  <Controller
                    id="mobile"
                    name="mobile"
                    control={control}
                    type="tel"
                    rules={registerOptions.mobile}
                    value={mobile}
                    onChange={setmobile}
                    defaultValue={mobile}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        style={{ flex: 4 }}
                        aria-required="true"
                        className="form-control1"
                        placeholder={t("auth.main.enter_phone_number")}
                      />
                    )}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">{errors?.mobile && errors.mobile.message}</small>
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                  >
                    {t("auth.main.email")}
                  </label>
                  <Controller
                    control={control}
                    type="email"
                    value={email}
                    className="form-control"
                    name="email"
                    id="email"
                    // rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <input
                        {...field}
                        defaultValue={email}
                        onChange={(e) => {
                          setEmail(e.target.value), checkFunction(e.target.value)
                        }}
                        label="Text field"
                      />
                    )}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">
                    {email === "not" && `${t("auth.main.email_is_required")}`}
                  </small>
                  <small
                    dir={currentLocale === "ar" ? "ltr" : "ltr"}
                    style={{
                      marginLeft: "10px"
                    }}
                    className="text-danger ml-10"
                  >
                    {existing && `${t("auth.main.email_already_been_taken")}`}
                  </small>
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                    htmlFor="landLine"
                  >
                    Land Line
                  </label>
                  <Controller
                    control={control}
                    type="text"
                    className="form-control txtOnlyabraa"
                    name="landLine"
                    id="landLine"
                    value={landLine}
                    defaultValue={landLine}
                    render={({ field }) => <input {...field} label="Text field" />}
                  />
                </div>
                <div className="input-group">
                  <label
                    style={{
                      marginLeft: currentLocale === "ar" ? "10px" : ""
                    }}
                  >
                    {t("auth.main.password")}
                  </label>
                  <Controller
                    control={control}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    className="form-control"
                    name="password"
                    id="password"
                    value={password}
                    defaultValue={password}
                    rules={registerOptions.password}
                    render={({ field }) => <input {...field} label="Text field" />}
                  />
                </div>
                <div
                  dir={currentLocale === "ar" ? "ltr" : "ltr"}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "130px"
                  }}
                >
                  <small className="text-danger">{errors?.password && errors.password.message}</small>
                </div>

                {/* <div className="supplier_express_form"> */}
                <div id="slide-submitnextendbuy">
                  <SlideButton
                    mainText="Slide Right To Validate"
                    overlayText="Success  !"
                    onSlideDone={(e) => handleSlide(e)}
                    reset={reset}
                  />
                  <div
                    dir={currentLocale === "ar" ? "ltr" : "ltr"}
                    style={
                      {
                        // marginTop: "-20px",
                        // marginLeft: "130px"
                      }
                    }
                  >
                    <small className="text-danger">
                      {!validatemessage && submit && !validate && "Please slide to validate"}
                    </small>
                  </div>
                  {/* <button
                    onClick={() => {
                      setReset((counter) => counter + 1), console.log(validate, "done")
                    }}
                  >
                    Reset
                  </button> */}
                  {/* </div> */}
                </div>

                <div style={{ backgroundColor: "#eff0f5" }} className="supplier_express_form custom-form">
                  <div style={{ backgroundColor: "#eff0f5", width: "100%" }} className="supplier_button_main">
                    <button
                      onClick={() => {
                        email === null && setEmail("not"), validate === false && setSubmit(true)
                      }}
                      type="submit"
                      className="btn"
                      disabled={disable === false}
                    >
                      {t("auth.actions.register_now")}
                      <ButtonSpinner loading={Loading} />
                    </button>
                  </div>
                </div>
              </form>
              <div style={{ backgroundColor: "#eff0f5", width: "100%" }} className="supplier_button_main">
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
        </div>
      </div>
    </>
  )
}
export default withRouter(RegisterShipper)
