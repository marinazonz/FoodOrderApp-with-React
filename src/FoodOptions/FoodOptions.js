import React, { Fragment } from "react";

import FoodIntro from "./FoodIntro";
import AvailableFoodOpt from "./AvailableFoodOpt";

const FoodOptions = () => {
    return (
        <Fragment>
            <FoodIntro />
            <AvailableFoodOpt />
        </Fragment>
    );
};

export default FoodOptions;
