'use client'

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Galery() {

   const settings: Settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
   }

   return (
      <section id="galeri">
         <div className="text-center">
            <div className="inline-block mb-10 mx-auto">
               <h2 className="text-midnight_text text-xl lg:text-4xl font-semibold mb-5 sm:mb-0">Galeri .</h2>
               <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>
         </div>
         <Slider { ...settings }>
               {
                  ['cow.jpg', 'ayam.jpg', 'cow2.jpg', 'domba.jpg'].map((data) => (
                     <div key={data}>
                        <div className='bg-white m-3 mb-12 px-3 py-3 shadow-lg rounded-2xl w-full h-full'>
                           <div className={`relative w-full min-h-50 md:h-[20vh] lg:h-[40vh] bg-black`}>
                              <div className="absolute z-1 bottom-0 top-0 right-0 left-0">
                                 <Image
                                    src={`/images/peternakan/${data}`}
                                    alt="peternakan" 
                                    className={`object-cover`}
                                    fill={true}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  ))
               }
         </Slider>
      </section>
   )
}
