import React from "react";
import ProjectPreview from "./ProjectPreview";

import fylo from "../assets/fylo.jpg";
import contact from "../assets/contactManager.png";
import jojoPlace from "../assets/jojoPlace.png";
import restCountries from "../assets/rest-countries.jpg";
import staticJob from "../assets/static-job.jpg";
import todoApp from "../assets/todo-app.jpg";

const Work = ({ setSelectedId, setShowModal }) => {
  const handleOpenModal = (e) => {
    setSelectedId(e);
    setShowModal(true);
  };

  return (
    <div id="works">
      <h1 className="text-xl tracking-widest uppercase text-[#5651e5]">
        Project
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          description="Next-gen social media"
          imageUrl={fylo}
          onClick={() => handleOpenModal(1)}
        />
        <ProjectPreview imageUrl={todoApp} onClick={() => handleOpenModal(2)} />
        <ProjectPreview
          imageUrl={staticJob}
          onClick={() => handleOpenModal(3)}
        />
        <ProjectPreview
          imageUrl={restCountries}
          onClick={() => handleOpenModal(4)}
        />
        <ProjectPreview
          imageUrl={jojoPlace}
          onClick={() => handleOpenModal(5)}
        />
        <ProjectPreview imageUrl={contact} onClick={() => handleOpenModal(6)} />
      </section>
    </div>
  );
};

export default Work;
