import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

class AddAppointment extends React.Component{
    constructor(props){
        super(props)
        
        this.onSubmit=this.onSubmit.bind(this)

        this.state={
            name:"",
            email:"",
            description:"",
            time:"",
            date:""
        }
    }

    async onSubmit(e){
        e.preventDefault()
        let appointment={
            name:this.state.name,
            email:this.state.email,
            description:this.state.description,
            date:this.state.date,
            time:this.state.time,
            user_id:this.props.email
        }
        console.log(appointment)
        
        axios.post("http://localhost:3001/addappointment",appointment).then((res)=>{
            console.log(res)
            
            this.props.getappointments()
            this.props.navigate('/dashboard')
    }).catch(
            (req,res)=>{
                console.log(req)
                console.log(res)
            }
        )
    }
    
        
    
    
        
    
    
    render(){
        return(
            <>
              <div className="container col-4">
                <h1>
                    Add a  new appointmnet
                </h1>
                
              <form class="row g-3 mt-5" onSubmit={this.onSubmit} >
              <div class="row">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" onChange={(e)=>{
                        this.setState({name:e.currentTarget.value})
                    }}
                    value={this.state.name} />
                </div>
              
                <div class="row">
                    <label for="email" class="form-label">Email-ID</label>
                    <input type="email" class="form-control" name="email" id="email" onChange={(e)=>{
                        this.setState({email:e.currentTarget.value})
                    }}
                    value={this.state.email} />
                </div>
                <div class="row">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" class="form-control" name="description" id="description" onChange={(e)=>{
                        this.setState({description:e.currentTarget.value})
                    }}
                    value={this.state.description} />
                <div className="row">
                    <label for="date" className="form-label">Date</label>
                    <input type="date" class="form-control" name="date" id="date" onChange={(e)=>{
                        this.setState({date:e.currentTarget.value})
                    }}
                    value={this.state.date} />
                </div>
                <div className="row">
                    <label for="time" className="form-label">Time</label>
                    <input type="time" class="form-control" name="time" id="time" onChange={(e)=>{
                        this.setState({time:e.currentTarget.value})
                    }}
                    value={this.state.time} />
                </div>
                </div>
                <div className="row mt-4">
                <div class="col-4 d-flex flex-row ps-0">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div> 
                <div className="col-8 d-flex flex-row-reverse pe-0">
                    <Link to="/dashboard">
                    <button className="btn btn-danger">Cancel</button>
                    </Link>
                </div>
                </div>
              </form>
         
              </div>
            </>
        )
    }
}
export default AddAppointment