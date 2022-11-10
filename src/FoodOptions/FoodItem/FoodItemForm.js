import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        //this value is always a string (even if the type of input is number)
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 9
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "9",
                    defaultValue: "1",
                }}
            />
            <button>Add to Cart</button>
            {!amountIsValid && <p>Please enter a valid amount.</p>}
        </form>
    );
};

export default FoodItemForm;
