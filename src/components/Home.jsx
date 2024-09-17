import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './stylings/Home.css'
export default function Home() {
 const [doctors,setDoctors]=useState([])
 useEffect(()=>{
  axios.get(`https://doc-back.onrender.com/doctors`)
  .then((res)=>{
    console.log(res.data)
    setDoctors(res.data)
  })
 },[])

  return (
    <div className='doctor-container'>
      {
        doctors.map((i)=>(
          <div className='doctor' key={i.id}>
            <p>Name:{i.name}</p>
            <p>Specilization:{i.specialization}</p>
            <p>Age:{i.age}</p>
            <p>Gender:{i.gender}</p>
          </div>
        ))
      }
    </div>
  )
}
