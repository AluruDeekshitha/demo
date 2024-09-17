import React, { useState } from 'react'
import Fruits from './Fruits'
import './stylings/Registration.css'
export default function Register() {
  const [fruits,setFruits]=useState([
    {fruitName:"Watermelon",fruitPrice:40,fruitDescription:"Good for health"},
    {fruitName:"Apple",fruitPrice:20,fruitDescription:"Keeps Doctor Away"},
    {fruitName:"Banana",fruitPrice:3,fruitDescription:"Gives Calicium"},
    {fruitName:"Mango",fruitPrice:25,fruitDescription:"Seasonal fruit"}
  ])
  return (
    <div className='fruits'>
      <h1>Register Component</h1>
      <Fruits myFruits={fruits}/>
    </div>
  )
}
