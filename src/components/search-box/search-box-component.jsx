import React, { Component } from 'react'
import "./search-box-style.css"

const SearchBox =(props)=> {
 
         console.log("search-box-render")
    return (
      <div>
         <input
         className={`search-box ${props.className}`}
          type="search"
          placeholder={props.placeholder}
          onChange={props.onChangeHandler}
        />
      </div>
    )
  
}

export default SearchBox;