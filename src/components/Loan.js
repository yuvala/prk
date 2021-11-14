import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Loan extends Component {
    render() {
        return (
            <div>
                <h2>Loan</h2>
                <NavLink className="back-btn" to="/" >{'<'} back </NavLink>
                <p>
                    Loan krishnamurti
                </p>

            </div>
        );
    }

}