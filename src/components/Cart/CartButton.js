import classes from "./CartButton.module.css";
import { toggleActions } from "../../store/toggle";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.items.totalQuantity);

  const toggleButtonHandler = () => {
    dispatch(toggleActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
