import { Page } from "../../components";
import "./SignUp.style.scss";
import {useState} from "react";
import {create} from "/workspaces/hack-the-tunnels-code-pirates/service/src/services/Account.ts";

function SignUp() {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");


  return (
    <Page>
      <div className="signup-page">
        <h1>Sign Up</h1>
      </div>
      <div>
        <label htmlFor ="fname">Email:</label>
        <input placeholder = "Email" onChange = {(e) => setEmail(e.target.value)}></input>
      </div>  
      <div>  
        <label htmlFor ="fname">Password:</label>
        <input placeholder = "password" onChange = {(e) => setPassword(e.target.value)}></input>
      </div>
      
      <button onClick={() => create(email, password)}>
          Login (as user set in code)
      </button>
      

    </Page>
  );
}

export default SignUp;
