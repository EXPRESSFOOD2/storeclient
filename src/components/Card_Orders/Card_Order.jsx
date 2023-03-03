/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from "react-redux"
import { isFinished } from '../../redux/Actions/actions'
import styles from './Card_Order.module.css'

const CardOrder = (props) => {

  const dispatch = useDispatch()

  const preparing = () =>{}

  const finished = ()=>{
    dispatch(isFinished())
  }

  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <img src={props.imgURL} alt="hamburguesa" />
      </div>
      <div className={styles.col}>
        <span>{props.name}</span>
      </div>
      <div className={styles.col}>
        <span>{props.cuantity}</span>
      </div>
      <div className={styles.colIcon}>
        <button onChange={preparing}>
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{ fill: 'white' }}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M12 5.166V12h6.834A6.817 6.817 0 0 0 12 5.166z"></path></svg> 
        </button>
        <button onChange={finished}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'white' }} className={styles.ok}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default CardOrder
