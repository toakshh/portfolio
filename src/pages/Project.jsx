import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import Connect from "../components/Connect";

const Project = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Projects
        </span>
      </h1>
      <div className="mt-4 flex flex-col gap-3 text-slate-500">
        <p className="text-lg">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Feel free to explore and
          contribute your ideas for further enhancements on any project, please
          do contact me. I'm open for collaboration and would really appreciate
          it.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16 ">
        {projects.map((project, i) => (
          <div className="lg:w-[400px] w-full" key={project.name + i}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 "
                >
                  Live demo
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      {/* Contact me section */}
      <Connect />
    </section>
  );
};

export default Project;
