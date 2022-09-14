import React from 'react'
import S from './Card.module.css'



function Card() {
  return (
    <div className={S.card}>
        <h1 className={S.titulo}>Advice #</h1>
        <p className={S.text}></p>
        <button type='radio' className={S.radio}><img src="../../src/assets/button.svg" alt="" /></button>
    </div>
  )
}

export default Card