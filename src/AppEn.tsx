import { useEffect, useState } from "react";
import { HeaderEn } from "./components-en/HeaderEn";
import { HeroEn } from "./components-en/HeroEn";
import { AboutCompanyEn } from "./components-en/AboutCompanyEn";
import { MissionEn } from "./components-en/MissionEn";
import { SolutionEn } from "./components-en/SolutionEn";
import { CeoMessageEn } from "./components-en/CeoMessageEn";
import { CoreMembersEn } from "./components-en/CoreMembersEn";
import { PartnersEn } from "./components-en/PartnersEn";
import { AboutEn } from "./components-en/AboutEn";
import { ContactEn } from "./components-en/ContactEn";
import { FooterEn } from "./components-en/FooterEn";
import { PrivacyPolicyEn } from "./components-en/PrivacyPolicyEn";
import { WhatsNewEn } from "./components-en/WhatsNewEn";

export default function AppEn() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const id = decodeURIComponent(hash.replace("#", ""));

    const timer = window.setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  if (currentPage === "privacy") {
    return (
      <div className="min-h-screen bg-white">
        <HeaderEn onNavigate={handleNavigate} />
        <PrivacyPolicyEn />
        <FooterEn onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderEn onNavigate={handleNavigate} />
      <HeroEn />
      <AboutCompanyEn />
      <MissionEn />
      <SolutionEn />
      <CeoMessageEn />
      <CoreMembersEn />
      <PartnersEn />
      <WhatsNewEn />
      <AboutEn />
      <ContactEn />
      <FooterEn onNavigate={handleNavigate} />
    </div>
  );
}
