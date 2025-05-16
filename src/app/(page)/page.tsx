import React from "react";
import About from "./(contents)/About";
import Product from "./(contents)/Product";
import Galery from "./(contents)/Galery";
import Testimonial from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
        <About />
        <Product />
        <Galery />
        <Testimonial />
    </main>
  );
}
