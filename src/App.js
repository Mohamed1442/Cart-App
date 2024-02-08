import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import { toggleActions } from "./store/toggle";
import { fetchData, sendData } from "./store/toggle-actions";

let isInitail = true;
let isFetching = true;

function App() {
  const cart = useSelector((state) => state.items);
  const toggle = useSelector((state) => state.ui.toggle);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitail) {
      isInitail = false;
      return;
    }

    if (isFetching) {
      isFetching = false;
      return;
    }

    dispatch(sendData(cart));

    const timer = setTimeout(() => {
      dispatch(toggleActions.showNotification(null));
    }, 1000);
    return () => clearTimeout(timer);
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
