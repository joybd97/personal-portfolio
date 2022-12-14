import React from "react";
import Joy from "../assets/joy.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typical from 'react-typical'


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Md. Mania Ahmed Joy
          </h4>
          <div className="text-white text-xl">
          
          <h3>
          I am a {' '}
              <Typical
            
            loop={Infinity}
            wrapper="b"
            steps={['Software Engineer ', 2000, 'Web developer', 2000]}
          />
          </h3>
          </div>

          <p className="text-gray-500 py-4 max-w-md">
            I have been building and desgining software.
            I love to work on web application using technologies like
            React, MongoDB, Experess, Node Js, Tailwind, and PHP.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio!
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Joy}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full joy-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
