import { Component } from "react"
// import "owl.carousel/dist/assets/owl.carousel.css"
// import "owl.carousel/dist/assets/owl.theme.default.css"
import dynamic from "next/dynamic"
import Image from "next/image"
// import Image from "@/assets/imageNext"
import Link from "@/assets/LinkWithQuery"
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

class CarouselNum1 extends Component {
  render() {
    return (
      <OwlCarousel
        className="owl-loaded home_slider overflow-hidden"
        items={1}
        dots={false}
        loop
        nav={false}
        autoplay={false}
      >
        <div className="home_layer">
          <Link href="">
            <a
              style={{
                height: "-webkit-fill-available"
              }}
              title="Top Rated and Verified"
              className="d-inline-block"
            >
              <Image
                unoptimized={true}
                width="60"
                loading="eager"
                height="25"
                layout="responsive"
                src="https://s101.abraacdn.com/files/166503826062852.jpg"
                alt="Top Rated and Verified"
                className=" img-fluid  slide1 h-100"
              />
              {/*  */}
            </a>
          </Link>
        </div>
        <div className="home_layer">
          <Link href="">
            <a
              style={{
                height: "-webkit-fill-available"
              }}
              title="Top Rated and Verified"
              className="d-inline-block"
            >
              <Image
                unoptimized={true}
                width="60"
                height="25"
                loading={undefined}
                layout="responsive"
                src="https://s101.abraacdn.com/files/166503826062852.jpg"
                alt="Top Rated and Verified"
                className=" img-fluid  slide1 h-100"
              />
              {/*  */}
            </a>
          </Link>
        </div>
        <div className="owl-nav"></div>
        <div className="owl-dots">
          <button role="button" className="owl-dot active" />

          <button role="button" className="owl-dot" />

          <button role="button" className="owl-dot" />

          <button role="button" className="owl-dot" />

          <button role="button" className="owl-dot" />

          <button role="button" className="owl-dot" />
        </div>
      </OwlCarousel>
    )
  }
}

export default CarouselNum1
