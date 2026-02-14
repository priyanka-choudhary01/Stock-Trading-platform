import React from 'react'
function Hero() {
    return (
     <div className='container border-bottom mb-5 pb-5'>
        <div className='row text-center mt-5 '>
            <h1 className='fs-3 pt-5'>Zerodha Products</h1>
            <h3 className='mt-3 text-muted fs-5'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='mt-3'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
     </div>
      );
}

export default Hero;