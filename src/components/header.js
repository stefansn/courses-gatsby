import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'darkslategrey',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div style={{float: 'right'}}>
      <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <i src="gatsby-icon.png" />
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
