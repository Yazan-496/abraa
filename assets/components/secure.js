import { useRouter } from "next/router"
import Link from "@/assets/LinkWithQuery"

export default function Secure() {
  const router = useRouter()
  return (
    <ul className="pl-0 mb-0 menu_list_hover d-flex" style={{ display: "contents" }}>
      <li className="d-inline-block mb-md-3 mb-lg-0 px-xl-4 py-xl-2 px-lg-3 py-lg-1">
        {" "}
        <Link href="/services/secure-payment">
          <a className="d-inline-block open_sans bold_600 text-dark position-relative">Secure Transactions</a>
        </Link>
      </li>
      <li className="d-inline-block mb-md-3 mb-lg-0 px-xl-4 py-xl-2 px-lg-3 py-lg-1">
        <Link href="/services/rfqs">
          <a className="d-inline-block open_sans bold_600 text-dark position-relative">Visit RFQ List</a>
        </Link>
      </li>
      <li className="d-inline-block mb-md-3 mb-lg-0 px-xl-4 py-xl-2 px-lg-3 py-lg-1 position-relative">
        <Link href="/services/plans">
          <a className="d-inline-block open_sans bold_600 text-dark position-relative">Premium Membership</a>
        </Link>
        <span className="hot_label text-white position-absolute">Hot</span>
      </li>
    </ul>
  )
}
