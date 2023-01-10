import React from "react"
import Appointments from './appointments'
import AddAppointment from './addappointment'
import {Link} from "react-router-dom"

export default function Dashboard(props){
    
    return(
        <>
        <h1 className="mt-4">
          Hi, {props.user.name}
        </h1>
        <div className="container">
          <div className="row">
          <div className="col-6 mt-5">
            {props.appointments.length>0 && <Appointments user={props.user} naviagte={props.navigate} getappointments={props.getappointments} appointments={props.appointments} cancel_appointment={props.cancel_appointment} />}
            {props.appointments.length==0 && <h2>
              Currently, you are not having any appointment.
              </h2>}

          </div>
          <div className="col-6 mt-5">
            <div className="mt-4">
              <h1>
            Add a new appointment
            </h1>
            </div>
            <Link to="/add">
            <button className="btn btn-primary mt-4">
              ADD
            </button>
            </Link>

          </div>
          </div>
        
        </div>
        
        

          


        </>
    )

}