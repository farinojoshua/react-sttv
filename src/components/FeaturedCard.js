import { BsPeopleFill } from "react-icons/bs";

const FeaturedCard = () => {
  const content = [
    {
      icon: <BsPeopleFill size={30} className='text-white' />,
      judul: "Ini Judul",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit?",
    },
    {
      icon: <BsPeopleFill size={30} className='text-white' />,
      judul: "Ini Judul",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit?",
    },
    {
      icon: <BsPeopleFill size={30} className='text-white' />,
      judul: "Ini Judul",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, odit?",
    },
  ];

  return (
    <div className='bg-slate-900 font-poppins'>
      <div className='flex flex-col md:flex-row justify-between items-center  max-w-5xl mx-auto px-4 pt-8 pb-20 gap-5'>
        {content.map(({ icon, judul, content }) => (
          <div className='flex flex-col justify-center items-center px-4 py-6 bg-slate-800'>
            <div className='bg-slate-900 p-4 rounded w-fit'>{icon}</div>
            <h1 className='text-white mt-5 font-semibold text-lg'>{judul}</h1>
            <p className='mt-2 text-gray-300 text-center'>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
