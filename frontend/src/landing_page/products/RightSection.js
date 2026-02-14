import React from 'react'
function RightSection({imageURL, productName, productDescription  , learnMore }) {
    return ( 
     <div className='container'>
        <div className='row'>
        <div className='col-6 p-5 ' style={{marginTop:"120px"}}>
        <h1 className='fs-2' style={{paddingLeft:"70px"}}>{productName}</h1>
        <p  style={{opacity:"0.9" , fontSize :"18px" , paddingLeft:"70px" , paddingRight:"70px"}}>{productDescription}</p>
        <p className='mt-4'>
        <a href="" style={{marginLeft:"50px" , paddingLeft:"20px" }}>{learnMore} <i class="fa-solid fa-arrow-right"></i></a>
        </p>
        </div>
         <div className='col-6'>
          <img src={imageURL}></img>
        </div>
        </div>
       </div>
     );
}

export default RightSection;