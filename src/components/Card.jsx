import React from 'react'

const Card = ({card}) => {
    const number = card.url.slice(-2,-1);
    
  return (
    <div>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${number}.jpg`}></img>
        <h3>Nombre: {card.name} </h3>
        <h3> Género: {card.gender} </h3> 
    </div>
  )
}

export default Card