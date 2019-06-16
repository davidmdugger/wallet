import React, { PureComponent } from 'react'
import { FaChevronCircleDown } from 'react-icons/fa';

import './Card.scss';

class Card extends PureComponent {
  state = {
    isCardHidden: true
  }

  hiddenCardToggle = () => {
    console.log('toggle');
    this.setState({
      isCardHidden: !this.state.isCardHidden
    })
  }

  render() {
    const { isCardHidden } = this.state;
    const cryptoInfoStyle = isCardHidden ? 'hide' : 'crypto-info show';
    return (
      <div className="card-container">
        <div className="card-header">
          <div className="crypto-logo">
            B
          </div>
          <div className="crypto-name">
            <p>Bitcoin | Currency</p>
          </div>
          <button onClick={this.hiddenCardToggle} className="info-toggle"><FaChevronCircleDown /></button>
        </div>
        <div className={cryptoInfoStyle}>
          <p>Amount invested</p>
          <p>percentage gain</p>
          <p>dollar gain</p>
        </div>
      </div>
    )
  }
}

export default Card;