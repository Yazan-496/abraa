import { useState, useEffect } from "react"
import { searchCategories } from "../../../../redux/actions"

export default function ListCategory(props) {
  const [subCategories, setSubCategories] = useState([])
  const [propsArraySortState, setPropsArraySortState] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    handleSearch(searchValue)
  }, [searchValue])
  useEffect(() => {
    props.categoryArray?.length > 0 ? setLoading(false) : setLoading(true)
  }, [props])
  let propsArraySort = []
  useEffect(() => {
    props.categoryArray?.length > 0 &&
      (propsArraySort = props.categoryArray.sort(function (a, b) {
        var textA = a.category_translations[0]?.category_name.toUpperCase()
        var textB = b.category_translations[0]?.category_name.toUpperCase()
        return textA < textB ? -1 : textA > textB ? 1 : 0
      })),
      setPropsArraySortState(propsArraySort)
  }, [props])

  const handleSearch = (e) => {
    setLoading(true)
    e !== null &&
      searchCategories(
        e,
        (d) => {
          setTimeout(() => {
            setLoading(false)
          }, 4000)
          setSubCategories(d?.categories?.data?.length > 0 ? d?.categories?.data : null)
        },
        (err) => {
          setTimeout(() => {
            setLoading(false)
          }, 2000)
          console.log(err, "err")
        }
      ),
      setTimeout(() => {
        setLoading(false)
      }, 1000)
  }
  useEffect(() => {
    console.log(propsArraySortState, "propsArraySortState")
  }, [propsArraySortState])
  useEffect(() => {
    console.log(searchValue, "searchValue")
  }, [searchValue])
  useEffect(() => {
    console.log(loading, "loading")
  }, [loading])

  return (
    <div className="content" id="content">
      <div data-reactroot className="modal-content category-modals" style={{ color: "black" }}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            List New Product
          </h4>
        </div>
        <div className="modal-body">
          <div className="input-group search">
            <input
              type="text"
              id="search_keyval"
              className="form-control"
              onChange={(e) => setSearchValue(e.target.value ? e.target.value : null)}
              placeholder="Please type here what you want to sell"
              style={{ minHeight: 50 }}
            />
            <span className="input-group-addon" onClick={() => handleSearch(searchValue)}>
              <a href="#">
                {/* react-text: 11 */} {/* /react-text */}
                <i className="fa fa-search" />
              </a>
            </span>
          </div>
          <div className="selectcattxt simpleor"></div>
          <div className="selectcattxt" style={{ marginBottom: 8 }}>
            {" "}
            Please Select From Below Categories
          </div>

          {!loading ? (
            <div className="search-results">
              {propsArraySortState.length > 0 && !searchValue ? (
                <ul>
                  {propsArraySortState?.map((category) => {
                    return (
                      <li
                        key={category?.id}
                        onClick={() => {
                          props.handleSelectCategory(category), setSearchValue(null)
                        }}
                      >
                        <a href="#" id={category?.id} style={{ color: "black" }}>
                          {category?.category_translations[0]?.category_name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              ) : subCategories !== null ? (
                <ul>
                  {subCategories?.map((category) => {
                    return (
                      <li
                        key={category?.id}
                        onClick={() => {
                          props.handleSelectCategory(category), setSearchValue(null)
                        }}
                      >
                        <a href="#" id={category?.id} style={{ color: "black" }}>
                          {category?.category_translations[0]?.category_name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              ) : subCategories === null ? (
                <div className="spinner15-wrapper">
                  <div className=""> No Data Found</div>
                </div>
              ) : (
                <div className="spinner15-wrapper">{/* <div className="spinner14"></div> */}</div>
              )}
            </div>
          ) : (
            <div className="spinner15-wrapper">
              <div className="spinner14"></div>
            </div>
          )}

          <div>
            <button
              onClick={() => props.handleMain(true)}
              style={{ color: "#1180b0" }}
              className="btn btn-simple btn-sm"
            >
              <i style={{ color: "#1180b0" }} id="backmainbtn" className="fa fa-arrow-left" />
              {/* react-text: 55 */} Back to Main{/* /react-text */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
