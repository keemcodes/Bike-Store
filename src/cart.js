export function Cart(props) {
    // console.log(bikeList[0]);
  
    return (
      <>
        <div>
          <h1>Welcome!</h1>
          {/* {bikeList.map((item, index) => (
            <ul key={index}>
              {item.map((bike, index) => (
                <li key={index}>
                  <b>Bike Name:</b> {bike.name}, <b>Bike Price:</b> ${bike.price}
                  <br />
                  <button onClick={(e) => props.addToCart(bike)}>
                    Add to Cart
                  </button>
                </li>
              ))}
            </ul>
          ))} */}
        </div>
        <div>
          <h1>Cart</h1>
          <ul>
            {props.cart.map((item, index) => (
              <li key={index}>
                <b>Bike Name:</b> {item.name}, <b>Bike Price:</b> ${item.price}
              </li>
            ))}
          </ul>
          <b>Total Price:</b>
          <p>
            $
            {props.cart.reduce((a, b) => {
              return a + b.price;
            }, 0)}
          </p>
        </div>
      </>
    );
  }
  