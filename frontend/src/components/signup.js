import React from "react"
import axios from "axios"

class Signup extends React.Component{
    constructor(props){
        super(props)
        
        this.onSubmit=this.onSubmit.bind(this)

        this.state={
            name:"",
            email:"",
            password:"",
            id:""
        }
    }

    async onSubmit(e){
        e.preventDefault()
        let user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            id:this.props.totalcount+1
        }
        this.props.setTotalcount(this.props.totalcount+1)
       
        
        this.props.setuser({name:this.state.name,email:this.state.email,password:this.state.password,id:this.state.id})
        this.props.setname(user.name)
        this.props.setemail(user.email)
        
        
        
        
        axios.post("http://localhost:3001/signup",user)
        .then((res)=>{
            this.props.getappointments()
            this.props.navigate('/dashboard')
           
        
            
            
    })
    }
    
        
    
    
        
    
    
    render(){
        return(
            <>
              <div className="container col-4">
                <h1>
                    Signup
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
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" id="password" onChange={(e)=>{
                        this.setState({password:e.currentTarget.value})
                    }}
                    value={this.state.password} />
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-primary">Signup</button>
                </div> 
                <div className="col-6">
                    <button onClick={()=>this.props.setadd(false)}>Cancel</button>
                </div>
              </form>
              <span>
                    Already have an account ?
                    <a onClick={()=>{this.props.setsignup(false);
                    this.props.setlogin(true)}} >
                Login!
                    </a> 
                </span>
              </div>
            </>
        )
    }
}
export default Signup