import React, { Component } from 'react'
import "./card-list-component-style.css"
import Card from '../card-component/card-component';


 const CardList =(props)=>{
         
  
         
        const {monsters}=props;
    return (
      <div className='card-list'>
         {monsters.map((item)=>{
                 const {id,name,email}=item;
                  return <Card id={id} name={name} email={email}/>
         
                  
                  

         })}
      </div>
    )
  
}
export default CardList;