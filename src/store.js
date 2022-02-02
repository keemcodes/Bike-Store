import { bikeList } from "./data/bikeList";
import { useState, useEffect } from "react";
export function Store(props) {
  const [storeFilter, setStoreFilter] = useState();
  const [newBikeList, setNewBikeList] = useState([]);
  function handleStoreFilterChange(e) {
    setStoreFilter(e.target.value);
  }
  useEffect(() => {
    setNewBikeList([]);
    bikeList.forEach((item) =>
      setNewBikeList((prev) => [
        ...prev,
        ...item.filter((bike) => bike.tags?.includes(storeFilter)),
      ])
    );
  }, [storeFilter]);
  console.log(newBikeList);
  return (
    <div>
      <h1>Welcome!</h1>
      <h5>{props.cart.length} items added to cart</h5>
      <input type="text" name="name" onChange={handleStoreFilterChange} />
      <h5>{newBikeList.length} search results found</h5>
      {newBikeList.length === 0 ? (
        bikeList.map((item, index) => (
          <ul key={index}>
            {item.map((bike, index) => (
              <li key={index}>
                <b>Bike Name:</b> {bike.name}, <b>Bike Price:</b> ${bike.price}
                <br />
                <button onClick={() => props.addToCart(bike)}>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        ))
      ) : (
        <ul>
          {newBikeList.map((bike, index) => (
            <li key={index}>
              <b>Bike Name:</b> {bike.name}, <b>Bike Price:</b> ${bike.price}
              <br />
              <button onClick={() => props.addToCart(bike)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
