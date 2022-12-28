import languageDetector from "next-language-detector"

// const handleChangeLocale = () => {}
// const currentLocale = router?.locale
const locales = ["en", "ar"]
export default languageDetector({
  fallbackLng: "en",
  supportedLngs: locales
})
