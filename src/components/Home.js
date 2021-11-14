import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Home extends Component {
  // handleClick = () => history.push('/some-route');
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>


        <div>
          <NavLink className="main-button loan" to="/Loan">Loan</NavLink>
          <NavLink className="main-button borrow" to="/Borrow">Borrow</NavLink>
        </div>
      </div>
    );
  }
}