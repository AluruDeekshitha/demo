import React from 'react'

export default function Fruits(props) {
  return (
    <div>
      {
        props.myFruits.map((item)=>{
            return(
                <div key={item.fruitPrice}>
                    <p>Name:{item.fruitName}</p>
                    <p>Price:{item.fruitPrice}</p>
                    <p>Description:{item.fruitDescription}</p>
                </div>
            )
        })
      }
    </div>
  )
}
