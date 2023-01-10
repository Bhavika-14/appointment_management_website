import React,{ useState } from "react";
import Reschedule from "./reschedule.js"
export default function Appointment_desc(props){
  let [reschedule,setreschedule]=useState(false)
   
    return(
        <>
        <div className="container">
        <div class="card text-start mt-4" style={{width:18+"rem"}}>
          <div class="card-body">
            <h5 class="card-title">{props.appointment.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{props.appointment.email}</h6>
            <p class="card-text">{props.appointment.description}</p>
            <div className="row mt-1 mb-1">
                <div className="col">Date: {props.appointment.date}</div>
                
                

            </div>
            <div className="row mt-1 mb-1">
                
                <div className="col-5">Time: {props.appointment.time}</div>
                

            </div>
            {reschedule && <Reschedule appointment={props.appointment} setreschedule={setreschedule} naviagte={props.navigate} getappointments={props.getappointments} />}
            
            <button className="btn btn-primary" onClick={()=>setreschedule(true)}>Reschedule</button>
            <button className="btn btn-secondary float-end" onClick={()=>props.cancel_appointment(props.appointment._id)}>Cancel</button>
  </div>
</div>
</div>
        </>
    )
}