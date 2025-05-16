'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider, { Settings } from 'react-slick'

export default function Product() {

   const settings: Settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
      ]
   }

    const produks = [
        {
            file: 'ayam.jpg',
            nama: 'Ayam Kampung',
        },
        {
            file: 'sapi.jpg',
            nama: 'Sapi Limousin',
        },
        {
            file: 'domba.jpg',
            nama: 'Domba Merino',
        },
    ]

   return (
      <section id="produk">
         <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-midnight_text text-xl lg:text-4xl font-semibold mb-5 sm:mb-0">Produk Kami .</h2>
                        <div className="w-24 h-1 bg-green-600 rounded-full"></div>
                    </div>
                    <Link href={'/'} className="hidden md:inline text-primary text-lg font-medium hover:tracking-widest duration-500">Lebih banyak lagi&nbsp;&gt;&nbsp;</Link>
                </div>
                <Slider {...settings}>
                    {produks.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 mb-12 px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-full'>
                                <div className="relative aspect-4/3">
                                    <Image src={`/images/produk/${items.file}`} alt="course-image" fill={true} className="object-cover" />
                                </div>

                                <div className="px-3 pt-6">
                                    <Link href="#" className='text-2xl font-bold text-gray-900 max-w-75% inline-block capitalize pb-0.5'>{items.nama}</Link>
                                    <p className="text-green-800 font-light italic text-sm py-1.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum temporibus dolor</p>
                                    <div className="flex justify-center pt-6">
                                        <Link href="https://api.whatsapp.com/send/?phone=62849348394302&amp;text=Hai%2C+saya+ingin+memesan+produk+ini%3A+https%3A%2F%2Fwww.contohwebsite.com&amp;type=phone_number&amp;app_absent=0" className="flex items-center gap-3 px-3.5 py-1.5 md:px-8 md:py-3.5 text-white bg-green-500 hover:bg-green-400 rounded-4xl">
                                            <Icon
                                                icon="mage:whatsapp"
                                                className="text-4xl"
                                            />
                                            <p className="text-md md:text-lg lg:text-xl font-medium uppercase">Pesan Sekarang</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
      </section>
   )
}
