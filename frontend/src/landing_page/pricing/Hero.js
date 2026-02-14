import React from 'react'
function Hero() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 text-center'>
            <h1 className='fs-2'>Charges</h1>
            <h3 className='text-muted fs-5 mt-3'>List of all charges and taxes</h3>
        </div>
        <div className='row p-5 mt-5 text-center'>
            <div className='col'>
             <img src='media/images/pricing0.png' style={{width:"50%"}}></img>
             <h1 style={{marginTop:"40px", fontSize:"30px", marginBottom:"20px" ,opacity:"0.8"}}>Free equity delivery</h1>
             <p style={{opacity:"0.8", paddingLeft:"20px", paddingRight:"20px"}} >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col mt-2'>
            <img src='media/images/intrady.png' style={{width:"60%"}}></img>
             <h1 style={{marginTop:"50px", fontSize:"30px", marginBottom:"20px" ,opacity:"0.8"}}>Intraday and F&O trades</h1>
             <p style={{opacity:"0.8", paddingLeft:"20px", paddingRight:"20px"}} >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col'>
              <img src='media/images/pricing0.png' style={{width:"50%"}}></img>
             <h1 style={{marginTop:"40px", fontSize:"30px", marginBottom:"20px" ,opacity:"0.8"}}>Free direct MF</h1>
             <p style={{opacity:"0.8", paddingLeft:"20px", paddingRight:"20px"}} >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;