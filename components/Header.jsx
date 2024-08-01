"use client";

import { sourceAirtable } from "@/lib/airtable";
import renderIcon from "@/services/renderIcon";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Header = ({ module, icon, isScrolled }) => {
  const [records, setRecords] = useState([]);

  console.log(isScrolled);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const fetchedRecords = await sourceAirtable({
          baseId: process.env.NEXT_PUBLIC_AIRTABLE_WEB_CONTENT_BASE_ID,
          table: "Static Content",
          view: "All Navbar Content",
        });
        setRecords(fetchedRecords);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    getRecords();
  }, []);

  return (
    <header
      className={`flex fixed h-[54px] md:h-[98px] md:min-h-[98px] min-h-[54px]  w-screen px-4 items-center gap-9 self-stretch transition-colors duration-150 ease-in-out ${
        isScrolled ? "bg-light-primary shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3 flex-[1_0_0]">
        {renderIcon({ iconName: icon, size: "large" })}
        <h2>{module}</h2>
      </div>
      <div className="hidden md:flex md:items-center md:gap-4 ">
        <Button>Download CV</Button>
      </div>
    </header>
  );
};

export default Header;
