import React from "react";
import { skills, experiences, socialLinks } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Connect from "../components/Connect";

const About = () => {
  return (
    <section className="max-container">
      {/* Intro section */}
      <h1 className="head-text">
        Hi, I'm &nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Akshat
        </span>
      </h1>
      <div className="mt-4 flex flex-col gap-3 text-slate-500">
        <p className="text-lg">
          Web developer from Pune, specializing in MERN stack through various
          hands-on projects.
        </p>
      </div>
      {/* Skills */}
      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills?.map((skill, i) => {
            return (
              <div className="block-container w-20 h-20 " key={skill.name + i}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    title={skill.name || ""}
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience */}
      <div className="py-16 ">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-4 flex flex-col gap-3 text-slate-500">
          <p className="text-lg">
            I've the experience of working in groups(collaboration) on various
            projects, leveling up my skills and knowledge with like minded devs.
          </p>
        </div>
        <div className="mt-12 flex ">
          <VerticalTimeline>
            {experiences?.map((exp, index) => {
              return (
                <VerticalTimelineElement
                  key={exp.company_name + index}
                  date={exp.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full ">
                      <img
                        src={exp.icon}
                        alt={exp.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: exp.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: exp.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {exp.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {exp.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {exp.points?.map((point, index) => (
                      <li
                        className="text-black-500/50 font-normal pl-1 text-sm"
                        key={`exp_point-${index}`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
      {/* Social media */}
      <hr className="border-slate-200" />
      <div className="flex gap-10">
        {socialLinks?.map((link, i) => {
          return (
            <a
              className="block-container w-20 h-20 my-5 cursor-pointer"
              key={link.name + i}
              target="_blank"
              href={link.link}
            >
              <div className="btn-front rounded-lg  md:flex-nowrap flex-col flex justify-center items-center">
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-5 h-5 object-contain"
                />
                {link.name}
              </div>
            </a>
          );
        })}
      </div>
      {/* Connect me */}
      <hr className="border-slate-200" />
      <Connect />
    </section>
  );
};

export default About;
