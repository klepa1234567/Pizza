import logoScg from "../assets/pizza-logo.svg";
import React from "react"
import Button from "./Button";
import {Link} from "react-router-dom";


function Header() {
    return(
        <div className="header">
            <div className="container">
              <Link to='/'> <div className="header__logo">
                    <img width="38" src={logoScg} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
              </Link>
                <div className="header__cart">
                    <Link to='/cart'>
                        <Button />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header