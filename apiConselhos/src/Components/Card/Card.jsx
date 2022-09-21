import React from "react";
import S from "./Card.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Card() {
  const [conselho, setConselho] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setConselho(response.data);
      })
      .catch(() => {
        console.log("deu merda");
      });
  }, []);
  
  return (
      <div className={S.card}>
      <h1 className={S.titulo}>Advice #</h1>
      <p className={S.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas iusto fuga impedit, natus odit ut consequatur veniam eum cum esse odio quidem perferendis saepe labore? Suscipit consequuntur magni quidem.</p>
      <img src="../../src/assets/division.svg" alt="" />
      <button type="radio" className={S.radio}>
        <img src="../../src/assets/button.svg" alt="" />
      </button>
    </div>
  );
}

export default Card;
