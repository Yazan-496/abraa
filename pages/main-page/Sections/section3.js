import React from "react"
import Image from "@/assets/imageNext"
import LazyLoad from "react-lazy-load"
import Link from "@/assets/LinkWithQuery"
import CarouselNum4 from "../carousel/carouselNum4"
import CarouselNum5 from "../carousel/carouselNum5"
import CarouselNum7 from "../carousel/carouselNum7"
export default function Section3() {
  return (
    <div>
      <section className="container white-box mt-3 mt-md-3">
        <div id="main-category-content" className="category_flag_sec">
          <div className="double-sec-heading">
            <h2 className="sec-heading">
              <span>Agriculture Wholesale</span>
            </h2>
            <Link href="https://www.abraa.com/category/agriculture">
              <a className="btn-white" target="_blankCat" title=" Visit Category">
                Visit Category <i className="ri-arrow-right-s-line" />
              </a>
            </Link>
          </div>
          <div className="categories_sub_div mt-2 mt-md-4">
            <div className="row mr-0 sub-category-container">
              <div className="main-category-sub col-md-5 col-lg-3 d-none d-md-block">
                <div className="main-category-sub-link h-100">
                  <a
                    title="Wholesale Agriculture"
                    href="category/agriculture"
                    className="align-bottom h-100 w-100"
                  >
                    <Image
                      alt="new"
                      unoptimized={false}
                      width={384}
                      height={268}
                      src="https://s101.abraacdn.com/files/agriculture.png"
                      className="h-100 w-100 fit-cover"
                    />
                    <div className="processing_machines_title position-absolute d-table w-100 h-100">
                      <div className="d-flex align-items-end w-100 justify-content-center">
                        <span className="source-now-btn">Source Now</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="sub-categories-list col-md-7 col-lg-9">
                <div className="row">
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a
                      href="category/plants-seeds-bulbs"
                      title="Plants, Seeds & Bulbs"
                      className="d-table w-100 h-100"
                    >
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/Plants-seeds-and-bulbs.jpg"
                          alt="Plants, Seeds & Bulbs"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Plants, Seeds &amp; Bulbs </h3>
                      </div>
                    </a>
                  </div>
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a
                      href="category/farm-machinery-equipment"
                      title="Farm Machinery & Equipment"
                      className="d-table w-100 h-100"
                    >
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/Farm-machinery-equipement.jpg"
                          alt="Farm Machinery & Equipment"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Farm Machinery &amp; Equipment </h3>
                      </div>
                    </a>
                  </div>
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a href="category/fertilizers" title="Fertilizers" className="d-table w-100 h-100">
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/Fertilizer.jpg"
                          alt="Fertilizers"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Fertilizers </h3>
                      </div>
                    </a>
                  </div>
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a
                      href="category/ornamental-plants"
                      title="Ornamental Plants"
                      className="d-table w-100 h-100"
                    >
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/ornamental-plants.jpg"
                          alt="Ornamental Plants"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Ornamental Plants </h3>
                      </div>
                    </a>
                  </div>
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a
                      href="category/agricultural-tools-supplies"
                      title="Agricultural Tools & Supplies"
                      className="d-table w-100 h-100"
                    >
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/Agriculture-Tools.jpg"
                          alt="Agricultural Tools & Supplies"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Agricultural Tools &amp; Supplies </h3>
                      </div>
                    </a>
                  </div>
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a href="category/aquaculture" title="Aquaculture" className="d-table w-100 h-100">
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/Aquaculture.jpg"
                          alt="Aquaculture"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Aquaculture </h3>
                      </div>
                    </a>
                  </div>
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a
                      href="category/fruit-grafts-seedings-rootstocks"
                      title="Fruit Grafts, Seedings & Rootstocks"
                      className="d-table w-100 h-100"
                    >
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/fruit-grafts-and-seedlings.jpg"
                          alt="Fruit Grafts, Seedings & Rootstocks"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Fruit Grafts, Seedings &amp; Rootstocks </h3>
                      </div>
                    </a>
                  </div>
                  <div className="sub-category border sub_left_top col-6 col-md-4 col-lg-3 px-0">
                    <a href="category/dried-flowers" title="Dried Flowers" className="d-table w-100 h-100">
                      <div className="sub_category_image w-50 d-table-cell">
                        <Image
                          unoptimized={false}
                          width={100}
                          height={65}
                          src="https://s101.abraacdn.com/files/Dried-flowers.jpg"
                          alt="Dried Flowers"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sub_category_title w-50 d-table-cell text-right align-bottom">
                        <h3>Dried Flowers </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CarouselNum4 />
          <div className="double-sec-heading mt-3">
            <h2 className="sec-heading">
              <span>Latest RFQS in the category </span>
            </h2>
            <a className="btn-white" href="https://www.abraa.com/rfqs" title="See all RFQS">
              See all FRQS <i className="ri-arrow-right-s-line" />
            </a>
          </div>
          <div className="rfqs-list owl-carousel owl-loaded">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1509px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 3524
                }}
              >
                <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                  <div className="rfq-block">
                    <a
                      href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                      title="Costus root powder "
                    >
                      <div className="media">
                        <div className="clearfix mb-2">
                          <div className="float-left mr-3">
                            <div className="rfq-title">Costus root powder </div>
                          </div>
                          <div className="float-right">
                            <div className="rfq-tag">New</div>
                          </div>
                        </div>
                        <div className="rfq-footer d-flex">
                          <Image
                            unoptimized={false}
                            width={28}
                            height={19}
                            src="https://assets.abraacdn.com/assets/images/id.png"
                            alt="id Flag"
                            className="img-responsive"
                          />
                          <h4 className="pl-2">Buyer From Indonesia </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                  <div className="rfq-block">
                    <a
                      href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                      title="Costus root powder "
                    >
                      <div className="media">
                        <div className="clearfix mb-2">
                          <div className="float-left mr-3">
                            <div className="rfq-title">Costus root powder </div>
                          </div>
                          <div className="float-right">
                            <div className="rfq-tag">New</div>
                          </div>
                        </div>
                        <div className="rfq-footer d-flex">
                          <Image
                            unoptimized={false}
                            width={28}
                            height={19}
                            src="https://assets.abraacdn.com/assets/images/id.png"
                            alt="id Flag"
                            className="img-responsive"
                          />
                          <h4 className="pl-2">Buyer From Indonesia </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                  <div className="rfq-block">
                    <a
                      href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                      title="Costus root powder "
                    >
                      <div className="media">
                        <div className="clearfix mb-2">
                          <div className="float-left mr-3">
                            <div className="rfq-title">Costus root powder </div>
                          </div>
                          <div className="float-right">
                            <div className="rfq-tag">New</div>
                          </div>
                        </div>
                        <div className="rfq-footer d-flex">
                          <Image
                            unoptimized={false}
                            width={28}
                            height={19}
                            src="https://assets.abraacdn.com/assets/images/id.png"
                            alt="id Flag"
                            className="img-responsive"
                          />
                          <h4 className="pl-2">Buyer From Indonesia </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "493.333px", marginRight: 10 }}>
                  <div className="rfq-block">
                    <a
                      href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                      title="Costus root powder "
                    >
                      <div className="media">
                        <div className="clearfix mb-2">
                          <div className="float-left mr-3">
                            <div className="rfq-title">Costus root powder </div>
                          </div>
                          <div className="float-right">
                            <div className="rfq-tag">New</div>
                          </div>
                        </div>
                        <div className="rfq-footer d-flex">
                          <Image
                            unoptimized={false}
                            width={28}
                            height={19}
                            src="https://assets.abraacdn.com/assets/images/id.png"
                            alt="id Flag"
                            className="img-responsive"
                          />
                          <h4 className="pl-2">Buyer From Indonesia </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned active" style={{ width: "493.333px", marginRight: 10 }}>
                  <div className="rfq-block">
                    <a
                      href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                      title="Costus root powder "
                    >
                      <div className="media">
                        <div className="clearfix mb-2">
                          <div className="float-left mr-3">
                            <div className="rfq-title">Costus root powder </div>
                          </div>
                          <div className="float-right">
                            <div className="rfq-tag">New</div>
                          </div>
                        </div>
                        <div className="rfq-footer d-flex">
                          <Image
                            unoptimized={false}
                            width={28}
                            height={19}
                            src="https://assets.abraacdn.com/assets/images/id.png"
                            alt="id Flag"
                            className="img-responsive"
                          />
                          <h4 className="pl-2">Buyer From Indonesia </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned active" style={{ width: "493.333px", marginRight: 10 }}>
                  <div className="rfq-block">
                    <a
                      href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                      title="Costus root powder "
                    >
                      <div className="media">
                        <div className="clearfix mb-2">
                          <div className="float-left mr-3">
                            <div className="rfq-title">Costus root powder </div>
                          </div>
                          <div className="float-right">
                            <div className="rfq-tag">New</div>
                          </div>
                        </div>
                        <div className="rfq-footer d-flex">
                          <Image
                            unoptimized={false}
                            width={28}
                            height={19}
                            src="https://assets.abraacdn.com/assets/images/id.png"
                            alt="id Flag"
                            className="img-responsive"
                          />
                          <h4 className="pl-2">Buyer From Indonesia </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "493.333px", marginRight: 10 }}>
                  <div className="rfq-block">
                    <a
                      href="https://www.abraa.com/buying-inquiry/buyer-for-costus-root-powder-15e76c1dfde263d7cd0df02609f4e3cc"
                      title="Costus root powder "
                    >
                      <div className="media">
                        <div className="clearfix mb-2">
                          <div className="float-left mr-3">
                            <div className="rfq-title">Costus root powder </div>
                          </div>
                          <div className="float-right">
                            <div className="rfq-tag">New</div>
                          </div>
                        </div>
                        <div className="rfq-footer d-flex">
                          <Image
                            unoptimized={false}
                            width={28}
                            height={19}
                            src="https://assets.abraacdn.com/assets/images/id.png"
                            alt="id Flag"
                            className="img-responsive"
                          />
                          <h4 className="pl-2">Buyer From Indonesia </h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span className="owl-prev fas fa-chevron-left " />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span className="owl-next fas fa-chevron-right " />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
      </section>

      <section
        //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
        className="container stats-sec mt-3"
      >
        <div className="row">
          <div className="col-md-6">
            <h2 className="sec-heading d-flex align-items-center pt-3 pt-md-0">
              <Image
                unoptimized={false}
                width={30}
                height={20}
                src="https://s101.abraacdn.com/files/star-smile-line-svg.png"
                alt="Bulk Deals"
                className="img-fluid pr-2 position-relative bg-white"
              />

              <span>Bulk Deals </span>
            </h2>
            <section
              style={{
                minWidth: "-webkit-fill-available",
                height: "90%"
              }}
              className="home-section white-box"
            >
              <CarouselNum5 />
            </section>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <section
              style={{ minWidth: "-webkit-fill-available" }}
              className="home-section white-box request_form request_form_2"
            >
              <div className="mb-md-3 mb-lg-4">
                <h2 className="sec-heading d-flex align-items-center">
                  <Image
                    unoptimized={false}
                    width={30}
                    height={20}
                    src="https://s101.abraacdn.com/files/earth-line.png"
                    alt="Global Top Rated Suppliers"
                    className="img-fluid pr-2 position-relative bg-white"
                  />

                  <span>Global Top Rated Suppliers </span>
                </h2>
              </div>
              <CarouselNum7 />
            </section>
          </div>
        </div>
      </section>
      <section
        //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
        className="container mt-3 deal-sec"
        style={{ display: "none" }}
      >
        <div className="row">
          <div className="col-md-6">
            <div
              style={{
                height: "100%"
              }}
              className="white-box deal-product"
            >
              <h2 className="sec-heading">
                <span>Weekly Deals</span>
              </h2>
              <div className="deal-product-body">
                <div className="deal-right-sec">
                  <h3>From 10% OFF</h3>
                  <p>Deals end in:</p>
                  <ul>
                    <li>
                      <span id="days" />
                    </li>
                    <li>
                      <span id="hours" />
                    </li>
                    <li>
                      <span id="minutes" />
                    </li>
                    <li>
                      <span id="seconds" />
                    </li>
                  </ul>
                  <a>View More</a>
                </div>
                <div className="deal-left-sec mt-2 mt-md-2 mt-lg-2 mt-xl-0">
                  <div className="row">
                    <div className="col-6 space_remove_responsive">
                      <div className="item-2">
                        <a title="Bangs Organic Ginger Shot with Orange,Carrot and Ginger">
                          <div className="item-2-image">
                            <Image
                              unoptimized={false}
                              width={50}
                              height={50}
                              src="https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png"
                              alt="Bangs Organic Ginger Shot with Orange,Carrot and Ginger"
                            />
                          </div>
                          <div className="item-2-mq"></div>
                          <div className="item-2-title">Bangs Organic Ginger Shot ...</div>
                          <div className="item-2-price"></div>
                          <div className="item-2-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-6 space_remove_responsive">
                      <div className="item-2">
                        <a title="Organic Extra Virgin Palestinian Olive oil">
                          <div className="item-2-image">
                            <Image
                              unoptimized={false}
                              width={50}
                              height={50}
                              src="https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg"
                              alt="Organic Extra Virgin Palestinian Olive oil"
                            />
                          </div>
                          <div className="item-2-mq"></div>
                          <div className="item-2-title">Organic Extra Virgin ...</div>
                          <div className="item-2-price"></div>
                          <div className="item-2-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <div
              style={{
                height: "100%"
              }}
              className="white-box deal-product"
            >
              <h2 className="sec-heading">
                <span>Small Commoities Marketplace</span>
              </h2>
              <div className="deal-product-body">
                <div className="deal-right-sec commoities-sec commoities-sec1">
                  <h3>A wide range of selected goods with fast free shipping</h3>
                  <a>View More</a>
                </div>
                <div className="deal-left-sec mt-2 mt-md-2 mt-lg-2 mt-xl-0">
                  <div className="row">
                    <div className="col-6 space_remove_responsive">
                      <div className="item-2">
                        <a title="Bangs Organic Ginger Shot with Orange,Carrot and Ginger">
                          <div className="item-2-image">
                            <Image
                              unoptimized={false}
                              width={50}
                              height={50}
                              src="https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png"
                              alt="Bangs Organic Ginger Shot with Orange,Carrot and Ginger"
                            />
                          </div>
                          <div className="item-2-mq"></div>
                          <div className="item-2-title">Bangs Organic Ginger Shot ...</div>
                          <div className="item-2-price"></div>
                          <div className="item-2-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-6 space_remove_responsive">
                      <div className="item-2">
                        <a title="Organic Extra Virgin Palestinian Olive oil">
                          <div className="item-2-image">
                            <Image
                              unoptimized={false}
                              width={50}
                              height={50}
                              src="https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg"
                              alt="Organic Extra Virgin Palestinian Olive oil"
                            />
                          </div>
                          <div className="item-2-mq"></div>
                          <div className="item-2-title">Organic Extra Virgin ...</div>
                          <div className="item-2-price"></div>
                          <div className="item-2-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
        className="mt-3 container p-0"
      >
        <div className="home_ads_sec owl-carousel"></div>
      </section>
    </div>
  )
}
