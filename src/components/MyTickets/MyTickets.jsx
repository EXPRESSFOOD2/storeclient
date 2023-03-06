import React, { useState } from "react";
import styles from "./MyTickets.module.css";

const MyTickets = ({ code, total, data }) => {
    const [view, setView] = useState(false);
    const handleView = () => {
        setView(view ? false : true);
    };
    return (
        <div className={styles.page}>
            <div className={styles.ticket} onClick={handleView}>
                <span>{`Ticket: ${code}`}</span>
                <span>{`Total: $${total}`}</span>
            </div>
            {view && (
                    <div className={styles.detail}>
                        {data.map((ele) => (
                            <div className={styles.info} key={ele.name}>
                                <img src={ele.url_image} alt="" />
                                <span>{ele.name}</span>
                                <span>{`$${ele.productPrice}`}</span>
                                <span>{ele.quantityPerOrder}</span>
                                <span>{`$${ele.totalAmountOfProductPerOrder}`}</span>
                            </div>
                        ))}
                    </div>
            )}
        </div>
    );
};

export default MyTickets;
