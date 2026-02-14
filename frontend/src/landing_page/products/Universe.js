import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-4">The Zerodha Universe</h1>
        <p className="mt-3 fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center mt-5" >
        <div className="col mt-3" style={{paddingLeft:"60px" , paddingRight:"60px"}}>
          <img src="media/images/zerodhaFundHouse.png" style={{width:"50%"}}></img>
          <p className="mt-3 text-muted " style={{fontSize:"14px", opacity:"0.8"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col mt-4" style={{paddingLeft:"60px" , paddingRight:"60px"}}>
          <img src="media/images/sensibull.png" style={{width:"50%"}}></img>
          <p className="mt-3 text-muted " style={{fontSize:"14px", opacity:"0.8"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col mt-3" style={{paddingLeft:"60px" , paddingRight:"60px"}}>
          <img src="media/images/streakLogo.png" style={{width:"35%"}}></img>
          <p className=" text-muted " style={{fontSize:"14px", opacity:"0.8"}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>
      <div className="row text-center mt-3">
        <div className="col mt-5" style={{paddingLeft:"60px" , paddingRight:"60px"}}>
          <img src="media/images/smallcaseLogo.png" style={{width:"60%"}}></img>
          <p className="mt-4 text-muted " style={{fontSize:"14px", opacity:"0.8"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col mt-5" style={{paddingLeft:"60px" , paddingRight:"60px"}}>
          <img src="media/images/tijori.png" style={{width:"35%"}}></img>
          <p className="mt-4 text-muted " style={{fontSize:"14px", opacity:"0.8"}}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col mt-5" style={{paddingLeft:"60px" , paddingRight:"60px"}}>
          <img src="media/images/dittoLogo.png" style={{width:"35%"}}></img>
          <p className="mt-3 text-muted " style={{fontSize:"14px", opacity:"0.8"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="text-center mt-3">
       <button className=" btn btn-primary btn-lg m-3 text-center">Sign up for free</button>
    </div>
    </div>
  );
}

export default Universe;
