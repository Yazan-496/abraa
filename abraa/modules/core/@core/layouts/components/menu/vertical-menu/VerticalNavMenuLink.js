// ** React Imports
import { useEffect } from "react"
import { NavLink, useLocation, matchPath } from "react-router-dom"

// ** Third Party Components
import { Badge } from "reactstrap"
import classnames from "classnames"
import { FormattedMessage } from "react-intl"

// ** Vertical Menu Array Of Items
import navigation from "@fwsrc/navigation/vertical"

// ** Utils
import { search, getAllParents } from "@layouts/utils"

const VerticalNavMenuLink = ({
  item,
  groupActive,
  setGroupActive,
  activeItem,
  setActiveItem,
  groupOpen,
  setGroupOpen,
  toggleActiveGroup,
  parentItem,
  routerProps,
  currentActiveItem
}) => {
  // ** Conditional Link Tag, if item has newTab or externalLink props use <a> tag else use NavLink
  const LinkTag = item.externalLink ? "a" : NavLink

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
        active: item.navLink === activeItem
      })}
    >
      <LinkTag
        style={{ display: "flex", justifyContent: "flex-start" }}
        className="d-flex align-items-center"
        target={item.newTab ? "_blank" : undefined}
        /*eslint-disable */
        {...(item.externalLink === true
          ? {
              href: item.navLink || "/"
            }
          : {
              to: item.navLink || "/",
              isActive: (match, location) => {
                if (!match) {
                  return false
                }

                if (match.url && match.url !== "" && match.url === item.navLink) {
                  currentActiveItem = item.navLink
                }
              }
            })}
        /*eslint-enable */
        onClick={(e) => {
          if (!item.navLink.length) {
            e.preventDefault()
          }
        }}
      >
        {item.isSub ? (
          <span className={"xccc"}>
            {item.navLink === activeItem ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                <g
                  id="Rectangle_4423"
                  data-name="Rectangle 4423"
                  fill="#6d7bf0"
                  stroke="#6d7bf0"
                  stroke-width="1"
                >
                  <rect width="13" height="13" rx="6.5" stroke="none" />
                  <rect x="0.5" y="0.5" width="12" height="12" rx="6" fill="none" />
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                <g
                  id="Rectangle_4422"
                  data-name="Rectangle 4422"
                  fill="#edefff"
                  stroke="#6d7bf0"
                  stroke-width="1"
                >
                  <rect width="13" height="13" rx="6.5" stroke="none" />
                  <rect x="0.5" y="0.5" width="12" height="12" rx="6" fill="none" />
                </g>
              </svg>
            )}
          </span>
        ) : (
          <svg
            className={"xccc"}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g id="Rectangle_4392" data-name="Rectangle 4392" fill="none" stroke="#707070" stroke-width="0.5">
              <rect width="20" height="20" rx="5" stroke="none" />
              <rect x="0.25" y="0.25" width="19.5" height="19.5" rx="4.75" fill="none" />
            </g>
          </svg>
        )}
        <span className="menu-item text-truncate">
          <FormattedMessage id={item.title} />
        </span>

        {item.badge && item.badgeText ? (
          <Badge className="ml-auto mr-1" color={item.badge} pill>
            {item.badgeText}
          </Badge>
        ) : null}
        {/*{item.icon}*/}
      </LinkTag>
    </li>
  )
}

export default VerticalNavMenuLink
