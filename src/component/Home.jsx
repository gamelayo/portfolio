import React from "react";
import SocialButton from "./SocialButton";
import profile from "../assets/profile.jpg";
import fileUrl from "../assets/gamelayo.pdf";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Home = () => {
  const fileName = "gamel ayodele resume.pdf";
  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 my-6">
      <div className="bg-gradient-to-r from-zinc-200 to-yellow-200 h-[auto] rounded-3xl p-10 flex flex-col gap-4   bg-cover order-2 md:order-1">
        <h1 className="text-4xl font-semibold">Hello, I'm am Gamel Ayodele.</h1>
        <p className="flex-1">
          A self-taught MERN and Next.js developer with three years of
          experience, I have honed my skills in building modern web applications
          that are both dynamic and performant. My journey began with a strong
          foundation in web development concepts and technologies, and I've
          progressively expanded my knowledge to become proficient in the MERN
          stack (MongoDB, Express.js, React, and Node.js) as well as Next.js. My
          commitment to staying at the forefront of technology also extends to
          my ongoing learning journey, where I am currently honing my skills in
          TypeScript and PHP.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end mt-2">
          <a
            href={fileUrl}
            download={fileName}
            className="bg-black text-white hover:bg-slate-700 font-medium py-3 px-12 rounded-full w-60 lg:w-auto"
          >
            Download CV
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/GAMEL06"
              target="_blank"
              rel="noreferrer"
            >
              <SocialButton bgColor="twitter">
                <FaTwitter className="w-5 h-5 hover:text-white" />
              </SocialButton>
            </a>
            <a
              href="https://www.linkedin.com/in/gamel-ayodele-55182b19b"
              target="_blank"
              rel="noreferrer"
            >
              <SocialButton bgColor="linkedin">
                <FaLinkedin className="w-5 h-5 hover:text-white" />
              </SocialButton>
            </a>
            <a
              href="https://github.com/gamelayo"
              target="_blank"
              rel="noreferrer"
            >
              <SocialButton bgColor="github">
                <FaGithub className="w-5 h-5 hover:text-white" />
              </SocialButton>
            </a>
          </div>
        </div>
      </div>

      <img
        src={profile}
        alt=""
        className="h-[100%] rounded-3xl  bg-cover bg-center order-1 md:order-2"
      />
    </section>
  );
};

export default Home;
