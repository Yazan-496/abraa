import { useState } from "react"
import { useRouter } from "next/router"
import Link from "@/assets/LinkWithQuery"
import Image from "@/assets/imageNext"

export default function Logo() {
  const [loaded, setLoaded] = useState(true)
  const router = useRouter()

  return (
    <Link href="/">
      <a className="d-inline-block" title="Abraa.com">
        {/*  */}
        <div
          style={{
            width: "150px",
            height: "50px",
            marginTop: "7px",
            display: "contents"
          }}
        >
          <Image
            unoptimized={true}
            src="https://s101.abraacdn.com/files/abraa-logos.png"
            alt="I'm an image!"
            width="160"
            height="55"
          />
        </div>
        {/*  */}
      </a>
    </Link>
  )
}
