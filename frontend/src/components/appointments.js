import React from "react"
import Appointment_desc from './appointment_desc'

export default function Appointments(props){
    
    return(
    props.appointments.map((appointment)=>{
        
        return(
            <>
            <Appointment_desc appointment={appointment}  cancel_appointment={props.cancel_appointment}  naviagte={props.navigate} getappointments={props.getappointments} />
            </>
            
        )
    })
    )
}