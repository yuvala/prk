import React, { Component } from 'react';
import { Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Stuff } from './components/Stuff';
import { Contact } from './components/Contact';
import { Borrow } from './components/Borrow';
import { Loan } from './components/Loan';
//import { TOP_LEVEL_ROUTES } from './model';


export class Main extends Component {
  render() {
    // const navigationList = TOP_LEVEL_ROUTES;
    // // .map(
    // //   ({ exact, path, name }) => (
    // //   <Button
    // //     component={Link}
    // //     to={path}
    // //     key={path}
    // //     exact={`${exact}`}
    // //   >
    // //     {name}
    // //   </Button>

    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Stuff" element={<Stuff />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Borrow" element={<Borrow />} />
              <Route path="/Loan" element={<Loan />} />

            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}