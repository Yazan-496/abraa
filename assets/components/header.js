import { Component } from "react"
import Image from "@/assets/imageNext"
import dynamic from "next/dynamic"
import user from "../header-icons/user1.png"
import heart from "../header-icons/heart.png"
import notification from "../header-icons/notification.png"
import messages from "../header-icons/messages.png"
import container from "../header-icons/container.png"
import JoinFree from "./joinfree.js"
import Logo from "./logo"
import Link from "@/assets/LinkWithQuery"
import Dashboard from "./gotodashoboard"
import Secure from "./secure"
import GoToSignIn from "./goToSignIn"

import { connect } from "react-redux"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: false,
      setNav: false,
      selectedOption: "Products",
      openItem: false,
      selcted: 0,
      signIn: false,
      openCategories: false,
      user: null,
      token: null,
      userData: null
    }
  }

  componentDidMount() {
    //************Sticky***********//
    if (typeof window !== undefined) {
      this.setState({
        ...this.state,
        userData: JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.data,
        token: JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.access_token,
        user: JSON.parse(localStorage.getItem("USER_DATA_STORAGE"))?.userData?.username
      })
    }
    window.onscroll = function () {
      myFunction()
    }
    const header = document.getElementById("myHeader")
    const sticky = header.offsetTop
    //     const handleFocusEvent = (e: FocusEvent<Target= focusin, RelatedTarget=menu-5353>) => {
    //       // Do something
    //     }

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    }
  }

  render() {
    return (
      <>
        <header className="position-fixed w-100 head-box bg-white" id="myHeader">
          <nav>
            <div className="search-bar-top products-search-top">
              <div className="close-icon d-block position-absolute">
                <Link href="">
                  <a className="bg-transparent border-0 p-0 d-inline-block text-dark">
                    <i className="flaticon-cancel" aria-hidden="true" />
                  </a>
                </Link>
              </div>
            </div>
            <div
              //     style={{ height: "150px" }}
              className="container-fluid header_container"
            >
              <div className="row align-items-center border-bottom header-upper">
                <div className="col-md-2 col-lg-2 col-xl-2 col-5 col-5 pl-0">
                  <div className="logo_search_group d-flex justify-content-between d-sm-flex justify-content-sm-between align-items-center">
                    <div className="logo_wrap">
                      <Logo />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 py-0 py-lg-0 px-0 order-2 order-md-0">
                  <div className="header_search_form">
                    <form name="search" className="header-seach" onSubmit="return false;">
                      <div className="search_position position-relative d-inline-block w-100">
                        <div
                          className="search_cus_select position-absolute"
                          onClick={() =>
                            this.setState({
                              product: !this.state.product
                            })
                          }
                        >
                          <select
                            name="Selectbox bg-lightgrey"
                            id="headerSearchType"
                            className="wpcf7-form-control wpcf7-select"
                            aria-invalid="false"
                            // onChange={ (e) =>
                            //      this.setState({
                            //           ...this.state,
                            //           selectValue: e.target.value
                            //      })
                            // }
                          >
                            <option value="Products">Products</option>
                            <option value="RFQs">RFQs</option>
                          </select>
                          <div
                            className={
                              this.state.product === false
                                ? "nice-select wpcf7-form-control wpcf7-select"
                                : "nice-select wpcf7-form-control wpcf7-select open"
                            }
                            tabIndex={0}
                          >
                            <span className="current">{this.state.selectedOption}</span>
                            <ul className="list">
                              <li
                                onClick={() =>
                                  this.setState({
                                    selectedOption: "Products"
                                  })
                                }
                                data-value="Products"
                                className={
                                  this.state.selectedOption === "Products"
                                    ? "option selected "
                                    : "option focus"
                                }
                              >
                                Products
                              </li>
                              <li
                                onClick={() =>
                                  this.setState({
                                    selectedOption: "RFQs"
                                  })
                                }
                                data-value="RFQs"
                                className={
                                  this.state.selectedOption === "RFQs" ? "option selected " : "option focus"
                                }
                              >
                                RFQs
                              </li>
                            </ul>
                          </div>
                        </div>
                        <input
                          name="s"
                          id="search_key"
                          placeholder="What are you looking for?"
                          type="text"
                          className="d-inline-block border-0 w-100"
                        />
                        <div className="position-absolute submit_btn_header h-100">
                          <button
                            type="submit"
                            id="search-button-top"
                            className="bg_blue text-white border-0 h-100 d-flex align-items-center px-3"
                          >
                            <i className="ri-search-2-line" />
                            <span className="text-white pl-md-2 d-none d-md-inline-block">Search</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 col-6 pr-0 ml-auto ml-md-0">
                  <div className="shop_list">
                    <ul className="pl-0 mb-0 d-flex align-items-center justify-content-end p-0 justify-content-md-between header-icon_container">
                      <li className=" d-flex align-items-center position-relative justify-content-center sign_and_login pt-2 pb-2">
                        <span>
                          <Image
                            layout="fixed"
                            unoptimized={true}
                            src={user}
                            alt="user"
                            width="30"
                            height="30"
                            className="header-icon icon1 mr-1"
                          />
                        </span>
                        {/* {console.log(this.state.token, "token")} */}
                        {/* {console.log(this.state.userData, "userdata")} */}
                        {/* {console.log(this.state.user, "username")} */}
                        {this.state.userData?.access_token === null ||
                        this.state.userData?.access_token === undefined ? (
                          <div className="d-flex flex-column signInText">
                            <GoToSignIn />
                            <JoinFree />
                          </div>
                        ) : (
                          <Dashboard user={this.state?.userData?.username} />
                        )}
                      </li>

                      <li className="ml-md-2 d-none d-md-block pt-2 pb-2">
                        <Link href="">
                          <a className="text-dark d-flex flex-column align-items-center">
                            <Image
                              src={heart}
                              unoptimized={true}
                              alt="user"
                              width="22"
                              height="22"
                              className="header-icon "
                            />
                            <div className="icon-text">Favorites</div>
                          </a>
                        </Link>
                      </li>
                      <li className="ml-md-2 d-none d-md-block envelope_list position-relative IsNotifications pt-2 pb-2">
                        <Link href="">
                          <a
                            style={{ color: "black" }}
                            className=" position-relative d-flex flex-column align-items-center"
                          >
                            <Image
                              src={messages}
                              unoptimized={true}
                              alt="user"
                              width="22"
                              height="22"
                              className="header-icon"
                            />
                            <div className="icon-text">Messages</div>
                          </a>
                        </Link>
                      </li>
                      <li
                        className="ml-md-2 d-none d-md-block IsNotifications position-relative pt-2 pb-2"
                        id="notification_data"
                      >
                        <Link href="">
                          <a
                            style={{ color: "black" }}
                            className=" position-relative d-flex flex-column align-items-center"
                          >
                            <Image
                              src={notification}
                              unoptimized={true}
                              alt="user"
                              width="22"
                              height="22"
                              className="header-icon"
                            />
                            <div className="icon-text">Notifications</div>
                          </a>
                        </Link>
                      </li>
                      <li className="d-md-none d-flex align-items-center position-relative justify-content-center sign_and_login pt-2 pb-2 pr-2">
                        {/* <span>
                                                 <a href="https://www.abraa.com/login" class="d-flex flex-column align-items-center">
                                                      <Image
                                                src="../header-icons/user1.png" alt="" class="header-icon icon1 mr-1">
                                                           <div class="icon-text">Sign In</div>
                                                 </a>
                                            </span> */}
                      </li>
                      <li className="ml-md-2 position-relative pt-2 pb-2 pr-2 pr-sm-0">
                        <Link href="">
                          <a className="d-flex align-items-center text-dark d-flex flex-column align-items-center">
                            <Image
                              src={container}
                              unoptimized={true}
                              alt="user"
                              width="22"
                              height="22"
                              className="header-icon"
                            />
                            {/* <div class="icon-text">Cart</div> */}
                            {/* <i class="ri-truck-line"></i> */}
                            <div className="icon-text">Container</div>
                            <span className="orange not_number" id="cartCount">
                              0
                            </span>
                            <span className="text-dark cart_totla ml-1 d-none d-lg-inline-block">
                              {/* Cart */}
                            </span>
                          </a>
                        </Link>
                        <div className="dropdown-menu" id="cart-dropdown">
                          <div className="d-flex flex-column">
                            <h5 className="pt-15 alert alert-info text-center m-0">Container is empty</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ height: "50px" }} className="row align-items-center header_row_2 header-lower">
                <div className="col-3 col-md-2 col-xl-2 px-0">
                  <div className="cat_menu">
                    <div
                      onClick={() =>
                        this.setState({
                          setNav: true
                        })
                      }
                      className="cat_menu_text d-flex align-items-center"
                    >
                      <div className="toggle_on d-flex align-items-center">
                        <i className="ri-menu-2-line d-inline-block" />
                        <span className="d-inline-block">Category</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-7 d-none d-md-block">
                  <div className="right_menu_close d-block d-lSecure/g-none position-absolute">
                    <Link href="">
                      <a className="bg-transparent border-0 p-0 d-inline-block text-dark">
                        <i className="flaticon-cancel" aria-hidden="true" />
                      </a>
                    </Link>
                  </div>
                  <div
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "space-around",
                    //   fontSize: "14px"
                    // }}
                    className="right_menu text-left text-md-center"
                  >
                    <Secure />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
}
const mapStateToProps = (store) => ({
  username: store?.Reducer?.username ? store?.Reducer?.username : store?.Reducer?.username?.action
})

export default connect(mapStateToProps)(Header)
