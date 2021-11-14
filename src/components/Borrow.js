import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Borrow extends Component {
    render() {
        return (
            <div>
                <h2>Borrow</h2>
                <NavLink className="back-btn" to="/" >{'<'} back </NavLink>
                <p>
                    Yaddo krishnamurti
                </p>

            </div>
        );
    }

}