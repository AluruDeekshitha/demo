import axios from 'axios'
import React,{useState}  from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  function handleSubmit(e){
    e.preventDefault()
    alert("changed from handleSubmit")
}
// const [email,setEmail]=useState("")
// const [password,setPassword]=useState("")
const[formData,setFormData]=useState({
    email:"",
    password:""
})
const navigate=useNavigate()
function handleChange(e){
    //console.log(e)
    const {name,value}=e.target
    setFormData((prev)=>({
        // (...spreading operator)spreading the every object and getting specific objects key
        ...prev,
        // picking the specific key and storing the data user entered value
        [name]:value
    }))
}
function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    axios.post(`https://jobportal.codegnan.com/api/v1/studentlogin`,{username:formData.email,password:formData.password})
    .then((res)=>{
      console.log("status coe",res.data)
      if(res.status===200){
        console.log("login successful")
        localStorage.setItem("student_id",res.data.student_id)
        navigate("/")
        return;
      }
    })
    .catch((error)=>{
      console.log("status code is:",error.status)
      alert("Invalid Credentials")
    })
}
// this function will help to save the entered input field
function handleEmail(e){
    console.log(e.target.value)
    //event always carry the target object from which we get the information
    setEmail(e.target.value)
}
  return (
    <div>
       <form onSubmit={handleSubmit}>
        
        <label>Email  :</label>
        <input type='text' 
        placeholder='enetr your email' 
        name='email' //name attribute must carry the variable as the value
        // onChange={handleEmail} //onChange helps to call the function
        onChange={handleChange}
        />
        <br/>
        
        <label>Password  :</label>
        <input type='text' 
        placeholder='enter your password' 
        name='password'
        // onChange={(e)=>setPassword(e.target.value)}
        onChange={handleChange}
        />
        <br/>
        <button type='submit'>Submit</button>
        
      </form>
      
    </div>
  )
}
