import { useRouter } from "next/router"

//
import { useTranslation, LanguageSwitcher } from "next-export-i18n"

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()
  const handleChangeLocale = (newLocale) => {
    // const { pathname, asPath, query } = router
    console.log(newLocale)
    // router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  const currentLocale = router?.locale
  const { t } = useTranslation()

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  return (
    // <Link
    //   href={href}
    //   locale={currentLocale === "en" ? "ar" : "en"}
    //   // onClick={() => languageDetector.cache(locale)}
    // >
    //   <a onClick={() => handleChangeLocale(changeTo)}>{t("auth.nav.language")}</a>
    // </Link>
    <LanguageSwitcher lang={locale}>{t("auth.nav.language")}</LanguageSwitcher>
  )
}

export default LanguageSwitchLink
