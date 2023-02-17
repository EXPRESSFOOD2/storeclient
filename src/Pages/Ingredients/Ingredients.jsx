import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IngredientsCards from '../../components/IngredientsCards/IngredientsCards'
import { getAllIngredients } from '../../redux/Actions/actions'
import NavBar from '../../Shared/NavBar/NavBar'
import styles from './Ingredients.module.css';
import { Link } from 'react-router-dom'

const Ingredients = () => {
    const ingredients = useSelector(state => state.ingredients)
    const dispatch = useDispatch()
    
    useEffect(() => {
        !ingredients.length && dispatch(getAllIngredients())
    })
  return (
      <div>
          <NavBar />
          <div className={styles.page}>
              <div className={styles.create}>
                  <Link to="/ingredient/create">
                      <button>Crear Ingrediente</button>
                  </Link>
              </div>
              <IngredientsCards />
          </div>
      </div>
  );
}

export default Ingredients