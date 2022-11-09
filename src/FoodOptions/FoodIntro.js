import React from "react";

import classes from "./FoodIntro.module.css";

const FoodIntro = () => {
    return (
        <section className={classes.intro}>
            <h2>The best food from our amazing shef Marina!</h2>
            <p>Choose food from the list, add needed amount to the cart.</p>
            <p>Voila!</p>
            <p>
                No need to cook for the husband anymore, everything is ready and
                delivered for you! You can go and do your nails instead, queen!
            </p>
        </section>
    );
};

export default FoodIntro;
