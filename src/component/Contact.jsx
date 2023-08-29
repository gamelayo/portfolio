import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import SocialButton from "./SocialButton";
const Contact = () => {
  return (
    <div id="contact" className="mt-6">
      <h1 className="text-xl tracking-widest uppercase text-[#5651e5] mb-2">
        Contact
      </h1>

      <section className="grid grid-cols-1 bg-gradient-to-r from-zinc-200 to-cyan-200 h-[auto] rounded-3xl">
        <div className="p-6 md:p-8">
          <div className="">
            <h2 className="py-2 font-bold text-2xl">Want to work together?</h2>
            <p className="py-2 text-xl">
              Let's collaborate to transform your ideas into dynamic,
              user-centric web experiences that leave a lasting impact. Contact
              me today to embark on a journey to digital excellence.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 justify-self-end pt-10 pb-4">
            <button className="bg-black text-white hover:bg-slate-700 font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
              <a
                href="mailto:ayodelegamel@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a mail
              </a>
            </button>
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

        {/* <a href={fileUrl} download={fileName} rel="noreferrer">
                    <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                      <BsFillPersonLinesFill />
                    </div>
                  </a> */}
      </section>
    </div>
  );
};

export default Contact;
