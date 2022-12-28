import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "@/assets/LinkWithQuery"

export default function GoToSignIn() {
  useEffect(() => {})
  const router = useRouter()
  return (
    <Link href="/auth/login">
      <a className="text-dark d-inline-block icon-text pb-1">Sign In</a>
    </Link>
  )
}
