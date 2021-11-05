import React, { Component } from 'react';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import { Home } from './components/Home';
import { Stuff } from './components/Stuff';
import { Contact } from './components/Contact';


export class Main extends Component {
  render() {
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
            <Route exact path="/" component={Home} />
            <Route path="/Stuff" component={Stuff} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}