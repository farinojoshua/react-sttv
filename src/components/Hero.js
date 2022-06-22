import HeroImg from "../assets/heroimg.jpg";
import { GiHand } from "react-icons/gi";

const Hero = () => {
  return (
    <div className='bg-gray-900 w-full font-poppins pt-1 pb-5 lg:pt-6 lg:pb-24'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center gap-8 md:flex-row px-4 py-6'>
        <div className='flex flex-col justify-center h-full'>
          <h3 className='text-green-400 text-lg flex items-center gap-2'>
            Shalom <GiHand />
          </h3>
          <h1 className='text-3xl text-white font-bold lg:text-4xl uppercase pt-3'>
            Welcome to STT Victory
          </h1>
          <p className='text-gray-300 text-md lg:text-lg mt-4 lg:max-w-5xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            adipisci ex perferendis numquam ratione debitis! Velit corporis,
            natus culpa doloribus consequuntur aperiam, quis provident atque
            quia itaque dolorem. Officia, doloribus.
          </p>
          <a
            href='/'
            className='w-fit px-8 py-3 bg-purple-600 text-white mt-5 rounded-sm text-sm font-semibold hover:scale-105 duration-300'>
            Learn More
          </a>
        </div>
        <div className='lg:mt-10'>
          <img
            src={HeroImg}
            alt='hero'
            className='rounded-2xl mx-auto  md:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
