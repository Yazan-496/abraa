import React from "react"
import Image from "@/assets/imageNext"
import Link from "@/assets/LinkWithQuery"
import CarouselNum2 from "../carousel/carouselNum2"
export default function Section2() {
  return (
    <section
      // id={isVisible ? "heightonscroll" : "hideonscroll"}
      className="white-box mt-3 container browse_category_top position-relative"
    >
      <div className="category_flag_sec">
        <div className="double-sec-heading">
          <h2 className="sec-heading d-flex align-items-center pt-3 pt-md-0">
            <Image
              width={22}
              height={20}
              src="https://s101.abraacdn.com/files/layout-grid-fill-svg.png"
              alt=""
              //    className="img-fluid pr-2 position-relative bg-white"
            />
            <span
              style={{
                marginLeft: 4
              }}
            >
              Browse By Categories
            </span>
          </h2>
          <Link href="">
            <a className="btn-white" title="See all categories">
              See all categories <i className="ri-arrow-right-s-line" />
            </a>
          </Link>
        </div>
        <div className="categories_sub_div mt-2 mt-md-3 mt-lg-4">
          <CarouselNum2 />
        </div>
      </div>
    </section>
  )
}
