import React from 'react'
import styles from './Card_Ingredients.module.css';

const CardIngredient = ({id, name, medida}) => {
  return (
      <div className={styles.ingredient}>
          <div className={styles.id}>
              <span>{id}</span>
          </div>
          <div className={styles.name}>
              <span>{name}</span>
          </div>
          <div className={styles.medida}>
              <span>{medida}</span>
          </div>
    </div>
  )
}

export default CardIngredient;