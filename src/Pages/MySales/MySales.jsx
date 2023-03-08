import React, { useEffect, useState } from "react";
// import Sales from "../../components/Sales/Sales";
import styles from "./MySales.module.css";
import ClosingSales from "../../components/Closing_Sales/ClosingSales";
import { useDispatch, useSelector } from "react-redux";
import { getOrderBalance } from "../../redux/Actions/actions";
import Graphic from "../../components/Graphic/Graphic";

const MySales = () => {
    const dispatch = useDispatch();
    const balance = useSelector((state) => state.balance);
    const [dates] = useState(Object.keys(balance).sort((a, b) => new Date(b) - new Date(a))) 
    let total = 0
    const values = []

    useEffect(() => {
        dispatch(getOrderBalance());
    }, []);

    for (const date of dates) {
        total += parseInt(balance[date]?.amount);
        values.length<=30 && values.push(parseInt(balance[date]?.amount));
    }
    // console.log(balance);

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.sales}>
                    <div className={styles.description}>
                        <span>Fecha</span>
                        <span className={styles.total}>Total</span>
                        <span>Detalle</span>
                    </div>
                    {dates.map((date) => (
                        <ClosingSales
                            date={date}
                            amount={balance[date]?.amount}
                            data={balance[date]?.data}
                            key={date}
                        />
                    ))}
                </div>
                <div className={styles.graphic}>
                    <Graphic total={total} values={values.reverse()} dates={dates.reverse()} />
                </div>
            </div>
        </div>
    );
};

export default MySales;
