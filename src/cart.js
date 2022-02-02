export function Cart(props) {
  return (
    <>
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
