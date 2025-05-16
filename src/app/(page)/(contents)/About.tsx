'use client'

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function About() {

   const settings: Settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      fade: true
   }

   return (
      <section>
         <div className="slider-container">
            <Slider { ...settings }>
                  {
                     ['cow.jpg', 'ayam.jpg'].map((data) => (
                        <div key={data}>
                           <div className={`relative w-full min-h-52 md:h-[50vh] lg:h-[80vh] bg-black`}>
                              <div className="absolutez z-1 bottom-0 top-0 right-0 left-0 opacity-40">
                                 <Image
                                    src={`/images/peternakan/${data}`}
                                    alt="peternakan" 
                                    className={`object-cover`}
                                    fill={true}
                                 />
                              </div>
                              <div className="flex justify-center items-center text-white absolute z-2 bottom-0 top-0 right-0 left-0">
                                 <div>
                                    <p className="text-center text-lg md:font-semibold lg:text-4xl uppercase mb-3">PT FARM NUSANTARA</p>
                                    <p className="text-center font-light md:font-normal text-sm px-5 lg:text-md lg:text-lg md:px-10 lg:px-28 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime officia harum aspernatur repellendus.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))
                  }
            </Slider>
         </div>
      </section>
   )
}
