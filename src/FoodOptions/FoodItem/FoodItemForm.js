import Input from "../../UI/Input";
import classes from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input
                label='Amount'
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "9",
                    defaultValue: "0",
                }}
            />
            <button>Add to Cart</button>
        </form>
    );
};

export default FoodItemForm;
