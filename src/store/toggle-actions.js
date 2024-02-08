import { itemsActions } from "./items";
import { toggleActions } from "./toggle";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchFn = async () => {
      const response = await fetch(
        "https://react-http-aa68c-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Can't Fetch Data");
      }

      let data = await response.json();
      // if (!data.items) {
      //   data = { items: [], totalQuantity: 0 };
      // }
      // console.log(data);
      return data;
    };
    try {
      const data = await fetchFn();
      dispatch(
        itemsActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const sendData = (cart) => {
  return (dispatch) => {
    const sendItems = async () => {
      dispatch(
        toggleActions.showNotification({
          title: "Pending",
          message: "Sending data...",
        })
      );

      const response = await fetch(
        "https://react-http-aa68c-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      dispatch(
        toggleActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data sent successfully",
        })
      );
    };

    sendItems().catch(() => {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data failed",
        })
      );
    });
  };
};
