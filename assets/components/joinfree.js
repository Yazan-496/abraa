import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "@/assets/LinkWithQuery"
export default function JoinFree() {
  const router = useRouter()
  useEffect(() => {}, [])
  return (
    <Link href="/auth">
      <a style={{ color: "red" }} className="icon-text icon-red">
        Join Free
      </a>
    </Link>
  )
}
