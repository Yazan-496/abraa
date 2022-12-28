import { useState, useEffect } from "react"
import Image from "@/assets/imageNext"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import Link from "@/assets/LinkWithQuery"

import { GET_PRODUCTS, GET_CATEGORIES } from "../../graphql/queries"
import { useQuery, useMutation } from "@apollo/client"
import CarouselNum1 from "./carousel/carouselNum1"
import Categories from "./categories"
import LazyLoad from "react-lazy-load"
import Section1 from "./Sections/section1"
import Section2 from "./Sections/section2"
import Section3 from "./Sections/section3"
import Section4 from "./Sections/section4"

function Main(props) {
  let categories = []
  const [HandleLoad, setHandleLoad] = useState(false)
  const { Loading, error, data } = useQuery(GET_CATEGORIES)
  if (Loading) {
  }
  if (error) {
    setHandleLoad(true)
  } else {
    categories = data
  }
  useEffect(() => {
    categories && setHandleLoad(true)
  }, [categories])
  const router = useRouter()
  const src =
    "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
  const [loading, setLoading] = useState(false)

  const [height, setHeight] = useState(0)

  const HandleLoadning = (load) => {
    setHandleLoad(true)
  }

  return HandleLoad ? (
    <main className="position-relative home_wrapper" style={{ paddingTop: 137 }}>
      <div style={{ marginTop: "10px" }}>
        <div></div>
        <section
          style={{
            height: "-webkit-fill-available !important"
          }}
          className="container topbanner_text topbanner_banner"
        >
          <div className="ads-section d-none mb-2 mr-auto ml-auto" style={{ width: "fit-content" }}>
            <Link href="">
              <a target="_blankCat" style={{ color: "#696969" }}>
                <p className="d-inline-block d-none mr-2" style={{ textDecoration: "underline" }}>
                  Shop Laptops Today! Apple, Microsoft, Lenevo, HP &amp; More.
                </p>
                <p className="d-none d-sm-inline-block float-right">Ad...</p>
              </a>
            </Link>
          </div>
          <div className="row">
            <Categories categories={categories} HandleLoadning={(HandleLoad) => HandleLoadning(HandleLoad)} />
            <div className="col-lg-6 col-md-8 col-xs-8 col-12 pr-0 main_slider_responsive">
              <div className="main_slider">
                <CarouselNum1 />
                <div className="pr-0 fast_sourcing_top browse_form_col_2 mt-0 mt-md-2 mt-lg-3">
                  <div className="white-box mx-auto">
                    <div className="category_flag_sec py-3 py-md-0">
                      <h3 className="sec-heading">
                        <span>Fast Sourcing of Products - in Wholesale </span>
                      </h3>
                      <div className="fast_sourcing_form mt-2 mt-md-2 mt-lg-4">
                        <div className="rfq-create-wrapper">
                          <form className="rfq-create-form" name="quoting-race" action="buy-request">
                            <div className="row mx-0 rfq-2-form-elements">
                              <div className="col-12 col-md-4 col-lg-5 pl-0 form_one form_one_1">
                                <label className="border_input border_input1 position-relative mb-0">
                                  <input
                                    name="buyrequest_name"
                                    id="buyrequest_name"
                                    placeholder="I'm looking for.."
                                    className="flex-2"
                                  />
                                </label>
                              </div>
                              <div className="col-4 col-md-2 col-lg-2 mt-1 mt-md-0 px-0 form_one mt-md-0 pr-1 pr-md-0">
                                <label className="border_input border_input1 position-relative mb-0">
                                  <input
                                    placeholder="Quantity"
                                    name="buyrequest_qty"
                                    id="buyrequest_qty"
                                    className="flex-1"
                                  />
                                </label>
                              </div>
                              <div className="col-4 col-md-3 col-lg-3 pl-3 pr-md-0 form_one mt-1 mt-md-0 padding-left-15">
                                <select
                                  className="plain-white-dropdown main_select"
                                  name="buyrequest_unt"
                                  id="buyrequest_unt"
                                ></select>
                              </div>
                              <div className="col-4 col-md-3 col-lg-2 pr-0 form_one form_one_on mt-1 mt-md-0 rfq-button-container">
                                <button className="flex-1 btn-blue">CREATE RFQ</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-xs-4 col-3 d-none d-md-flex topbanner_text_right_col pr-0 mt-3 mt-md-0">
              <div className="main_cat d-flex d-md-flex flex-column w-100">
                <div
                  className="home-side-banner home-side-banner1"
                  style={{
                    backgroundImage: `url("https://s101.abraacdn.com/files/banner.jpg")`
                  }}
                >
                  <div className="home-side-banner-details">
                    <div className="home-side-banner-title">Secure Payments</div>
                    <div className="home-side-banner-link">
                      <Link href="">
                        <a target="_blankCat" alt="<? __('Know More for') ?> Secure Payments">
                          Know More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="home-side-banner home-side-banner1"
                  style={{
                    backgroundImage: 'url("https://s101.abraacdn.com/files/banner2.jpg")'
                  }}
                >
                  <div className="home-side-banner-details">
                    <div className="home-side-banner-title">Product inspection</div>
                    <div className="home-side-banner-link">
                      <Link href="">
                        <a target="_blankCat" alt="<? __('Know More for') ?> Secure Payments">
                          Know More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="home-side-banner home-side-banner1"
                  style={{
                    backgroundImage: 'url("https://s101.abraacdn.com/files/banner3.jpg")'
                  }}
                >
                  <div className="home-side-banner-details">
                    <div className="home-side-banner-title">Buyer protection</div>
                    <div className="home-side-banner-link">
                      <Link href="">
                        <a target="_blankCat" alt="<? __('Know More for') ?> Secure Payments">
                          Know More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginTop: "20px" }} id="div1"></div>

      <Section2 />

      <div style={{ marginTop: "20px" }} id="div2"></div>
      <Section3 />
      <div style={{ marginTop: "20px" }} id="div3"></div>

      <Section4 />
    </main>
  ) : (
    <div className="spinner14-wrapper">
      <div className="spinner14"></div>
    </div>
  )
}

export default Main
