import React, { useEffect, useState } from "react"
import Link from "@/assets/LinkWithQuery"
import Image from "@/assets/imageNext"
import { getSonsCategories } from "../../redux/actions"
import { GET_PRODUCTS, GET_CATEGORIES } from "../../graphql/queries"
import { useQuery, useMutation } from "@apollo/client"

export default function Categories(props) {
  const [subCategory, setSubCategory] = useState(false)
  const [parentCategory, setParentCategory] = useState(null)
  const [parentCategoryId, setParentCategoryId] = useState(null)
  const [sonCategories, setSonCategories] = useState([])
  const [loading, setLoading] = useState(false)
  let categories = props.categories
  useEffect(() => {
    // props.categories?.categories?.data && props.HandleLoadning(true)
  }, [categories, props])
  const handleSelectCategory = (category) => {
    setParentCategory(category?.category_translations[0]?.category_name)
    setParentCategoryId(category?.id)
    setLoading(true)
    if (category?.sub_categories?.length > 0) {
      setLoading(false)
      setSonCategories(category?.sub_categories)
      setSubCategory(true)
    } else {
      setLoading(false)
      setSonCategories([])
    }
    // getSonsCategories(
    //   parentCategoryId,
    //   (d) => {
    //     if (d?.length > 0) {
    //       setLoading(false)
    //       setSonCategories(d)
    //       setSubCategory(true)
    //     } else {
    //       setLoading(false)
    //       setSonCategories([])
    //     }
    //   },
    //   (err) => {
    //     setSonCategories([])
    //   }
    // )
  }
  return (
    <div className="col-lg-3 d-xl-block col-3 pr-0 pl-0">
      <div className="side-nav active">
        <div className="mobile-links-section">
          <div className="categories-links toggle-section">
            {categories?.categories?.data &&
              categories?.categories?.data?.map((category, index) => {
                return (
                  index < 8 && (
                    <div key={category?.id} className="mobile-link">
                      <span
                        style={{
                          marginTop: "4px",
                          marginRight: "5px"
                        }}
                      >
                        <Image
                          unoptimized={false}
                          width={"25"}
                          height={"25"}
                          src="https://s101.abraacdn.com/files/Food-&-Food-Machinery-11.png"
                          alt="Food and beverages production lines"
                          className="img-fluid"
                        />
                      </span>
                      <div
                        style={{
                          marginRight: "auto"
                        }}
                        className="text_head_box text_head_box_1"
                      >
                        <Link href="/listing-page">
                          <a target="_blankCat">
                            <div
                              onMouseOver={() => handleSelectCategory(category)}
                              className="d-inline-block side-nav-item"
                            >
                              {category?.category_translations[0]?.category_name}
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className="text_head_box text_head_box_2">
                        <i className="ri-arrow-right-s-line" />
                      </div>
                      <div className="category-submenu">
                        <div className="submenu-section">
                          <h2 className="submenu-section-title">
                            <Link href="/listing-page">
                              <a target="_blankCat">{parentCategory}</a>
                            </Link>
                          </h2>
                          {sonCategories?.map((one) => {
                            return !loading ? (
                              <h3 key={one?.id} className="submenu-section-link">
                                <Link href="/listing-page">
                                  <a target="_blankCat">{one?.category_translations[0]?.category_name}</a>
                                </Link>
                              </h3>
                            ) : (
                              <div className="spinner15-wrapper">
                                <div className="spinner14"></div>
                              </div>
                            )
                          })}

                          {sonCategories?.length > 0 && (
                            <h3 className="submenu-section-link more">
                              <Link href="/listing-page">
                                <a target="_blankCat">See More</a>
                              </Link>
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
