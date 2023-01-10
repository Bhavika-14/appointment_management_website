import React from "react"
import axios from "axios"
class Login extends React.Component{
    constructor(props){
        super(props)

        this.onSubmit=this.onSubmit.bind(this)
    
        this.state={
            name:"",
            email:"",
        
            password:""
        }

        

    }

    async onSubmit(e){
        e.preventDefault()
        let user={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        this.props.setuser({name:user.name,email:user.email})
        this.props.setname(this.state.name)
        this.props.setemail(this.state.email)

        axios.post("http://localhost:3001/login",user)
        .then((res)=>{
            console.log("login post")
            console.log(res)
            if(res.data.message=="user is in record"){
                
                
                this.props.setlogin(false)
                this.props.getappointments()
                this.props.navigate('/dashboard')
            }

        })

    }

    
    
    
    render(){
        return(
            <>
              <div className="container col-4">
                <h1 className="text-center mt-5">
                    Login
                </h1>
                
              <form class="row g-3 mt-2" onSubmit={this.onSubmit}>
              <div class="row">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" onChange={(e)=>{
                        this.setState({name:e.currentTarget.value})
                    }}
                    value={this.state.name} />
                </div>
               
              
                <div className="row">
                    <label for="email" class="form-label">Email-ID</label>
                    <input type="email" class="form-control" name="email" id="email" onChange={(e)=>{
                        this.setState({email:e.currentTarget.value})
                    }}
                    value={this.state.email} />
                </div>
                <div className="row mt-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" id="password" onChange={(e)=>{
                        this.setState({password:e.currentTarget.value})
                    }}
                    value={this.state.password} />
                </div>
                <div className="col-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div> 
                <div className="col-6">
                    <button>Cancel</button>
                </div>
              </form>
              <span>
                    Create new account?  
                    <a onClick={()=>{this.props.setsignup(true);
                    this.props.setlogin(false)}} >
                        Sign up!
                    </a> 
                </span>
              </div>
            </>
        )
    }
}
export default Login