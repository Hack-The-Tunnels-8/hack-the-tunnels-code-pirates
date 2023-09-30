import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async (email, password) => {
    try {
      if(email === "admin@email.com" && password === "password"){
        console.log("here")
        const message = await login(email, password);
        setMessage(message);
      } else{
        console.log("Wrong email and/or password.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <button onClick={() => attemptLogin(email, password)}>
          Login (as user set in code)
        </button>
        {message && <p>{message}</p>}
      </div>
      <div>
        <input placeholder = "email" onChange = {(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
        <input placeholder = "password" onChange = {(e) => setPassword(e.target.value)}></input>
      </div>
    </Page>
  );
}

export default Login;
