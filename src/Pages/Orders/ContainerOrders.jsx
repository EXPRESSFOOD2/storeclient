import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContainerCardsOrders from "../../components/MenuCardsOrders/ContainerCardsOrders";
import { getMenu } from '../../redux/Actions/actions'


import styles from "./Orders.module.css"

const Orders = () =>{
    const dispatch = useDispatch()
    const render = useSelector((state) => state.render)
    const [orders , setOrders] = useState("")
    console.log(setOrders);

    useEffect(() => {
        if (!render.length) {
          dispatch(getMenu())
        }
      }, [render, dispatch, orders])
    

    return (
        <div className={styles.container}>
            <ContainerCardsOrders render={render} />
        </div>
    )
}

export default Orders