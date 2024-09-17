import React from 'react'
import { Link } from 'react-router-dom'
import './stylings/Navigation.css'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const auth = localStorage.getItem("student_id")
  console.log(auth)
  const navigate = useNavigate()
  function handleLogOut() {
    localStorage.removeItem("student_id")
    navigate("/")
  }
  return (
    <div >
      {
        auth ?
          (<div className='navbar'>
            <Link to="/">Home</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/patient">Patient</Link>
            <Link onClick={handleLogOut}>LogOut</Link>
          </div>) :
          (<div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </div>)
      }


    </div>
  )
}
