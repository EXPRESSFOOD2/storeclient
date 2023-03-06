import React, { useState } from "react";
import styles from "./ClosingSales.module.css";

const ClosingSales = ({ date, amount, data }) => {
  const [view, setView] = useState(false)
  const handleView = () => {
    setView(view?false:true)
  }
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <span>{date}</span>
                <span>{`$${amount}`}</span>
                <div onClick={handleView}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1666/1666578.png"
                        alt=""
                    />
                </div>
            </div>
            {view && (<div className={styles.tickets}>
                {data.map((ele) => (
                    <div className={styles.ticket} key={ele.code}>
                        <span>{`Ticket: ${ele.code}`}</span>
                        <span>{`Total: $${ele.totalAmountPerorder}`}</span>
                    </div>
                ))}
            </div>)}
        </div>
    );
};

export default ClosingSales;
