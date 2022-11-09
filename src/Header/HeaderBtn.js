import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes["number_food"]}>3</span>
        </button>
    );
};

export default HeaderBtn;
