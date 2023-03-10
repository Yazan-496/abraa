import { serverSideTranslations } from "next-i18next/serverSideTranslations"
const locales = ["en", "ar"]
export const getI18nPaths = () =>
  locales.map((lng) => ({
    params: {
      locale: lng
    }
  }))

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export const getI18nProps = async (ctx, ns = ["common"]) => {
  const locale = ctx?.params?.locale
  let props = {
    ...(await serverSideTranslations(locale, ns))
  }
  return props
}

export const makeStaticProps =
  (ns = []) =>
  async (ctx) => ({
    props: await getI18nProps(ctx, ns)
  })
