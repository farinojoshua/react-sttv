import React from "react";

const Contact = () => {
  return (
    <div className='bg-slate-900 text-white font-poppins'>
      <div className='max-w-screen-lg flex flex-col md:flex-row items-center justify-between mx-auto px-4 pt-24 pb-20 gap-5 '>
        <h1 className='font-bold text-xl'>
          We've prepared everything, it's time for you to tell the problem
        </h1>
        <div className='flex flex-row'>
          <a
            href='/'
            className=' px-8 py-3 bg-purple-600 text-white rounded-sm text-sm font-semibold hover:scale-105 duration-300 mr-2'>
            Send Quote
          </a>
          <a
            href='/'
            className=' px-8 py-3 bg-slate-600 text-white rounded-sm text-sm font-semibold hover:scale-105 duration-300'>
            Ask Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
