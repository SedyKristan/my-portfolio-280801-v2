"use client";

import { Fragment, useEffect, useState } from "react";

import Header from "@/components/Header";
import { sourceAirtable } from "@/lib/airtable";
import { groupedElements } from "@/services/fetchedDataFunctions";
import StyledSection from "@/components/StyledSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutMeSection from "@/components/AboutMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import SpecializationSection from "@/components/SpecializationSection";
import Modal from "@/components/Modal";
import SkillsToolsSection from "@/components/SkillsToolsSection";

const PortfolioShowcase = () => {
  const [staticContent, setStaticContent] = useState([]);
  const [groupedElementsByType, setGroupedElementsByType] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sourceAirtable({
        baseId: process.env.NEXT_PUBLIC_AIRTABLE_WEB_CONTENT_BASE_ID,
        table: "Static Content",
        view: "All Portfolio Showcase Content",
      });

      setStaticContent(data);
      setGroupedElementsByType(groupedElements({ data }));
      setIsDataLoaded(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const aboutMeContent = staticContent?.find((content) => {
    return content?.section === "About Me";
  });

  const portfolioContent = staticContent?.filter((content) => {
    return content?.section === "Portfolio";
  });

  const experienceContent = staticContent?.filter((content) => {
    return content?.section === "Experience";
  });

  const specializationContent = staticContent?.filter((content) => {
    return content?.section === "Specialization";
  });

  const skillsContent = staticContent?.filter((content) => {
    return content?.section === "Skills";
  });

  const toolsContent = staticContent?.filter((content) => {
    return content?.section === "Tools";
  });

  console.log(portfolioContent);

  return (
    <Fragment>
      {" "}
      <section className="w-screen h-screen bg-primary-lightest-02 flex flex-col items-start">
        <Header
          module={groupedElementsByType?.heading[0]?.question}
          icon={groupedElementsByType?.heading[0]?.icon}
          isScrolled={isScrolled}
        />
        <div className="flex mt-[54px] md:mt-[98px] pb-10 flex-col items-start gap-6 self-stretch pt-3 overflow-y-scroll scroll-container">
          <div className="upper flex px-4 items-start gap-6 self-stretch">
            <StyledSection>
              <AboutMeSection
                title={aboutMeContent?.section}
                content={aboutMeContent?.answer}
              />
              <PortfolioSection
                title={portfolioContent[0]?.section}
                content={portfolioContent}
              />
              <ExperienceSection content={experienceContent} />
            </StyledSection>
          </div>
          <div className="upper flex px-4 items-start gap-6 self-stretch">
            <StyledSection colored>
              <SpecializationSection
                title={specializationContent[0]?.section}
                content={specializationContent}
                setOpenModal={setOpenModal}
              />
            </StyledSection>
          </div>
        </div>
      </section>
      <Modal showModal={openModal} setShowModal={setOpenModal}>
        <SkillsToolsSection
          content={{ skills: skillsContent, tools: toolsContent }}
          setOpenModal={setOpenModal}
        />
      </Modal>
    </Fragment>
  );
};

export default PortfolioShowcase;
