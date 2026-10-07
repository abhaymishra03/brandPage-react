import React from 'react';
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>

        <div className='content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
                 HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
                  THE BEST AND WE’RE HERE TO HELP YOU WITH <br />
                   OUR SHOES.</p>
           

            <p>
                <button className='btnClass'>Shop Now</button>
                <button className='catBtn'>Category</button>
            </p>


            <div>

                <span> Also Aailable On </span>

               <section>
                 <img src="../public/images/flipkart.png" alt="flipkart" />
                <img src="../public/images/amazon.png" alt="amazon" />
               </section>

            </div>

        </div>
        <div className='img'>

            <img src="../public/images/hero_image.png" alt="shoe image" />
        </div>
        
    </div>
  );
};

export default Hero;