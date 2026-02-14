import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
   const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [DOB, setDOB] = useState("");
  const [panNumber, setPanNumber] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [error , setError] = useState("");

  const handleSignUpClick = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
      phone,
      DOB,
      panNumber,
      address: { city, state, pincode },
      bankDetails: { accountNumber, ifscCode },
    };
    console.log(formData);
  try {
    const res = await axios.post(
      "http://localhost:8080/signup",
      formData,
      { withCredentials: true }
    );
     setError(res.message);
    console.log(res.data);
    navigate("/login"); 
    // window.location.href = 'http://localhost:3001'; 
  } catch (err) {
      setError(err.response?.data.message);
    console.error(err.response?.data || err.message);
  }
};

  return (
    <>
    <h1 className="ml-3" style={{marginLeft:"250px" , marginTop:"30px", marginBottom:"30px", color:"rgba(22, 129, 201, 1)" , fontSize:"26px"}}>Create a ZERODHA Account</h1>
    <div className="col-8 offset-2">

       <div style={{textAlign:"center", color:"red", fontSize:"1.2rem"}}>{error}</div>
      <form  onSubmit={handleSignUpClick} className="needs-validation" noValidate>
        
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
        
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
           
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>

        {/* phone */}
          <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" id="phone" 
          onChange={(e) => setPhone(e.target.value)}  
          className="form-control" />
        </div>
         
         {/* password */}
        <div className="mb-3">
          <label htmlFor="password" 
          className="form-label">
            Password
          </label>
          <input
          type="password"
           
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          
            className="form-control"
            required
          />
        </div>

         {/* DOB */}
        <div className="mb-3">
          <label htmlFor="DOB" className="form-label">Date of Birth</label>
          <input type="date" id="DOB"
          onChange={(e) => setDOB(e.target.value)}
           className="form-control" />
        </div>
         

         {/* PAN */}
        <div className="mb-3">
          <label htmlFor="panNumber" className="form-label">PAN Number</label>
          <input type="text" id="panNumber"  
          onChange={(e) => setPanNumber(e.target.value)}
          className="form-control" />
        </div>

        {/* Address */}
        <h5 className="mt-4">Address</h5>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" id="city" 
          onChange={(e) => setCity(e.target.value)}
           className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" id="state"
          onChange={(e) => setState(e.target.value)}
         
          className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">Pincode</label>
          <input type="text" id="pincode"
          onChange={(e) => setPincode(e.target.value)} 
         
          className="form-control" />
        </div>
        
         {/* Bank Details */}
        <h5 className="mt-4">Bank Details</h5>

        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label">Account Number</label>
          <input type="text" id="accountNumber" 
          onChange={(e) => setAccountNumber(e.target.value)}
        className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="ifscCode" className="form-label">IFSC Code</label>
          <input type="text" id="ifscCode" 
          onChange={(e) => setIfscCode(e.target.value)}
          className="form-control" />
        </div>
        
        <button type="submit" className="btn btn-primary mt-3">
          Sign Up
        </button>

        <p className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </>
  );

}

export default SignUp;
