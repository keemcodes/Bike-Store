import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "./store";
import { Cart } from "./cart";
import { NavLink } from "./navLink";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(bike) {
    setCart((prev) => [...prev, bike]);
  }
  return (
    <div className="App">
      <Router basename={'/'}>
        <nav>
          <NavLink text="Store" linkTo={`${process.env.PUBLIC_URL}/`} />
          <NavLink text="Cart" linkTo={`${process.env.PUBLIC_URL}/cart`} />
        </nav>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Store cart={cart} addToCart={addToCart} />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/cart`}>
            <Cart cart={cart} addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
