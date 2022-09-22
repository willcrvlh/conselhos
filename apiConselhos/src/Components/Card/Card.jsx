import React from "react";
import S from "./Card.module.css";
import { useState } from "react";
import { useEffect } from "react";


function Card() {
  const [conselho, setConselho] = useState([]);

  async function handleRequisicao(){
    const url = `https://api.adviceslip.com/advice`
    const response = await fetch(url)
    const json = await response.json()
    
    const resposta = {
      numero : json.slip.id,
      conselho: json.slip.advice
    }
    setConselho(resposta)
  }
  
  useEffect(() =>{
    handleRequisicao()
  },[])
  return (
      <div className={S.card}>
      <h1 className={S.titulo}>Advice #{!!conselho ? conselho.numero: ''}</h1>
      <p className={S.text}>{!!conselho ? conselho.conselho : ''}</p>
      <img src="../../src/assets/division.svg" alt="" />
      <button type="radio" className={S.radio} onClick={handleRequisicao}>
        <img src="../../src/assets/button.svg" alt="" />
      </button>
      
    </div>
  );
}

export default Card;
