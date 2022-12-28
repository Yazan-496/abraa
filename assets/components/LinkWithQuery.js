import Link from "next/link"
import { useRouter } from "next/router"
import { useLanguageQuery } from "next-export-i18n"

export default function LinkWithQuery({ href, locale, children, queryProps }) {
  const router = useRouter()
  const [query] = useLanguageQuery()
  const lange = router?.query?.lang || null
  const propsQuery = queryProps || null

  return lange !== null && propsQuery !== null ? (
    <Link
      legacyBehavior
      href={{
        pathname: href,
        query: {
          queryProps,
          lang: lange
        }
      }}
    >
      {children}
    </Link>
  ) : lange !== null && propsQuery === null ? (
    <Link
      legacyBehavior
      href={{
        pathname: href,
        query: {
          lang: lange
        }
      }}
    >
      {children}
    </Link>
  ) : lange === null && propsQuery !== null ? (
    <Link legacyBehavior href={{ pathname: href, query: { propsQuery } }}>
      {children}
    </Link>
  ) : (
    <Link legacyBehavior href={{ pathname: href }}>
      {children}
    </Link>
  )
}
