/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react'
import MenuCards from '../../components/MenuCards/MenuCards'
import NavBar from '../../Shared/NavBar/NavBar'
import Filter from '../../Shared/Filter/Filter'

import { useDispatch, useSelector } from 'react-redux'
import { getMenu } from '../../redux/Actions/actions'

import { NavLink } from 'react-router-dom'
import style from './menu.module.css'
const Menu = () => {
  const dispatch = useDispatch()
  const render = useSelector((state) => state.render)
  const [orders , setOrders] = useState("")


  // Dispatch

  useEffect(() => {
    if (!render.length) {
      dispatch(getMenu())
    }
  }, [render, dispatch, orders])

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.rows}>
        <NavLink to="/menu/create">
          <button className={style.button}>Crear menú</button>
        </NavLink>
      </div>

      <div className={style.menuFilter}>
        <Filter render={render} setOrders={setOrders} />
        <MenuCards render={render} />
      </div>
    </div>
  )
}

export default Menu
