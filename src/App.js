import React, { Fragment, useState } from "react";

import Header from "./Header/Header";
import FoodOptions from "./FoodOptions/FoodOptions";
import Cart from "./Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <FoodOptions />
            </main>
        </Fragment>
    );
}

export default App;
