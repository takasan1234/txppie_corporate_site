import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutCompany } from "./components/AboutCompany";
import { Mission } from "./components/Mission";
import { Solution } from "./components/Solution";
import { CeoMessage } from "./components/CeoMessage";
import { CoreMembers } from "./components/CoreMembers";
import { Partners } from "./components/Partners";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { useEffect, useState } from "react";
import { WhatsNew } from "./components/WhatsNew";
import { NewsPage } from "./pages/NewsPage";

export default function App() {
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

  if (currentPage === "news") {
    return <NewsPage />;
  }

  if (currentPage === "privacy") {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigate} />
        <PrivacyPolicy />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      <Hero />
      <AboutCompany />
      <Mission />
      <Solution />
      <CeoMessage />
      <CoreMembers />
      <Partners />
      <WhatsNew />
      <About />
      <Contact />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
