"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { getImagePrefix } from "@/utils/util";

const Testimonial = () => {

    const TestimonialData: { profession: string; comment: string; imgSrc: string; name: string; rating: number; }[] = [
        {
            name: "Robert Fox",
            profession: 'CEO, Parkview Int.Ltd',
            comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            imgSrc: '/images/testimoni/user1.png',
            rating: 5
        },
        {
            name: "Leslie Alexander",
            profession: 'CEO, Parkview Int.Ltd',
            comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            imgSrc: '/images/testimoni/user2.png',
            rating: 5
        },
        {
            name: "Cody Fisher",
            profession: 'CEO, Parkview Int.Ltd',
            comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            imgSrc: '/images/testimoni/user3.png',
            rating: 5
        },
    ]

    const settings = {
        dots: false,
        dotsClass: "slick-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
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
    };

    return (
        <section id="testimonial">
            <div className="text-center">
                <div className="inline-block mb-10 mx-auto">
                <h2 className="text-midnight_text text-xl lg:text-4xl font-semibold mb-5 sm:mb-0">Testimoni Pelanggan .</h2>
                <div className="w-16 h-1 bg-green-600 rounded-full"></div>
                </div>
            </div>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <Slider {...settings}>
                    {TestimonialData.map((items, i) => (
                        <div key={i}>
                            <div className={`bg-white rounded-2xl m-4 p-5 my-20 relative ${i % 2 ? 'shadow-testimonial-shadow2' : 'shadow-testimonial-shadow1'}`}>
                                <div className="absolute top-[-45px]">
                                    <Image src={items.imgSrc}
                                        alt={items.name} width={100} height={100} className="inline-block" />
                                </div>
                                <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
