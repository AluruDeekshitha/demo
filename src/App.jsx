import { useState } from "react"
// import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import List from "./List.jsx"
// import Input from "./Input.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Navigation from "./components/Navigation.jsx";
import Patient from "./components/Patient.jsx";
function App() {
  // const [name,setName]=useState("React")
  // const [studentDetails,setStudentDetails]=useState({stdName:"deekshitha",stdId:23,stdGender:"female"}) //Object creation
  // const [stdMarks,StdMarks]=useState([87,92,53,74,85]) //array creation`

  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="patient" element={<Patient/>}/>
      </Routes>
      </BrowserRouter>
      
      {/* <List/>
      <Input/> */}
      {/* {console.log(" good night")}
      <h1>Name is:{name}</h1>
      {/* object access */}
      {/* <p>{studentDetails.stdName}</p>
      <p>{studentDetails.stdId}</p>
      <p>{studentDetails.stdGender}</p> */}
      {/* <p>Student Marks:{stdMarks[0]}, {stdMarks[1]}, {stdMarks[2]}, {stdMarks[3]}, {stdMarks[4]}</p> */}
      {/* {
        stdMarks.map((item)=>{
          return <span key={item}> {item} </span>
        })
      }
      <p>Hello World</p>
      <p>Deekshitha</p> */} 
      {/* <AppBar position="static">
<Toolbar>
<Typography variant="h6">
My Material UI Navbar
</Typography>
<Button color="inherit">Home</Button>
<Button color="inherit">About</Button>
<Button color="inherit">Services</Button>
</Toolbar>
</AppBar> */}
    </div>
  )
  
}

export default App
