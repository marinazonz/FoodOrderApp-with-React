import React from "react";

import FoodItemForm from "./FoodItemForm";
import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
    const price = `${props.price.toFixed(2)}$`;

    return (
        <li className={classes.food}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <FoodItemForm id={props.id} />
            </div>
        </li>
    );
};

export default FoodItem;
