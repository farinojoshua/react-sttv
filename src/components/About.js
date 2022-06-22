import React from "react";
import AboutImg from "../assets/heroimg.jpg";

const About = () => {
  return (
    <>
      <div className='bg-gray-200 font-poppins w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center gap-8 md:flex-row px-4 py-20'>
          <div>
            <img src={AboutImg} alt='' className='rounded-2xl md:w-full' />
          </div>
          <div className='max-w-xl'>
            <h1 className='text-purple-500 text-2xl underline font-bold'>
              About
            </h1>
            <p className='mt-3 text-md'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel
              veniam illum officiis? Illo et voluptatem nihil blanditiis placeat
              quos enim iusto magni deserunt corrupti quas illum doloribus earum
              aliquam nemo veritatis, quod autem animi est distinctio ducimus in
              quae. Eum, autem praesentium vel repudiandae deserunt voluptatem
              quisquam ab similique.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
