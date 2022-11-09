import React, { Fragment } from "react";

import HeaderBtn from "./HeaderBtn";
import foodImage from "../Img/food.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MarinaFood</h1>
                <HeaderBtn onClick={props.onShowCart} />
            </header>
            <div className={classes["main_image"]}>
                <img src={foodImage} alt='food pic' />
            </div>
        </Fragment>
    );
};

export default Header;
