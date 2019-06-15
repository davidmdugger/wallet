import React, { PureComponent, Fragment } from 'react'
import { Link } from 'gatsby';
import { FaBars, FaRegTimesCircle } from 'react-icons/fa';

import './Navbar.scss';

const routes = [
  {
    path: '/',
    text: 'home'
  },
  {
    path: '/about',
    text: 'about'
  },
  {
    path: '/contact',
    text: 'contact'
  },
  {
    path: '/reports',
    text: 'reports'
  }
]

class Navbar extends PureComponent {
  state = {
    isMenuExpanded: false
  }

  toggleMenu = () => {
    this.setState({
      isMenuExpanded: !this.state.isMenuExpanded
    })
  }

  insideNavHTML = () => {
    return this.state.isMenuExpanded ? (
      <ul>
        <FaRegTimesCircle className="close-btn" />
        {routes.map((route, idx) => (
          <Link key={idx} to={route.path}>
            <li>{route.text}</li>
          </Link>
        ))}
      </ul>
    ) : (
        <div className="bars-wrapper">
          <div className="bars-radius">
            <FaBars />
          </div>
        </div>
      )
  }

  render() {
    const menuStyle = this.state.isMenuExpanded ? "big" : "small";
    return (
      <nav onClick={this.toggleMenu} className={menuStyle}>
        {this.insideNavHTML()}
      </nav>
    )
  }
}

export default Navbar;