import React from "react";
import {Link} from 'react-router-dom'
function Hero() {
  return (
   <div className="container">
   <div className="row">
    <img src="media/images/homeHero.png" alt="Hero image"></img>
   </div>
   <div className="text-center mt-5 mb-5">
   <h1 className="fs-2">Invest in everything</h1>
   <p className="fs-4 mt-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
   <button className=" btn btn-primary m-3">
     <Link className="nav-link active" style={{paddingInline:"1.2rem", textAlign:"center"}} aria-current="page" to="/signup">
                 Sign up for free
                </Link>
   </button>
   </div>
   </div>
  );
}

export default Hero;
