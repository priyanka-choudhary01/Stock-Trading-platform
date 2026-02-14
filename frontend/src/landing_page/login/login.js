import React ,{useState} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
 const [username, setUsername] = useState("");
 
 const [password, setPassword] = useState("");
 const [error , setError] = useState("");
const handleloginClick = async(e) =>{
   e.preventDefault();
   const formData = {
      username,
      password,
   }
   try {
      const res = await axios.post(
        "http://localhost:8080/login",
        formData, {withCredentials:true}
      );
       localStorage.setItem("authToken", res.data.token);
      console.log(res.data.token)
       window.location.href = 'http://localhost:3001'; 
    } catch (err) {
      setError(err.response?.data.message);
      console.error(err.response?.data || err.message);
      alert("login failed");
    }
};
    return ( 
        <>
        <h1 className="ml-3" style={{marginLeft:"250px" , marginTop:"30px", marginBottom:"30px", color:"rgba(22, 129, 201, 1)" , fontSize:"26px"}}>Login on ZERODHA</h1>
         <div className="col-8 offset-2">
          <div style={{textAlign:"center", color:"red"}}>{error}</div>
      <form onSubmit={handleloginClick} className="needs-validation" noValidate>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
         {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button 
        type="submit" className="btn btn-primary mt-3">
         Log in
        </button>
        </form>
        </div>
        </>
     );
};

export default LoginPage;