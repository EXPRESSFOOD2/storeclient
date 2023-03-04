import React from "react";
import Sales from "../../components/Sales/Sales";
import styles from "./MySales.module.css";

const MySales = () => {
    return (
        <div className={styles.page}>
            <div className={styles.sales}>
                <div className={styles.container}>
                    <h1>mis vientas</h1>
                    <div className={styles.description}>
                        <span>Fecha</span>
                        <span>Código</span>
                        <span>Total día</span>
                    </div>
                    <Sales />
                    <Sales />
                    <Sales />
                    <Sales />
                    <Sales />
                    <Sales />
                    <Sales />
                    <Sales />
                    <Sales />
                </div>
                <img
                    src="https://tudashboard.com/wp-content/uploads/2019/06/ventas-hasta-la-fecha.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default MySales;
