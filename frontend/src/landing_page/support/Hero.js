import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row " style={{paddingLeft:"90px"}}>
        <div className=" col-6 p-3 " style={{lineHeight:"2.6"}} >
          <h1 className="fs-3">Search for an answer or browse help<br/> topics to create a ticket</h1>
          <input placeholder="Eg. how di I activate F&O" /><br/>
          <a href="" className="m-2">Track account opening</a>
          <a href="" className="m-2">Track segment activation</a><br/>
          <a href="" className="m-2">Intraday margins</a>
          <a href="" className="m-2">Kite user manual </a>
        </div>
        <div className=" col-6 p-3" >
            <h1 className="fs-3">Featured</h1>
            <ol style={{lineHeight:"2.6"}}>
                <li > <a href="" style={{marginLeft:"10px"}}>Current Takeovers and Delisting - January 2024</a></li>
                <li > <a href="" style={{marginLeft:"10px"}}>Latest intraday leverages - MIS & CO</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
