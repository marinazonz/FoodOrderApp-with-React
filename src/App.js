import React, { useState } from "react";

import Header from "./Header/Header";
import FoodOptions from "./FoodOptions/FoodOptions";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <FoodOptions />
            </main>
        </CartProvider>
    );
}

export default App;
