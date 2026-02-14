import React from 'react'
function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
        <div className='col-6 p-5 mt-5'>
              <img src='media/images/largestBroker.png' style={{width:"70%"}}></img>
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1 className='fs-2'>Largest stock broker in India</h1>  
          <p className='mb-3 mt-3'>2+ million Zerodha clients contibute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
          <div className='row mt-2'>
            <div className='col-6 p-2'>
                <ul>
             <li>Futures and Options </li>
               <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
                </ul>
            </div>
            <div className='col-6'>
            <ul>
        <li> Stocks & IPOs</li>
          <li> Direct mutual funds</li>
        
            <li>Bonds and Govt. Securities</li>
          </ul>
            </div>
            <img src='media/images/pressLogos.png' className='mt-3' style={{width:"90%"}}></img>
          </div>
         
        </div>
        </div>
       </div>
     );
}

export default Awards;