import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.items.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 && (
        <p className={classes["no-content"]}>No Items Added yet</p>
      )}
      <ul>
        {items.map((item) => (
          <CartItem
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.total,
              price: item.price,
              id: item.id,
            }}
            key={item.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
