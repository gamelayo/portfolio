import React from "react";

const About = () => {
  return (
    <div id="about" className="my-6">
      <h1 className="text-xl tracking-widest uppercase text-[#5651e5] mb-2">
        About
      </h1>
      <section className="grid grid-cols-1 bg-gradient-to-r from-zinc-200 to-sky-200 h-[auto] rounded-3xl">
        <div className="p-6 md:p-8">
          <h2 className="font-bold text-2xl">Who I Am</h2>
          <h2 className="py-2 font-medium text-lg">
            <span className="font-[Raleway]">I</span> am a passionate computer
            engineering graduate of Lagos State Polytechnic with a deep
            fascination for technology and its inner workings. My journey into
            the world of tech began during the COVID-19 pandemic in 2020, where
            I seized the opportunity to dive into web development. Proficient in
            the MERN stack and Next.js, I am dedicated to crafting seamless and
            dynamic web experiences. Continuously driven to expand my skill set,
            I am currently engrossed in mastering TypeScript, further enriching
            my capabilities in the ever-evolving realm of programming.
          </h2>
          <div className="my-2">
            <h3 className="font-bold text-lg">Technical Proficiency:</h3>
            <ul className="list-disc pl-5">
              <li>
                MERN Stack Mastery: With a deep understanding of the MERN stack
                components, I effortlessly navigate between front-end and
                back-end development. Crafting dynamic user interfaces using
                React and harnessing the power of Express.js and Node.js for
                robust server-side functionality are second nature to me.
              </li>
              <li>
                Next.js Expertise: I specialize in building performant web
                applications using Next.js, leveraging server-side rendering and
                optimized routing for seamless navigation. This ensures that
                applications I develop are not only visually appealing but also
                highly responsive.
              </li>
              <li>
                Diverse Skill Set: Beyond my expertise in the MERN stack and
                Next.js, I am also well-versed in HTML, CSS, and JavaScript,
                ensuring a holistic approach to crafting exceptional web
                experiences.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h3 className="font-bold text-lg">Ongoing Learning:</h3>
            <ul className="list-disc pl-5">
              <li>
                TypeScript Advancements: Recognizing the importance of strong
                typing and enhanced tooling, I am in the process of mastering
                TypeScript. This allows me to write cleaner, more maintainable
                code and catch errors at compile time, leading to more efficient
                development cycles.
              </li>
              <li>
                PHP Exploration: I believe in continuously expanding my skill
                set. That's why I am currently immersing myself in PHP, an
                essential language for server-side scripting. This endeavor
                enhances my ability to work with a wider range of technologies
                and take on diverse projects.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h3 className="font-bold text-lg">Passion for Problem-Solving:</h3>
            <ul className="list-disc pl-5">
              <li>
                My development journey is driven by a passion for tackling
                complex challenges. I thrive on identifying innovative solutions
                to problems, whether they involve optimizing performance,
                implementing intricate features, or ensuring robust security
                measures.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h3 className="font-bold text-lg">Collaborative Approach:</h3>
            <ul className="list-disc pl-5">
              <li>
                Effective communication and teamwork are at the core of my
                development process. I excel in collaborating with designers,
                fellow developers, and stakeholders to ensure the end product
                aligns seamlessly with the envisioned goals.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h3 className="font-bold text-lg">Adaptive and Innovative:</h3>
            <ul className="list-disc pl-5">
              <li>
                The rapidly evolving landscape of web development demands
                adaptability and innovation. I am always eager to explore
                emerging technologies and methodologies, enabling me to deliver
                cutting-edge solutions that stand the test of time.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <h3 className="font-normal text-lg">
              In sum, I am a Full Stack Developer who combines expertise in the
              MERN stack and Next.js with an unwavering commitment to continuous
              improvement. As I expand my skills into TypeScript and PHP, I am
              well-equipped to bring your web development projects to life with
              efficiency, creativity, and technical finesse.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
