import React from "react";
import Dosen from "../assets/heroimg.jpg";

const Lecturer = () => {
  const dosen = [
    {
      id: 1,
      nama: "Pieter Otta",
      jabatan: "Ketua STTV",
      img: Dosen,
    },
    {
      id: 2,
      nama: "Athonetta Tfuakani",
      jabatan: "Dosen Pembimbing",
      img: Dosen,
    },
    {
      id: 3,
      nama: "Frederik UL",
      jabatan: "Dosen Lapas",
      img: Dosen,
    },
  ];
  return (
    <>
      <div className='bg-white font-poppins'>
        <div className='flex flex-col md:flex-row justify-between items-center  max-w-5xl mx-auto px-4 py-20 gap-5'>
          {dosen.map(({ id, nama, jabatan, img }) => (
            <div className='rounded-lg shadow-lg' key={id}>
              <img src={img} alt='' />
              <div className=' py-6 text-center'>
                <h1 className='font-semibold '>{nama}</h1>
                <p className='mt-2'>{jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lecturer;
