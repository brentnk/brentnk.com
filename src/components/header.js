import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const headerStyle = {
  // background: `#0b0b16`,
  background: `#19647E`,
  marginBottom: `1em`,
}

const divStyle = {
  margin: `0`,
  maxWidth: 960,
}

const spanStyle = { margin: 0 }
const linkStyle = {
  // color: `#119da4`,
  color: `#0b0b16`,
  textDecoration: `none`,
}

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <div style={divStyle}>
      <span style={spanStyle}>
        <Link to="/" style={linkStyle}>
          {siteTitle}
        </Link>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
