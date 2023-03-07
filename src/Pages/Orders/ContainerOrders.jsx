import  { useEffect, useState } from "react";
import styles from "./Orders.module.css";
import Order from "../../components/Card_Orders/Order/Order";

import { useDispatch, useSelector } from "react-redux";
import { delivery, getOrders } from "../../redux/Actions/actions";

const OrderPage = () => {
  const ordersState = useSelector((state) => state.orders);
  const [orders, setOrders] = useState(ordersState);
  const dispatch = useDispatch();

  useEffect(() => {
    !orders.length && dispatch(getOrders())
  },[])


  // const delivered = (e) => {
  //   const value = e.target.value;
  //   setOrders(orders.filter((order) => order.id != value));
  //   delivery({ id: value, status: "Entregada" });
  // };
s
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {orders.length ? (
          orders.map((item) => <Order item={item} />)
        ) : (
          <div className={styles.message}>
            <h2>Sin pedidos</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
