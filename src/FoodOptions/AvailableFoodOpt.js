import React from "react";

import FoodItem from "./FoodItem/FoodItem";
import classes from "./AvailableFoodOpt.module.css";

const foodOptions = [
    {
        id: "f1",
        name: "Pelmeshki",
        description: "Super tasty. Russian.",
        price: 20.99,
    },
    {
        id: "f2",
        name: "Borsh",
        description: "Super tasty, super red.",
        price: 15.5,
    },
    {
        id: "f3",
        name: "Pasta with burrata",
        description: "Very good, very italian. With tomatoes.",
        price: 18.3,
    },
    {
        id: "f4",
        name: "Pizza de Casa",
        description: "Homemade with love. Secret recipe.",
        price: 25.55,
    },
];

const AvailableFoodOpt = () => {
    const foodList = foodOptions.map((food) => (
        <FoodItem
            key={food.id}
            id={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
        />
    ));

    return (
        <section className={classes.food}>
            <ul>{foodList}</ul>
        </section>
    );
};

export default AvailableFoodOpt;
