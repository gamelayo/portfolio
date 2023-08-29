import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};
// ${dark ? "dark" : ""}
const ProjectPreview = ({ imageUrl, onClick }) => {
  return (
    <motion.div
      className={`h-[30rem] rounded-3xl overflow-hidden`}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
      onClick={onClick}
    >
      <div
        className={`h-full w-full px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out object-fill`}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-end">
          <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center ">
            <FiArrowUpRight className="w-6 h-6 cursor-pointer hover:text-sky-600" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;
