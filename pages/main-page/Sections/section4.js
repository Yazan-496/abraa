import React from "react"
import Image from "@/assets/imageNext"
import LazyLoad from "react-lazy-load"
import Link from "@/assets/LinkWithQuery"
import dynamic from "next/dynamic"
import CarouselNum6 from "../carousel/carouselNum5"
import CarouselNum8 from "../carousel/carouselNum7"
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

export default function Section4() {
  return (
    <div>
      <section
        //  id={loading1 && isVisible1 ? "heightonscroll" : "hideonscroll"}
        className="container stats-sec mt-3 d-none d-md-block"
      >
        <div className="row">
          <div className="col-md-6">
            <div className="stats-wrapper home-section">
              <div className="stats-inner home-section-title align-items-center align-content-center">
                <h2 className="sec-heading">
                  <span>
                    Request For <br />
                    Quotation
                  </span>
                </h2>
                <div className="row">
                  <div className="stats-block border_remove col-12 col-md-6">
                    <div className="stats-details">Create a buying request and we will do the running.</div>
                  </div>
                </div>
                <div className="row" style={{ display: "none" }}>
                  <div className="stats-block col-md-3 border_remove">
                    <div className="stats-title">18898</div>
                    <div className="stats-details">Verified Suppliers</div>
                  </div>
                  <div className="stats-block col-md-2">
                    <div className="stats-title">5834</div>
                    <div className="stats-details">RFQS</div>
                  </div>
                  <div className="stats-block col-md-2">
                    <div className="stats-title">4780</div>
                    <div className="stats-details">Industries</div>
                  </div>
                </div>
                <div className="row" style={{ display: "none" }}>
                  <div className="col-md-12">
                    <Link href="">
                      <a className="btn-white" title="See all categories">
                        See all categories <i className="ri-arrow-right-s-line" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="clearfix" style={{ display: "none" }} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <section
              style={{ minWidth: "-webkit-fill-available" }}
              className="home-section white-box request_form"
            >
              <div className="rfq-2-wrapper home-section">
                <div className="rfq-2">
                  <div className="rfq-2-details">
                    <h2 className="sec-heading">
                      <span>Create Buying Request Here</span>
                    </h2>
                    <p className="mb-4 mt-2">
                      Having difficulty finding your product? Let Abraa find it for you.
                    </p>
                    <div className="rfq-2-form">
                      <form className="rfq-2-form-elements" name="quoting-race" action="buy-request">
                        <label className="border_input border_input1 position-relative mb-0">
                          <input
                            name="buyrequest_name"
                            id="buyrequest_name_2"
                            placeholder="What are you looking for?"
                          />
                        </label>
                        <label className="border_input border_input2 position-relative mb-0">
                          <input placeholder="Quantity" name="buyrequest_qty" id="buyrequest_qty_2" />
                        </label>
                        <select
                          className="plain-white-dropdown"
                          name="buyrequest_unt"
                          id="buyrequest_unt_2"
                          style={{ display: "none" }}
                        >
                          <option value={1}>Unit</option>
                        </select>
                        <div className="nice-select plain-white-dropdown" tabIndex={0}>
                          <span className="current">Unit</span>
                          <ul className="list">
                            <li data-value={1} className="option selected focus">
                              Unit
                            </li>
                          </ul>
                        </div>
                        <button className="btn-blue">CREATE RFQ</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section
        //  id={loading2 && isVisible2 ? "heightonscroll" : "hideonscroll"}
        className="container stats-sec mt-3 customized_products"
      >
        <div className="row">
          <div className="col-md-6">
            <section
              style={{ minWidth: "-webkit-fill-available" }}
              className="home-section white-box request_form"
            >
              <div className="mb-md-2 mb-lg-4">
                <div className="customized_group d-flex justify-content-between">
                  <div className="customized_group_title w-75">
                    <h2 className="sec-heading mb-1 mb-md-2 pt-3 pt-md-0">
                      <span>Customizable products</span>
                    </h2>
                    <p>Verified manufacturers with customized production capabilities and fast delivery.</p>
                  </div>
                  <div className="customized_group_img w-25 text-right">
                    <Image
                      unoptimized={false}
                      width={50}
                      height={50}
                      src="https://s101.abraacdn.com/files/1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <CarouselNum6 />
            </section>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <section
              style={{ minWidth: "-webkit-fill-available" }}
              className="home-section white-box request_form"
            >
              <div className="mb-md-2 mb-lg-4">
                <div className="customized_group d-flex justify-content-between">
                  <div className="customized_group_title w-75">
                    <h2 className="sec-heading mb-1 mb-md-2 pt-3 pt-md-0">
                      <Link href="">
                        <a target="_blankCat">Instant Order - Fast Fulfilment</a>
                      </Link>
                    </h2>
                    <p className="w-75">Order products that are ready to be shipped to you.</p>
                  </div>
                  <div className="customized_group_img w-25 text-right">
                    <Image
                      unoptimized={false}
                      width={50}
                      height={50}
                      src="https://s101.abraacdn.com/files/2.png"
                      alt="ss"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <CarouselNum8 />
            </section>
          </div>
        </div>
      </section>
      <section
        //  id={loading2 && isVisible2 ? "heightonscroll" : "hideonscroll"}
        className="white-box mt-3 container premimum_buyers_sec"
      >
        <h2 className="sec-heading pt-3 pt-md-0">
          <span>
            Premium Buyers
            <i className="ri-heart-fill heart" style={{ position: "relative", top: 2, color: "#FF416C" }} />
            to resource from Abraa
          </span>
        </h2>
        <OwlCarousel
          className="buyers-wrapper buyers-slider"
          items={7}
          // lazyLoad={true}
          dots={false}
          loop
          nav={false}
          autoplay={true}
        >
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={100}
              height={100}
              src="https://s101.abraacdn.com/files/151722227714768.png"
              alt="Rotana-Buyers of Hotel suppliers"
              className="img-fluid"
            />
          </div>
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={100}
              height={100}
              src="https://s101.abraacdn.com/files/151722224327201.png"
              alt="Buyer of Fire and safety products"
              className="img-fluid"
            />
          </div>
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={100}
              height={100}
              src="https://s101.abraacdn.com/files/151722215674051.png"
              alt="IFFCO-Supplies buyers"
              className="img-fluid"
            />
          </div>
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={50}
              height={50}
              src="https://s101.abraacdn.com/files/151722212051573.png"
              alt="Flora Group Hotels-Hotel supplies buyer"
              className="img-fluid"
            />
          </div>
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={100}
              height={100}
              src="https://s101.abraacdn.com/files/151722210358982.png"
              alt="Atlas Copco- Industrial products buyer"
              className="img-fluid"
            />
          </div>
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={100}
              height={100}
              src="https://s101.abraacdn.com/files/151722208733158.png"
              alt="Dubai Airports-Buyer of hotel supplies"
              className="img-fluid"
            />
          </div>
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={100}
              height={100}
              src="https://s101.abraacdn.com/files/151722207338765.png"
              alt="DoubleTree-Buyer of Hotel Supplies"
              className="img-fluid"
            />
          </div>
          <div className="buyer-logo">
            <Image
              unoptimized={false}
              width={100}
              height={100}
              src="https://s101.abraacdn.com/files/151722204855640.png"
              alt="Fetchr - Wholesale Buyer in Dubai at Abraa"
              className="img-fluid"
            />
          </div>
        </OwlCarousel>
      </section>
      <section
        //  id={loading2 && isVisible2 ? "heightonscroll" : "hideonscroll"}
        className="white-box mt-3 container"
      >
        <h2 className="sec-heading pt-3 pt-md-0">
          <span>Our Services</span>
        </h2>
        <div className="services-wrapper-top">
          <div className="services-wrapper">
            <div className="service-block">
              <a title="Shipping">
                <div className="service-img">
                  <Image
                    unoptimized={false}
                    width={50}
                    height={50}
                    src="https://s101.abraacdn.com/files/truck.svg"
                    alt="Shipping"
                  />
                </div>
                <div className="service-info">
                  <h3>Shipping</h3>
                  <span>
                    Abraa manages everything perfectly when it comes to getting your goods from the factory
                    floor to your doorstep. Being a ...
                  </span>
                  <p
                    style={{
                      display: "flex",
                      marginBottom: 0,
                      alignItems: "center",
                      color: "#1180b0",
                      marginTop: "15px",
                      letterSpacing: "0.5px",
                      fontWeight: 500,
                      fontSize: "13px"
                    }}
                  >
                    Read More <i className="ri-arrow-right-s-line" />
                  </p>
                </div>
              </a>
            </div>
            <div className="service-block">
              <a title="Warehousing">
                <div className="service-img">
                  <Image
                    unoptimized={false}
                    width={50}
                    height={50}
                    src="https://s101.abraacdn.com/files/warehouse.svg"
                    alt="Warehousing"
                  />
                </div>
                <div className="service-info">
                  <h3>Warehousing</h3>
                  <span>
                    Abraa.com is globally well-linked with multiple logistics and warehouse associates.
                    Positioned in the heart of Dubai, w ...
                  </span>
                  <p
                    style={{
                      display: "flex",
                      marginBottom: 0,
                      alignItems: "center",
                      color: "#1180b0",
                      marginTop: "15px",
                      letterSpacing: "0.5px",
                      fontWeight: 500,
                      fontSize: "13px"
                    }}
                  >
                    Read More <i className="ri-arrow-right-s-line" />
                  </p>
                </div>
              </a>
            </div>
            <div className="service-block">
              <a title="Products Inspection">
                <div className="service-img">
                  <Image
                    unoptimized={false}
                    width={50}
                    height={50}
                    src="https://s101.abraacdn.com/files/packages.svg"
                    alt="Products Inspection"
                  />
                </div>
                <div className="service-info">
                  <h3>Products Inspection</h3>
                  <span>
                    At Abraa.com, every buyer’s product is physically verified through onsite inspection for
                    those suppliers in the U.A.E. ...
                  </span>
                  <p
                    style={{
                      display: "flex",
                      marginBottom: 0,
                      alignItems: "center",
                      color: "#1180b0",
                      marginTop: "15px",
                      letterSpacing: "0.5px",
                      fontWeight: 500,
                      fontSize: "13px"
                    }}
                  >
                    Read More <i className="ri-arrow-right-s-line" />
                  </p>
                </div>
              </a>
            </div>
            <div className="service-block">
              <a title="Buyer Protection">
                <div className="service-img">
                  <Image
                    unoptimized={false}
                    width={50}
                    height={50}
                    src="https://s101.abraacdn.com/files/authentication.svg"
                    alt="Buyer Protection"
                  />
                </div>
                <div className="service-info">
                  <h3>Buyer Protection</h3>
                  <span>
                    Are you worried about account safety, payment security, and product quality while buying
                    online? Worry no more, Abraa of ...
                  </span>
                  <p
                    style={{
                      display: "flex",
                      marginBottom: 0,
                      alignItems: "center",
                      color: "#1180b0",
                      marginTop: "15px",
                      letterSpacing: "0.5px",
                      fontWeight: 500,
                      fontSize: "13px"
                    }}
                  >
                    Read More <i className="ri-arrow-right-s-line" />
                  </p>
                </div>
              </a>
            </div>
            <div className="service-block">
              <a title="Secure Payment">
                <div className="service-img">
                  <Image
                    unoptimized={false}
                    width={50}
                    height={50}
                    src="https://s101.abraacdn.com/files/pay.svg"
                    alt="Secure Payment"
                  />
                </div>
                <div className="service-info">
                  <h3>Secure Payment</h3>
                  <span>
                    What is Abraa Secure Payment (ASP)? Abraa Secure Payment(ASP) is a payment gateway
                    solution that grants high protectio ...
                  </span>
                  <p
                    style={{
                      display: "flex",
                      marginBottom: 0,
                      alignItems: "center",
                      color: "#1180b0",
                      marginTop: "15px",
                      letterSpacing: "0.5px",
                      fontWeight: 500,
                      fontSize: "13px"
                    }}
                  >
                    Read More <i className="ri-arrow-right-s-line" />
                  </p>
                </div>
              </a>
            </div>
            <div className="service-block">
              <a title="On site Verification">
                <div className="service-img">
                  <Image
                    unoptimized={false}
                    width={50}
                    height={50}
                    src="https://s101.abraacdn.com/files/security.svg"
                    alt="On site Verification"
                  />
                </div>
                <div className="service-info">
                  <h3>On site Verification</h3>
                  <span>
                    Any global-based supplier can sign up for free on Abraa.com and instantly launch their
                    product, however with a systemati ...
                  </span>
                  <p
                    style={{
                      display: "flex",
                      marginBottom: 0,
                      alignItems: "center",
                      color: "#1180b0",
                      marginTop: "15px",
                      letterSpacing: "0.5px",
                      fontWeight: 500,
                      fontSize: "13px"
                    }}
                  >
                    Read More <i className="ri-arrow-right-s-line" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
