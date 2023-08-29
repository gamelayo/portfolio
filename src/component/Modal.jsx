import React from "react";
import { motion } from "framer-motion";

const modalData = [
  {
    id: 1,
    title: "Fylo Storage",
    content: "Content for Modal 1",
    code: "https://github.com/gamelayo/fylo",
    demo: "https://fylo-gamelayo.vercel.app",
  },
  {
    id: 2,
    title: "Todo App",
    content: "Content for Modal 2",
    code: "https://github.com/gamelayo/todo-app-main",
    demo: "https://todo-app-gamelayo.vercel.app/",
  },
  {
    id: 3,
    title: "Static Job listing",
    content: "Content for Modal 3",
    code: "https://github.com/gamelayo/static-job-listings",
    demo: "https://static-job-listings-gamelayo.vercel.app",
  },
  {
    id: 4,
    title: "Rest countries Api",
    content:
      "This application is built with ReactJs and hosted on vercel. It's a challenge from Frontend Mentor. Users will be able to see all countries from the API on the homepage, search for a country using the search by name input field, filter countries by region, Click on a country to see more detailed information on a separate page, Make use of useContext hooks for toggle the color scheme between light and dark mode.",
    code: "https://github.com/gamelayo/rest-countries-api",
    demo: "https://countries-map-gamelayo.vercel.app/",
  },
  {
    id: 5,
    title: "Jojo Place",
    content: "Content for Modal 6",
    code: "https://github.com/gamelayo/jojoPlace",
    demo: "https://overhanging-article.000webhostapp.com",
  },
  {
    id: 6,
    title: "Contact Manager",
    content: "Content for Modal 6",
    code: "https://github.com/gamelayo/contact-manager",
    demo: "https://contact-manager-rx78.onrender.com",
  },
];

export default function Modal({ setShowModal, selectedId }) {
  const modal = modalData.find((data) => data.id === selectedId);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <motion.div
          className="relative w-auto my-6 mx-auto max-w-3xl"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        >
          {/* content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-blue-500">
                {modal.title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {modal.content}
              </p>
            </div>
            {/* footer */}
            <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
              <a
                href={modal.code}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-300 hover:text-slate-500  text-white shadow-md rounded-xl hover:scale-105 ease-in duration-300 px-6 py-2 uppercase"
              >
                code
              </a>
              <a
                href={modal.demo}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-300 hover:text-slate-500  text-white shadow-md rounded-xl hover:scale-105 ease-in duration-300 px-6 py-2 uppercase"
              >
                demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
