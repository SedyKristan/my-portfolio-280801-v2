"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { sourceAirtable } from "@/lib/airtable";
import { getCurrentModule } from "@/services/getCurrentModule";

import ButtonGroup from "@/components/ButtonGroup";
import { groupedElements } from "@/services/fetchedDataFunctions";
import HeroImage from "@/components/Hero/HeroImage";
import HeroImageMobile from "@/components/Hero/HeroImageMobile";
import HeroAnimatedText from "@/components/Hero/HeroAnimatedText";
import HeroBackgroundPattern from "@/components/Hero/HeroBackgroundPattern";

const Home = () => {
  const [staticContent, setStaticContent] = useState([]);
  const [groupedElementsByType, setGroupedElementsByType] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sourceAirtable({
        baseId: process.env.NEXT_PUBLIC_AIRTABLE_WEB_CONTENT_BASE_ID,
        table: "Static Content",
        view: "All Home Content",
      });

      setStaticContent(data);
      setGroupedElementsByType(groupedElements({ data }));
      setIsDataLoaded(true);
    };

    fetchData();
  }, []);

  const headingQuestion = groupedElementsByType?.heading?.[0]?.question;
  const headingAnswer = groupedElementsByType?.heading?.[0]?.answer;
  const subheadingQuestion = groupedElementsByType?.subheading?.[0]?.question;
  const subheadingAnswer = groupedElementsByType?.subheading?.[0]?.answer;

  const textConfig = {
    headingQuestion,
    headingAnswer,
    subheadingQuestion,
    subheadingAnswer,
    button: groupedElementsByType?.button,
  };

  return (
    <section className="relative h-screen w-screen flex flex-col justify-center items-center flex-[1_0_0] bg-hero-gradient overflow-hidden">
      <HeroBackgroundPattern />
      <HeroAnimatedText textConfig={textConfig} />
      <HeroImageMobile />
      <HeroImage />
    </section>
  );
};

export default Home;
