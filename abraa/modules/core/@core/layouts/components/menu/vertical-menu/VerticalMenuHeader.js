// ** React Imports
import { useEffect } from "react"

// ** Third Party Components
import { Disc, Circle } from "react-feather"

const VerticalMenuHeader = (props) => {
  // ** Props
  const { menuCollapsed, setMenuCollapsed, setMenuVisibility, setGroupOpen, menuHover } = props

  // ** Reset open group
  useEffect(() => {}, [menuHover, menuCollapsed])

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(true)}
        />
      )
    } else {
      return (
        <Circle
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(false)}
        />
      )
    }
  }

  return (
    <div style={{ marginTop: "10px", marginBottom: "25px", textAlign: "center" }}>
      <svg
        style={{
          fill: "#4a88eb",
          height: "24px",
          width: "24px",
          marginRight: "0.15rem"
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        enableBackground="new 0 0 20 20"
        xmlSpace="preserve"
        stroke="rgba(233, 236, 239, 0.5)"
      >
        <path
          d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
 C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z"
        />
        <path
          d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
 c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z"
        />
        <path
          d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
 c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z"
        />
      </svg>
      <span style={{ color: "white" }} className="align-middle mr-3">
        Abraa.com
      </span>
    </div>
  )
}

export default VerticalMenuHeader
