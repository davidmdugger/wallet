import React, { PureComponent, Fragment } from 'react'
import { Link } from 'gatsby';

import './Navbar.css';

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
      <ul style={{ position: 'relative' }}>
        {routes.map((route, idx) => (
          <Link key={idx} to={route.path}>
            <li>{route.text}</li>
          </Link>
        ))}
      </ul>
    ) : (
        <div style={{ color: 'white', width: '100%', height: '100%' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            X
          </div>
        </div >
      )
  }

  render() {
    const menuStyle = this.state.isMenuExpanded ? "big" : "small";
    return (
      <nav onClick={this.toggleMenu} className={menuStyle}>
        {this.state.isMenuExpanded && (
          <span style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>X</span>
        )}
        {this.insideNavHTML()}
      </nav>
    )
  }
}

export default Navbar;