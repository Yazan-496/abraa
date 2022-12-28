// import 'owl.carousel/dist/assets/owl.carousel.css';
import "owl.carousel/dist/assets/owl.theme.default.css"
import Image from "@/assets/imageNext"
import Link from "@/assets/LinkWithQuery"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false })

export default function CarouselNum7() {
  const src =
    "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
  const router = useRouter()
  return (
    <>
      <OwlCarousel
        className="item-3-wrapper item-3-slider owl-carousel mt-2 mt-md-0"
        items={3}
        dots={false}
        loop
        nav={false}
        autoplay={true}
      >
        <Link href="/supplier-page">
          <div className="home-store">
            <div className="store-details">
              <div className="store-profile-image">
                <a href="store/28010">
                  <Image
                    width="110"
                    height="75"
                    src="https://s101.abraacdn.com/files/6876145879.jpeg"
                    alt="<? $store['name'] ?>"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                  />
                </a>
              </div>
              <div className="store-quality-icon">
                <Image
                  width="64"
                  height="18"
                  alt="Verified supplier"
                  title="Verified supplier"
                  src="https://s101.abraacdn.com/files/verified-user-1.jpg"
                  className="mr-auto"
                />
              </div>
              <h3 className="store-name">
                <a href="store/28010" title="Australian Luxuries Pty Ltd">
                  Australian Luxuries Pty Ltd{" "}
                </a>
              </h3>
              <div className="store-date">
                Member since <br />
                <b className="mute-color">16-Nov-2017 </b>
              </div>
              <div className="store-country">
                <Image width="28" height="17" src="https://s101.abraacdn.com/files/au.png" alt="Store flag" />
                Australia{" "}
              </div>
            </div>
            <div className="store-links">
              <a href="tel:61433888838">
                <i className="fa fa-phone" />
              </a>
              <a href="tel:00971504844594" className="store-whatsapp">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="store/28010" className="store-link">
                Go To Store{" "}
              </a>
            </div>
          </div>
        </Link>
        <Link href="/supplier-page">
          <div className="home-store">
            <div className="store-details">
              <div className="store-profile-image">
                <a href="store/28010">
                  <Image
                    width="110"
                    height="75"
                    src="	https://s101.abraacdn.com/files/159653891746895.png"
                    alt="<? $store['name'] ?>"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                  />
                </a>
              </div>
              <div className="store-quality-icon">
                <Image
                  width="64"
                  height="18"
                  alt="Verified supplier"
                  title="Verified supplier"
                  src="https://s101.abraacdn.com/files/verified-user-1.jpg"
                  className="mr-auto"
                />
              </div>
              <h3 className="store-name">
                <a href="store/28010" title="Australian Luxuries Pty Ltd">
                  Australian Luxuries Pty Ltd{" "}
                </a>
              </h3>
              <div className="store-date">
                Member since <br />
                <b className="mute-color">16-Nov-2017 </b>
              </div>
              <div className="store-country">
                <Image
                  width="28"
                  height="17"
                  src="https://s101.abraacdn.com/files/ae.png
"
                  alt="Store flag"
                />
                Australia{" "}
              </div>
            </div>
            <div className="store-links">
              <a href="tel:61433888838">
                <i className="fa fa-phone" />
              </a>
              <a href="tel:00971504844594" className="store-whatsapp">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="store/28010" className="store-link">
                Go To Store{" "}
              </a>
            </div>
          </div>
        </Link>
        <Link href="/supplier-page">
          <div className="home-store">
            <div className="store-details">
              <div className="store-profile-image">
                <a href="store/28010">
                  <Image
                    width="110"
                    height="75"
                    src="https://s101.abraacdn.com/files/160076756769256.png"
                    alt="<? $store['name'] ?>"
                    onerror="this.onerror=null;this.src='https://assets.abraacdn.com/assets/images/default_product.png';"
                  />
                </a>
              </div>
              <div className="store-quality-icon">
                <Image
                  width="64"
                  height="18"
                  alt="Verified supplier"
                  title="Verified supplier"
                  src="https://s101.abraacdn.com/files/verified-user-1.jpg"
                  className="mr-auto"
                />
              </div>
              <h3 className="store-name">
                <a href="store/28010" title="Australian Luxuries Pty Ltd">
                  Australian Luxuries Pty Ltd{" "}
                </a>
              </h3>
              <div className="store-date">
                Member since <br />
                <b className="mute-color">16-Nov-2017 </b>
              </div>
              <div className="store-country">
                <Image width="28" height="17" src="https://s101.abraacdn.com/files/ae.png" alt="Store flag" />
                Australia{" "}
              </div>
            </div>
            <div className="store-links">
              <a href="tel:61433888838">
                <i className="fa fa-phone" />
              </a>
              <a href="tel:00971504844594" className="store-whatsapp">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="store/28010" className="store-link">
                Go To Store{" "}
              </a>
            </div>
          </div>
        </Link>

        <div className="owl-nav"></div>
      </OwlCarousel>
    </>
  )
}
