// ** React Imports
import { useEffect, useState } from "react"
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { Collapse } from "reactstrap";
import classnames from "classnames"
import { FormattedMessage } from "react-intl"

// ** Vertical Menu Array Of Items
import navigation from "@fwsrc/navigation/vertical"

// ** Utils
import { search, getAllParents } from "@layouts/utils";
import VerticalNavMenuItems from "./VerticalNavMenuItems"

const VerticalNavWithSubs = ({
  item,
  groupActive,
  setGroupActive,
  activeItem,
  setActiveItem,
  groupOpen,
  setGroupOpen,
  parentItem,
  menuCollapsed,
  menuHover,
  routerProps,
  currentActiveItem
}) => {
  const [s, setS] = useState(false)
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = item.externalLink ? "a" : NavLink
  const toggleActiveGroup = (item, parentItem) => {
    let activeArr = groupActive
    let allParents

    if (parentItem) {
      allParents = getAllParents(parentItem, "id")
      activeArr = allParents
    } else {
      activeArr.includes(item) ? activeArr.splice(activeArr.indexOf(item), 1) : activeArr.push(item)
    }

    // ** Set open group removing any activegroup item present in opengroup state
    const openArr = groupOpen.filter((val) => !activeArr.includes(val))
    setGroupOpen([...openArr])

    // **  Set Active Group
    setGroupActive([...activeArr])
  }
  // ** URL Vars
  const location = useLocation()
  const currentURL = location.pathname

  // ** To match path
  const match = matchPath(currentURL, {
    path: `${item.navLink}/:param`,
    exact: true,
    strict: false
  })

  // ** Search for current item parents
  const searchParents = (navigation, currentURL) => {
    const parents = search(navigation, currentURL, routerProps) // Search for parent object
    const allParents = getAllParents(parents, "id") // Parents Object to Parents Array
    return allParents
  }

  // ** URL Vars
  const resetActiveGroup = (navLink) => {
    const parents = search(navigation, navLink, match)
    toggleActiveGroup(item.id, parents)
  }

  // ** Reset Active & Open Group Arrays
  const resetActiveAndOpenGroups = () => {
    setGroupActive([])
    setGroupOpen([])
  }

  // ** Checks url & updates active item
  useEffect(() => {
    if (currentActiveItem !== null) {
      setActiveItem(currentActiveItem)
      const arr = searchParents(navigation, currentURL)
      setGroupActive([...arr])
    }
  }, [location])

  return (
    <li
      className={classnames({
        "nav-item": !item.children,
        disabled: item.disabled,
        active: item.navLink === activeItem,
        xsx: true
      })}
    >
      <LinkTag
        style={{ display: "flex", justifyContent: "flex-start", position: "relative" }}
        className="d-flex align-items-center subs"
        target={item.newTab ? "_blank" : undefined}
        /*eslint-disable */
        {...(item.externalLink === true
          ? {
              href: item.navLink || "/"
            }
          : {
              to: item.navLink || "/",
              isActive: (match, location) => {
                return true
              }
            })}
        /*eslint-enable */
        onClick={(e) => {
          setS(!s)
          e.preventDefault()
          parentItem ? resetActiveGroup(item.navLink) : resetActiveAndOpenGroups()
        }}
      >
        <span className={"bordr"}></span>
        <svg className={"xccc"} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <g id="Rectangle_4392" data-name="Rectangle 4392" fill="none" stroke="#707070" stroke-width="0.5">
            <rect width="20" height="20" rx="5" stroke="none" />
            <rect x="0.25" y="0.25" width="19.5" height="19.5" rx="4.75" fill="none" />
          </g>
        </svg>

        <span className="menu-item text-truncate">
          <FormattedMessage id={item.title} />
        </span>

        {s ? (
          <span
            className={`${s && "arrw"}`}
            style={{
              position: "absolute",
              right: "0px"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="8.069" height="3.935" viewBox="0 0 8.069 3.935">
              <path
                id="Path_15515"
                data-name="Path 15515"
                d="M0,0,1.992,3.058,0,5.99"
                transform="translate(7.031 1.042) rotate(90)"
                fill="none"
                stroke="#8391ea"
                stroke-linecap="round"
                stroke-width="1.5"
              />
            </svg>
          </span>
        ) : (
          <span
            style={{
              position: "absolute",
              right: "0px"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="8.069" height="3.935" viewBox="0 0 8.069 3.935">
              <path
                id="Path_15515"
                data-name="Path 15515"
                d="M0,0,1.992,3.058,0,5.99"
                transform="translate(7.031 1.042) rotate(90)"
                fill="none"
                stroke="#8391ea"
                stroke-linecap="round"
                stroke-width="1.5"
              />
            </svg>
          </span>
        )}
        {/*{item.icon}*/}
      </LinkTag>
      <ul className="menu-content xcds">
        <Collapse className={"ne_dess"} isOpen={s}>
          <div className={"ne_des"}> </div>
          <VerticalNavMenuItems
            items={item.childs}
            groupActive={groupActive}
            setGroupActive={setGroupActive}
            groupOpen={groupOpen}
            setGroupOpen={setGroupOpen}
            toggleActiveGroup={toggleActiveGroup}
            parentItem={item}
            menuCollapsed={menuCollapsed}
            menuHover={menuHover}
            routerProps={routerProps}
            currentActiveItem={currentActiveItem}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Collapse>
      </ul>
    </li>
  )
}
export default VerticalNavWithSubs
