import React,{useState} from 'react';

import './Login.css';
const Login=()=>{

const [email,setEmail]=useState("")
const[password,setPassword]=useState("")  

const handleSubmit=()=>{
    const user={email:email,password:password}
    console.log(user)

}

return(<>
    <div className="login-container">
  <form>
    <div className="form-container">
      <div className="form-sections mb">
        <div className="heading-container">
          <h1 className="heading">Login</h1>
        </div>
      </div>
      <div className="form-sections">
        <div className="form-fields">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" className="input-field" onChange={(e)=>{setEmail(e.target.value)}}  required />
        </div>
        <div className="form-fields">
          <label for="pass">Password</label>
          <div id="pass-field-container">

            <input type="password" name="pass" id="pass" className="input-field"  onChange={(e)=>{setPassword(e.target.value)}} required  />
            <input type="checkbox" id="see" className="input-field" title="Click to view password"  />
          </div>
        </div>
        <div className="form-fields">
          <input type="submit" value="Log In" className="login-btn"  onClick={handleSubmit}/>
        </div>
      </div>
      <div className="form-sections">
        <div className="forgot-password"><a href="#">Forgot Password?</a></div>
      </div>
    </div>
  </form>
</div>
</>)


}

export default Login; 