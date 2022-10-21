import React from 'react';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>Hello {this.props.potato ? this.props.potato : ', fix header props please!'}</h1>
      </>
    );
  }
}

export default Header;
