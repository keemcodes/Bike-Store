import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Store } from "./store";
import { Cart } from "./cart";
import { NavLink } from "./navLink";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  function addToCart(bike) {
    // e.preventDefault();
    setCart((prev) => [...prev, bike]);
  }
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink text="Store" linkTo="/" />
          <NavLink text="Cart" linkTo="/cart" />
        </nav>
        <Switch>
          <Route exact path="/">
            <Store cart={cart} addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
