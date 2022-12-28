import React from "react"
import Image from "@/assets/imageNext"
import Link from "@/assets/LinkWithQuery"
import { useRouter } from "next/router"

export default function SuccessAddProduct(props) {
  const router = useRouter()
  return (
    <div className="content" id="content">
      <div data-reactroot style={{}}>
        <div>
          <div className="row">
            <div className="col-md-6  col-md-offset-3 text-center">
              <div className="page-complete">
                <Image
                  src="https://assets.abraacdn.com/assets/react-assets/img/successfully-boost.svg"
                  alt="successfully boost icon"
                  className="img-responsive"
                />
                <h3>Congratulations!</h3>
                <p>Your product was added successfully and waiting for approval!</p>
                <button onClick={() => props.setSuccessAdd(false)} className="btn btn-success btn-fill">
                  Edit Product
                </button>
                <button onClick={() => router.reload()} className="btn btn-primary btn-fill">
                  Add Another Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
