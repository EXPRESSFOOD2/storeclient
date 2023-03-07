import React, { useEffect } from "react";
// import Sales from "../../components/Sales/Sales";
import styles from "./MySales.module.css";
import ClosingSales from "../../components/Closing_Sales/ClosingSales";
import { useDispatch, useSelector } from "react-redux";
import { getOrderBalance } from "../../redux/Actions/actions";
// import {mYdata} from "../../MisPedidos"

const MySales = () => {
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.balance);
    const dates = Object.keys(balance);

    useEffect(() => {
        dispatch(getOrderBalance());
    }, []);
    return (
        <div className={styles.page}>
            <div className={styles.sales}>
                <div className={styles.description}>
                    <span>Fecha</span>
                    <span className={styles.total}>Total</span>
                    <span>Detalle</span>
                </div>
                {dates.map(date => (
                    <ClosingSales date={date} amount={balance[date]?.amount} data={balance[date]?.data} key={date} />
                ))}
            </div>
        </div>
    );
};

export default MySales;
