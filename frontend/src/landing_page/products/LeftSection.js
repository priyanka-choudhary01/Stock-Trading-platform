import React from 'react'
function LeftSection({imageURL, productName, productDescription , tryDemo , learnMore , googlePlay , appStore}) {
    return ( 
       <div className='container'>
        <div className='row'>
        <div className='col-6 p-5'>
          <img src={imageURL}></img>
        </div>
        <div className='col-6 p-5 mt-5' style={{paddingLeftLeft:"50px"}}>
        <h1 className='fs-2' style={{paddingLeft:"70px"}}>{productName}</h1>
        <p className='fs-6' style={{opacity:"0.9" , fontSize :"18px" , paddingLeft:"70px" , paddingRight:"70px"}}>{productDescription}</p>
        <p className='mt-4'>
        
        <a href="" style={{marginLeft:"50px" , paddingLeft:"20px" }}>{tryDemo}<i class="fa-solid fa-arrow-right"></i></a>
        <a href="" style={{marginLeft:"50px"}}>{learnMore} <i class="fa-solid fa-arrow-right"></i></a>
        </p>
        <p className='mt-4'>
        <a href=''  style={{marginLeft:"50px" , paddingLeft:"20px" }}><img src='media/images/googlePlayBadge.png' style={{width:"25%"}}></img></a>
        <a href='' style={{marginLeft:"20px"}} ><img src='media/images/appStoreBadge.png' style={{width:"23%"}}></img></a>
        </p>
        </div>
        </div>
       </div>
     );
}

export default LeftSection;