import qr from '../assets/qr.svg';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div className="bg-white dark:text-white dark:bg-gray-800 shadow text-black py-16 lg:pt-48 lg:pb-72 md:pb-72 px-4 sm:px-6 lg:px-8">
      <div className="max-w-12xl mx-auto flex flex-col sm:flex-row items-center">
        <div className="sm:w-5/12 sm:my-5 sm:mb-5">
          <img
            src={qr}
            alt="Hero Image"
            className="w-full lg:h-96 md:h-64 sm:h-64 mx-auto sm:mx-0 mb-16 md:mb-0"
          />
        </div>
        <div className="sm:w-7/12 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-5xl">
            Qr-Code Generator
          </h1>
          <p className="mt-4 text-xl sm:mt-6 sm:text-2xl md:mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam repellat cum perferendis tenetur vero eveniet, atque repellendus vitae sapiente ducimus aliquid ipsum, ut, laboriosam laudantium non dicta libero voluptatem. Cum.
          </p>
          <div className="mt-10">
  <Link
    to="content"
    spy={true}
    smooth={true}
    offset={-70} // Adjust this offset to your preference
    duration={500} // Duration of the scroll animation in milliseconds
    className="bg-white text-blue-600 hover:bg-blue-800 hover:text-white inline-block px-6 py-3 rounded-full text-lg font-semibold transform transition duration-300 ease-in-out transform hover:scale-105"
  >
    Get Started
  </Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
