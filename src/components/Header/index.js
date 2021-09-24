import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {BsBriefcaseFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <div className="nav-content">
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/Jobs" className="nav-link">
            <li>Jobs</li>
          </Link>
        </ul>
      </div>

      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <AiFillHome className="nav-bar-icon" />
            </li>
          </Link>
          <Link to="/Jobs">
            <li className="nav-menu-item-mobile">
              <BsBriefcaseFill className="nav-bar-icon" />
            </li>
          </Link>
        </ul>
      </div>
      <button
        type="button"
        className="logout-desktop-btn"
        onClick={onClickLogout}
      >
        Logout
      </button>
      <button
        type="button"
        className="logout-mobile-btn"
        onClick={onClickLogout}
      >
        <FiLogOut className="nav-bar-icon" />
      </button>
    </nav>
  )
}
export default withRouter(Header)
