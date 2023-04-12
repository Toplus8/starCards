import React from 'react';
import { useState, useEffect } from 'react';
import getData from '../helpers/getData.js';
import Card from './Card.jsx';

const Cards = () => {
  const [cards, setCards] = useState([]);
  //console.log(cards)
  useEffect(() => {
    getDetails();
  }, cards); 
      
  const getDetails = () => {
    getData('https://swapi.dev/api/people')
    .then((data) => {
        setCards(data.results);
    })
      .catch((error) => console.error(error));
  }
  const hide = (number)=>{
    console.log(number);
    const newObjeto = [...cards];
    const result = newObjeto.filter(card => card != cards[number]);
    setCards(result);
  }
  return (
    <div>
        {cards.map((card, index) => (
            <div>
              < Card card={card} />
              <button onClick={()=>hide(index)}>Enviar con la fuerza</button>            
              <br />   
              ------         
            </div>
           
        ))}
    </div>
  )
}

export default Cards;
//<img src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}></img> esto es para sacar la foto ayudnándonos del index