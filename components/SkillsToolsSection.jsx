"use client";

import RenderImage from "@/services/renderImage";
import { useState } from "react";
import TriangleButton from "./TriangleButton";
import Skills from "./Skills";
import Tools from "./Tools";

const SkillsToolsSection = ({ content }) => {
  const [activeTab, setActiveTab] = useState("Skills");

  const tabs = ["Skills", "Tools"];

  const organizeSkillsBySubsection = (content) => {
    if (!content || !Array.isArray(content.skills)) {
      return {};
    }

    return content.skills.reduce((acc, skill) => {
      const { subsection } = skill;
      if (!acc[subsection]) {
        acc[subsection] = [];
      }
      acc[subsection].push(skill);
      return acc;
    }, {});
  };

  console.log(content);

  const organizeToolsBySubsection = (content) => {
    if (!content || !Array.isArray(content.tools)) {
      return {};
    }

    return content.tools.reduce((acc, tool) => {
      const { subsection } = tool;
      if (!acc[subsection]) {
        acc[subsection] = [];
      }
      acc[subsection].push(tool);
      return acc;
    }, {});
  };

  const organizedSkills = organizeSkillsBySubsection(content);
  const organizedTools = organizeToolsBySubsection(content);

  const activeTabClass =
    "before:w-6 before:h-[2px] before:bg-tertiary before:absolute before:bottom-0 before:left-0 text-secondary";
  const inActiveTabClass = "text-typography-light-secondary";
  return (
    <div className="flex flex-col self-stretch gap-6">
      <div className="flex justify-between items-center self-stretch">
        <div className="flex items-start gap-7">
          {tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-center items-start font-bold ${
                  tab === activeTab ? activeTabClass : inActiveTabClass
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            );
          })}
        </div>
      </div>
      {activeTab === "Skills" && <Skills skills={organizedSkills} />}
      {activeTab === "Tools" && <Tools tools={organizedTools} />}
    </div>
  );
};

export default SkillsToolsSection;
