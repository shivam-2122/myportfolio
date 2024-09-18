import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./Timelineitem";
import SkillItem from "./Skillltem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="APJ Abdul Kalam Technical University"
            date="2021 — 2025"
            description="Pursuing Bachelor of Technology at Raj Kumar Goel Institute of Technology,Ghaziabad"
          />
          <TimelineItem
            title="Higher Secondary - 12th"
            date="2019 — 2021"
            description="Completed at Uma Devi Childrens Academy, Mohammadi-Kheri."
          />
          <TimelineItem
            title="Senior Secondary - 10th"
            date="2017 — 2019"
            description="Completed at Uma Devi Childrens Academy, Mohammadi-Kheri ."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web Development Intern using MERN at Zidio Development"
            date="August 20, 2024 to September 20, 2024"
            description="During my internship I have Completed Job-listing Portal project using MERN Technology. I have used user authentication through Email/google account by Clerk database. I have used Shadcn UI for providing good looking interface."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web Designer" value={75} />
          <SkillItem title="Software Developer" value={70} />
          <SkillItem title="DSA Programming" value={65} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
