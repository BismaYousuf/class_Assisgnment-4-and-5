import CardsSection from "@/components/cards";
import MainSection from "@/components/main";
import SecCard from "@/components/secCard";
import About from "./about/page";
import Contact from "./contactUs/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <MainSection />
        <CardsSection />
        <SecCard />
        <About />
        <Contact />
      </div>
    </>
  );
}
