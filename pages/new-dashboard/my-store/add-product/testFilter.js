import { useState, useEffect } from "react"

export default function ListCategoryTest(props) {
  const posts = [
    {
      title: "How to create a react search bar"
    },
    {
      title: "How to mock api data in Node"
    }
  ]
  const [state, setstate] = useState({
    query: "",
    list: []
  })

  const handleSearch = (e) => {
    const results = posts.filter((post) => {
      if (e.target.value === "") return posts
      return post.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setstate({
      query: e.target.value,
      list: results
    })
  }
  return (
    <div className="content" id="content">
      <div data-reactroot className="modal-content category-modals" style={{ color: "black" }}>
        <div className="modal-body">
          <div className="input-group search">
            <input
              type="text"
              id="search_keyval"
              className="form-control"
              value={state.query}
              onChange={handleSearch}
              placeholder="Please type here what you want to Search"
              style={{ minHeight: 50 }}
            />
          </div>
          {state.query === ""
            ? posts.map((post) => {
                return <li key={post.title}>{post.title}</li>
              })
            : state.list.map((post) => {
                return <li key={post.title}>{post.title}</li>
              })}

          <div></div>
        </div>
      </div>
    </div>
  )
}
