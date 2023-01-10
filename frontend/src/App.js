import logo from './logo.svg';
import './App.css';
import Login from './components/login.js';
import Signup from './components/signup.js';
import { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Routes,Link, BrowserRouter, useNavigate} from 'react-router-dom'
import Dashboard from './components/dashboard'
import axios from "axios"
import AddAppointment from './components/addappointment';


function App() {
  const navigate=useNavigate()
  let [login,setlogin]=useState(true)
  let [signup,setsignup]=useState(false)
  let [totalcount,setTotalcount]=useState(0)
  let [appointments,setappointments]=useState([])
  
  let [user,setuser]=useState({
    name:'',
    email:'',
    id:''
  })
  let [name,setname]=useState('')
  let [email,setemail]=useState('')


  const email_id=user.email
  function setusername(e){
    console.log(e)
    setuser(existingvalues=>(
      {
        ...existingvalues,
        name:e
      }
    )
    )
  }
  function setuseremail(e){
    setuser(existingvalues=>(
      {
        ...existingvalues,
        email:e
      }
    )
    )
    console.log(user)
  }

  function cancel_appointment(appointment_id){
    console.log("delete")
   
    axios.delete(`http://localhost:3001/delete/${appointment_id}`).then(
      (res)=>{
        
        console.log(res)
        getappointments()
        console.log(appointments)
        
      }
    ).then((res)=>{
      navigate("/dashboard")
    })
    

  }
  
  function getappointments(){
    
    axios.get('http://localhost:3001/dashboard',{params:{user_id:email}}).then(
      (res)=>{
       
        console.log(res)
        setappointments(res.data)
        
        
        
      }
    )
  }


  return (
    
    <>
    <div className="App">
    <h1 className="text-center">
      Appointment Management 
    </h1>
    
    
     <Routes>
     <Route index path="/" element={
      
      (signup && <Signup setlogin={setlogin} setsignup={setsignup} setname={setname} setemail={setemail} setusername={setusername} setuseremail={setuseremail} name={name} email={email} setuser={setuser} totalcount={totalcount} setTotalcount={setTotalcount} navigate={navigate} getappointments={getappointments} /> )
      ||
      (login && <Login setlogin={setlogin} setsignup={setsignup} setuser={setuser} setname={setname} setemail={setemail} name={name} email={email} getappointments={getappointments} navigate={navigate} />)

    
    } /> 
     
            <Route path="/dashboard" element={<Dashboard user={user} setuser={setuser} appointments={appointments} cancel_appointment={cancel_appointment} navigate={navigate} setname={setname} setemail={setemail} name={name} email={email} getappointments={getappointments} />} />
            <Route path="/add" element={<AddAppointment user={user} setuser={setuser} appointments={appointments} setname={setname} setemail={setemail} name={name} email={email} totalcount={totalcount} setTotalcount={setTotalcount} navigate={navigate} getappointments={getappointments} />} />
            
      </Routes>
      
      </div>
    </>
  );
}

export default App;
