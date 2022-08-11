import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, this is Md. Mania Ahmed Joy.

        I am a computer science and engineering graduate and a full-stack software developer. I have always been passionate about different technologies and inquisitive to learn newer technologies. I always enjoyed software applications and have been interested in web development since my university days. I believe that computer applications are meant to create easier solutions for computational problems and provide people with easier and faster solutions. I also believe that my educational background endowed me with the qualities required for the development of software that is robust, user-friendly, scalable, and easily maintainable. I enjoy learning and sharing my knowledge as I strongly believe that the technological revolution, we are witnessing can be carried forward by sharing the knowledge and practicing them on regular basis.
        
        </p>

        <br />

        <p className="text-xl">
        I specialize in MongoDB, Express, React JS, and Node JS with working experience with other latest technologies such as PHP, MySQL, Rest API, Git and Git Hub, Machine Learning, etc.
        </p>
      </div>
    </div>
  );
};

export default About;
