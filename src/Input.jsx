import React,{useState} from 'react'

export default function Input() {
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
    function handleChange(e){
        console.log(e)
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
       // alert("from handleSubmit "+email)
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
        <input type='password' 
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
