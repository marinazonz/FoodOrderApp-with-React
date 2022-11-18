import React, { useEffect, useState } from "react";

import FoodItem from "./FoodItem/FoodItem";
import classes from "./AvailableFoodOpt.module.css";

const AvailableFoodOpt = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    //()->undefined

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://myprojectname-8bdfe-default-rtdb.firebaseio.com/meals.json"
            );

            if (!response.ok) {
                throw new Error("Smth went wrong");
            }

            const responseData = await response.json();

            //here response will be an object (because of specific data-base), we need an array
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
        //usual try/catch doesnt work here, cuz first await returns a promise
    }, []);

    if (isLoading) {
        return (
            <section className={classes.mealsLoading}>
                <p>Loading...</p>
                <div className='loadingio-spinner-spinner-yqazs70bnve'>
                    <div className='ldio-injz1z6ixdg'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.mealsLoading}>
                <p>{httpError}</p>
            </section>
        );
    }

    const foodList = meals.map((food) => (
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
