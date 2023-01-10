import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

class Reschedule extends React.Component{
    constructor(props){
        super(props)
        
        this.onSubmit=this.onSubmit.bind(this)

        this.state={

            time:"",
            date:""
        }
    }
    async onSubmit(e){
        e.preventDefault()
        let changes={
        
            
            date:this.state.date,
            time:this.state.time
        }
        const id=this.props.appointment._id
        console.log(this.props.appointment._id)
       
        
        axios.put(`http://localhost:3001/reschedule/${id}`,changes).then((res)=>{
            console.log(res)
            
            
            this.props.setreschedule(false)
            this.props.getappointments()
            
    }).then((res)=>this.props.navigate("/dashboard")).catch(
            (req,res)=>{
                console.log(req)
                console.log(res)
            }
        )
    }
    
        
    
    
        
    
    
    render(){
        return(
            <>
             
                
              <form class="container g-3 mt-4 mb-4" onSubmit={this.onSubmit} >
              
                
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
                
                <div className="row mt-4">
                <div class="col-4 d-flex flex-row ps-0">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div> 
                <div className="col-8 d-flex flex-row-reverse pe-0">
                    
                    <button className="btn btn-danger" onClick={()=>this.props.setreschedule(false)}>Cancel</button>

                </div>
                </div>
              </form>
         
              
            </>
        )
    }
}
export default Reschedule