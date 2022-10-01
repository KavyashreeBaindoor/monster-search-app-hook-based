import React, { Component } from 'react'
import "./card-component.style.css"

const Card =(props)=>{
 
         
      const {id,name,email}=props;
    return (
         <div className='card-container' key={id}>
         <img src={`https://robohash.org/${id}?set=set2&size=150x150`} alt={`monster ${name}`} />
         <h2>{name}</h2>
         <p>{email}</p>


</div>
    )
  
}
export default Card;