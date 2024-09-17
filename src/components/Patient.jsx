import { useState } from 'react'
import React from 'react'
import './stylings/Patient.css'
import axios from 'axios'
export default function Patient() {
    const [patientData,setPatientData]=useState({
        name:"",
        age:"",
        gender:"",
        salary:"",
        specialization:""
    })
    function handleInputChange(e){
        e.preventDefault()
        const {name,value}=e.target
        setPatientData((prev)=>(({
            ...prev,
            [name]:value
        })))
       
    }
function handleSubmit(e){
    e.preventDefault()
    console.log(patientData)
    axios.post(`https://doc-back.onrender.com/doctors`,{
        name:patientData.name,
        age:patientData.age,
        gender:patientData.gender,
        salary:patientData.salary,
        specialization:patientData.specialization
    })
    .then((res)=>{
        console.log(res)
    })
}

  return (
    <div className='patient-content'>
      
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type='text' placeholder='enter name' name='name' onChange={handleInputChange}/><br/>
        <label>age</label>
        <input type='text' placeholder='enter age' name='age'onChange={handleInputChange}/><br/>
        <label>gender</label>
        <input type='text' placeholder='enter gender' name='gender' onChange={handleInputChange}/><br/>
        <label>salary</label>
        <input type='text' placeholder='enter salary' name='salary' onChange={handleInputChange}/><br/>
        <label>specialisation</label>
        <input type='text' placeholder='enter specialization' name='specialization' onChange={handleInputChange}/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
