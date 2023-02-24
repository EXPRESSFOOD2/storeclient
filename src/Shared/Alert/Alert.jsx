/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from './alert.module.css'
import data from './styleType.json'

export default function Alert ({
  title = 'Correcto',
  message = 'Todo salio bien',
  type = 'danger'
}) {
  const img = data[type]?.icon || data.success.icon

  return (
    <div className={style.container} id="alertBox">
      <div className={style.box}>
        <img
          style={{ borderLeft: `5px solid ${data[type].color}` }}
          src={img}
          alt=""
        />
        <div className={style.infoContainer}>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
        <div
          className={style.close}
          onClick={() => {
            document.getElementById('alertBox').remove()
          }}
        >
          X
        </div>
      </div>
    </div>
  )
}
