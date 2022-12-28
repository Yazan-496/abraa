import { useState } from "react"
import Link from "@/assets/LinkWithQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
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
                <img
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
              <img
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
                  Shipper Account
                  <FontAwesomeIcon icon={faAngleLeft} className="fa fa-caret-left transition" />
                </span>
              </a>
              <div
                className={!changeAccount ? "collapse in" : "collapse"}
                aria-expanded={!changeAccount ? "false" : "true"}
                style={{ height: "auto" }}
              >
                <div className="info">
                  {/* <a
                onClick={() => setChangeAccount(!changeAccount)}
                data-toggle="collapse"
                className={changeAccount ? "" : "collapsed"}
                aria-expanded={changeAccount ? "false" : "true"}
              >
              </a> */}
                  <div
                    className={!changeAccount ? "collapse in" : "collapse"}
                    aria-expanded={!changeAccount ? "false" : "true"}
                    style={{ height: "auto" }}
                  >
                    <ul className="nav1">
                      <li>
                        <a
                          style={{
                            placeContent: "center"
                          }}
                          className="account"
                        >
                          Buyer Account
                        </a>
                      </li>
                      <li>
                        <Link href="/new-dashboard">
                          <a
                            style={{
                              placeContent: "center"
                            }}
                            className="account"
                          >
                            Supplier Account
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav1">
            <li className="active">
              <Link href="/new-dashboard/buyer-account/">
                <a>
                  <i className="icon-dashboard" />
                  <p>Dashboard</p>
                </a>
              </Link>
            </li>
            <li className>
              <Link href="/new-dashboard/buyer-account/purchase-orders">
                <a>
                  <i className="icon-order" />
                  <p>Purchase Orders</p>
                </a>
              </Link>
            </li>
            <li className>
              <Link href="/new-dashboard/buyer-account/buying-requests">
                <a>
                  <i className="fa fa-pen-square" aria-hidden="true" />
                  <p>Request For Quotations</p>
                </a>
              </Link>
            </li>
            <li className>
              <Link href="/new-dashboard/buyer-account/notifications">
                <a>
                  <i className="fa fa-bell" aria-hidden="true" />
                  <p>Notifications</p>
                </a>
              </Link>
            </li>
            <li className>
              <Link href="/new-dashboard/buyer-account/messages">
                <a>
                  <i className="icon-message" />
                  <p>Messages</p>
                </a>
              </Link>
            </li>
            <li className>
              <Link href="/new-dashboard/buyer-account/resolution">
                <a>
                  <i className="fa fa-list" aria-hidden="true" />
                  <p>Resolution Center</p>
                </a>
              </Link>
            </li>
            <li className>
              <Link href="/new-dashboard/buyer-account/wishlist">
                <a>
                  <i className="fa fa-heart" aria-hidden="true" />
                  <p>Watchlist</p>
                </a>
              </Link>
            </li>
            <li className>
              <Link href="/new-dashboard/buyer-account/accountsettings">
                <a>
                  <i className="icon-settings" />
                  <p>My Account</p>
                </a>
              </Link>
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
