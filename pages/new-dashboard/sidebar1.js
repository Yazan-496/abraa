import { useState } from "react"
import { ImEqualizer2 } from "react-icons/im"
import { TbMessage } from "react-icons/tb"
import Link from "@/assets/LinkWithQuery"
import Image from "@/assets/imageNext"
import { IoReorderFourSharp } from "react-icons/io5"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStore, faAngleLeft, faIdCard, faGear } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"

export default function SideBar1(props) {
  const router = useRouter()
  const [openSide, setOpenSide] = useState(props.openSide)
  const [collpaseAccount, setCollpaseAccount] = useState(false)
  const [collpaseMyStore, setCollpaseMyStore] = useState(false)
  const [collpaseOrders, setCollpaseOrders] = useState(false)
  const [collpaseMessages, setCollpaseMessages] = useState(false)
  const [changeAccount, setChangeAccount] = useState(true)
  return (
    <div className="sidebar1">
      <div id="sidebar1">
        <div
          className={
            openSide === true
              ? "sidebar1-wrapper ps-container ps-theme-default ps-active-x ps-active-y"
              : "sidebar1-wrapper"
          }
          data-ps-id={openSide === true ? "95a42841-cba6-accc-f187-80875dfd8ed8" : ""}
          //     style={{ backgroundColor: "#022331" }}
        >
          <div className="logo">
            <Link href="/">
              <a className="logo-text">
                <Image
                  width="118"
                  height="36"
                  src="https://assets.abraacdn.com/assets/react-assets/img/logo-white.svg"
                  alt="Abraa"
                  title="Abraa"
                />
              </a>
            </Link>
          </div>
          <div
            style={{
              display: openSide === true ? "block" : "none"
            }}
            className="logo logo-mini"
          >
            <a className="logo-text">
              <Image
                width="118"
                height="36"
                src="https://assets.abraacdn.com/assets/react-assets/img/6-layers.svg"
                alt="Abraa"
                title="Abraa"
              />
            </a>
          </div>
          <div className="user">
            <div className="info">
              <a
                onClick={() => setChangeAccount(!changeAccount)}
                data-toggle="collapse"
                className={changeAccount ? "" : "collapsed"}
                aria-expanded={changeAccount ? "false" : "true"}
              >
                <span className="hidden-toggle">
                  Supplier Account
                  <FontAwesomeIcon icon={faAngleLeft} className="fa fa-caret-left transition" />
                </span>
              </a>
              <div
                className={!changeAccount ? "collapse in" : "collapse"}
                aria-expanded={!changeAccount ? "false" : "true"}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li>
                    <Link href="/new-dashboard/buyer-account">
                      <a
                        style={{
                          placeContent: "center"
                        }}
                        className="account"
                      >
                        Buyer Account
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/new-dashboard/shipper-account">
                      <a
                        style={{
                          placeContent: "center"
                        }}
                        className="account"
                      >
                        Shipper Account
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav1">
            <li className="active">
              <Link href="/new-dashboard">
                <a>
                  <ImEqualizer2 style={{ width: 25, height: 25 }} className="icon-dashboard" />
                  <p>Dashboard</p>
                </a>
              </Link>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseMyStore ? "collapsed" : ""}
                aria-expanded={collpaseMyStore}
                onClick={() => setCollpaseMyStore(!collpaseMyStore)}
              >
                <FontAwesomeIcon icon={faStore} style={{ width: 25, height: 25 }} className="icon-store" />
                <p>
                  My Store <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseMyStore ? "collapse" : "collapse in"}
                id="componentsExamples"
                aria-expanded={collpaseMyStore}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className="">
                    <Link href="/new-dashboard/my-store/add-product">
                      <a>Add Products</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/my-store/my-products">
                      <a>My Products</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/my-store/add-to-gallery">
                      <a>Add To Gallery</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/new-dashboard/my-store/boost-your-sales">
                      <a>
                        Boost Your Sales &nbsp; &nbsp;
                        <label
                          style={{
                            width: "30px",
                            height: "16px",
                            borderRadius: "50%"
                          }}
                          className="label label-danger"
                        >
                          new
                        </label>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseOrders ? "collapsed" : ""}
                aria-expanded={collpaseOrders}
                onClick={() => setCollpaseOrders(!collpaseOrders)}
              >
                <IoReorderFourSharp style={{ width: 25, height: 30 }} className="icon-order" />
                <p>
                  Orders &amp; Statistics <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseOrders ? "collapse" : "collapse in"}
                id="componentsExamples"
                aria-expanded={collpaseOrders}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className>
                    <Link href="/new-dashboard/orders/received-orders">
                      <a>Recieved orders </a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/orders/sent-orders">
                      <a>Sent orders</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/orders/requests">
                      <a>Request For Quotations</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseMessages ? "collapsed" : ""}
                aria-expanded={collpaseMessages}
                onClick={() => setCollpaseMessages(!collpaseMessages)}
              >
                <TbMessage style={{ width: 25, height: 30 }} className="icon-message" />
                <p>
                  Messages <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseMessages ? "collapse" : "collapse in"}
                id="componentsExamples"
                aria-expanded={collpaseMessages}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className>
                    <Link href="/new-dashboard/messages/messages">
                      <a>Messages</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/messages/notifications">
                      <a>Notifications</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/messages/product-reviews">
                      <a>Product Reviews</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/messages/store-reviews">
                      <a>Store Reviews</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className>
              <Link href="/new-dashboard/business-exchange">
                <a>
                  <FontAwesomeIcon
                    icon={faIdCard}
                    style={{ width: 25, height: 25 }}
                    className="fa fa-2x fa-id-card"
                    aria-hidden="true"
                  />
                  <p>Business Card Exchange</p>
                </a>
              </Link>
            </li>
            <li>
              <a
                data-toggle="collapse"
                className={!collpaseAccount ? "collapsed" : ""}
                aria-expanded={collpaseAccount}
                onClick={() => setCollpaseAccount(!collpaseAccount)}
              >
                <FontAwesomeIcon icon={faGear} style={{ width: 25, height: 25 }} className="icon-settings" />
                <p>
                  Account Settings <FontAwesomeIcon icon={faAngleLeft} className="pe-7s-angle-left" />
                </p>
              </a>
              <div
                className={!collpaseAccount ? "collapse" : "collapse in"}
                id="mapsExamples"
                aria-expanded={collpaseAccount}
                style={{ height: "auto" }}
              >
                <ul className="nav1">
                  <li className>
                    <Link href="/new-dashboard/account-settings/profile-settings">
                      <a>My Profile</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/account-settings/store-settings">
                      <a>Store Setting</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/account-settings/email-settings">
                      <a>Email Settings</a>
                    </Link>
                  </li>
                  <li className>
                    <Link href="/new-dashboard/account-settings/upgrade-membership">
                      <a>Upgrade Membership</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="sidebar1-footer">
            <div className="info">
              <p>
                <span className="hidden-toggle">You are in Basic plan </span>
              </p>
              <button className="btn btn-success btn-fill upgrade">
                UPGRADE <span className="hidden-toggle">NOW</span>
              </button>
            </div>
            <div className="info">
              <p></p>
              <button className="btn btn-success btn-fill upgrade">
                <Link href="/new-dashboard/kyc-level-list">
                  <span className="hidden-toggle"> MY KYC</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="ps-scrollbar-x-rail" style={{ width: 80, left: 0, bottom: 3 }}>
            <div className="ps-scrollbar-x" tabIndex={0} style={{ left: 0, width: 27 }} />
          </div>
          <div className="ps-scrollbar-y-rail" style={{ top: 0, height: 647, right: 3 }}>
            <div className="ps-scrollbar-y" tabIndex={0} style={{ top: 0, height: 601 }} />
          </div>
        </div>
      </div>
    </div>
  )
}
