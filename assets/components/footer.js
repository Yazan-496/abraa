import { FiInstagram } from "react-icons/fi"
import { TbBrandFacebook } from "react-icons/tb"
import { RiTwitterLine } from "react-icons/ri"
import { AiOutlineYoutube } from "react-icons/ai"
import { FiLinkedin } from "react-icons/fi"
import Image from "@/assets/imageNext"
import paypal from "../header-icons/paypal.jpg"
import visa from "../header-icons/visa.jpg"
import MasterCard from "../header-icons/MasterCard.jpg"
import discover from "../header-icons/discover.jpg"
import skrill from "../header-icons/skrill.jpg"
import Link from "@/assets/LinkWithQuery"

function Footer(props) {
  return (
    <footer>
      <Link href="https://api.whatsapp.com/send?phone=971505346880">
        <a id="myBtnWhatsapp" title="Contact Us" target="_blank" rel="noreferrer">
          <Image
            unoptimized={true}
            width="50"
            height="50"
            id="whatsappImg"
            src="https://assets.abraacdn.com/assets/images/whatsapp.svg"
            alt="Whatsapp"
          />
        </a>
      </Link>
      <div className="footer-sec container">
        <div className="footer_col_12">
          <div className="newsletter-text">
            <h3>Subscribe our Newsletter</h3>
            <p>
              Subscribe now to receive the Abraa Newsletter with latest products, best offers and current
              deals directly to your email.
            </p>
          </div>
          <div className="newsletter-right">
            <form>
              <input
                className="newsletter-email dlist-subscribe-text"
                placeholder="Email"
                id="email-subscription"
              />
              <button type="submit" onClick="subscribeNow()">
                <i className="ri-send-plane-line pr-2" style={{ position: "relative", top: 1 }} />
                SUBSCRIBE
              </button>
            </form>
            <p
              style={{
                textAlign: "left",
                fontSize: "14px",
                color: "#999",
                marginleft: "0",
                marginTop: "8px"
              }}
              className="newsletter-right-subtitle1"
            >
              We ll never share your email address with a third-party.
            </p>
          </div>
        </div>
        <div className="clearfix" />
        <div className="footer-width footer-info">
          <Link href="/">
            <a className="d-inline-block">
              <Image
                unoptimized={true}
                width="194"
                height="58"
                src="https://assets.abraacdn.com/assets/images/abraa-white-logos.png"
                alt="Abraa Logo"
              />
            </a>
          </Link>
          <p>
            Abraa.com is where MENA region’s businesses and traders go to source products from manufacturers
            and suppliers from around the globe.
          </p>
        </div>
        <div className="footer-width footer-link">
          <h4>Information</h4>
          <ul>
            <li>
              <Link href="/information/buy-request">
                <a>Request For Quote</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a href="">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/services/plans">
                <a>Plans</a>
              </Link>
            </li>
            <li>
              <Link href="/information/events">
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/about">
                <a title="About Abraa">About Abraa</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/privacy">
                <a title="Privacy Policy">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/shipping-return-policy">
                <a title="Shipping & Return Policy">Shipping &amp; Return Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/ferrari-auto-parts">
                <a title="Ferrari Auto Parts ">Ferrari Auto Parts</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/ferrari-812-gts-auto-parts">
                <a title="812 GTS">812 GTS</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/ferrari-auto-parts-f8-spider">
                <a title="F8 Spider">F8 Spider</a>
              </Link>
            </li>
            <li>
              <Link href="/guidelines/supplier">
                <a>Supplier Guideline</a>
              </Link>
            </li>
            <li>
              <Link href="/guidelines/buyer">
                <a>Buyer Guideline</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-width footer-link">
          <h4>Categories </h4>
          <ul>
            <li>
              <Link href="/listing-page">
                <a title="Food and beverages production lines">Food and beverages production lines</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Hospitality">Hospitality</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Health & Beauty">Health &amp; Beauty</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Industrial & Construction">Industrial &amp; Construction</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Auto & Auto Parts">Auto &amp; Auto Parts</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Packaging & Advertising">Packaging &amp; Advertising</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Laptops & Computers">Laptops &amp; Computers</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Lights & Lighting">Lights &amp; Lighting</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Apparels, Textiles & Accessories">Apparels, Textiles &amp; Accessories</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Electricals">Electricals</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-page">
                <a title="Electronics">Electronics</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-width footer-link">
          <h4>Our Services </h4>
          <ul>
            <li>
              <Link href="/services/shipping">
                <a title="">Shipping</a>
              </Link>
            </li>
            <li>
              <Link href="/services/warehousing">
                <a title="">Warehousing</a>
              </Link>
            </li>
            <li>
              <Link href="/services/product-inspection">
                <a title="">Products Inspection</a>
              </Link>
            </li>
            <li>
              <Link href="/services/buyer-protection">
                <a title="">Buyer Protection</a>
              </Link>
            </li>
            <li>
              <Link href="/services/secure-payment">
                <a title="">Secure Payment</a>
              </Link>
            </li>
            <li>
              <Link href="/services/on-site-verification">
                <a title="">On site Verification</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-width footer-contact">
          <h4>Contact</h4>
          <div className="contact-body">
            <div className="media align-items-center contact_info_body">
              <i className="ri-customer-service-2-line" />
              <div className="media-body pl-3">
                <a href="tel:+971508488594" className="d-block">
                  (+971) 508488594
                </a>
                <a href="mailto:info@abraa.com" className="d-block mt-1">
                  info@abraa.com
                </a>
              </div>
            </div>
          </div>
          <div className="footer-social mt-3">
            <p className="pr-3">Follow Us:</p>
            <a
              target="_blank"
              href="https://www.facebook.com/AbraaGlobal/"
              className="fb"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <TbBrandFacebook className="fa fa-facebook-f" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/abraaglobal/"
              className="inst"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <FiInstagram className="fa fa-instagram" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/abraaglobal"
              className="twitter"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <RiTwitterLine className="fa fa-twitter" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCX1FJSUjwDYFXXrz-7zzZyw"
              className="youtube"
              aria-label="Youtube"
              rel="noreferrer"
            >
              <AiOutlineYoutube className="fa fa-youtube" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/abraa-global"
              className="linkedin"
              aria-label="Linkedin"
              rel="noreferrer"
            >
              <FiLinkedin className="fa fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="copyright-sec">
        <div className="container">
          <div className="col-md-6">
            <p>
              @2022{" "}
              <Link href="/">
                <a>Abraa</a>
              </Link>
              . All rights reserved
            </p>
          </div>
          <div className="col-md-6 payment-sec">
            <div className="payment-img">
              <Link href="">
                <a>
                  <Image
                    unoptimized={true}
                    width="30"
                    height="12"
                    src={visa}
                    alt="visa"
                    className="img-responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="payment-img">
              <Link href="">
                <a>
                  <Image
                    unoptimized={true}
                    width="30"
                    height="12"
                    src={MasterCard}
                    alt="MasterCard"
                    className="img-responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="payment-img">
              <Link href="">
                <a>
                  <Image
                    unoptimized={true}
                    width="30"
                    height="12"
                    src={discover}
                    alt="discover"
                    className="img-responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="payment-img">
              <Link href="">
                <a>
                  <Image
                    unoptimized={true}
                    width="30"
                    height="12"
                    src={skrill}
                    alt="skrill"
                    className="img-responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="payment-img">
              <Link href="">
                <a>
                  <Image
                    unoptimized={true}
                    width="30"
                    height="12"
                    src={paypal}
                    alt="paypal"
                    className="img-responsive"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
