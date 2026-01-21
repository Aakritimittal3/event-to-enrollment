import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Results from "@/components/Results";
import FreeOffer from "@/components/FreeOffer";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhoIsThisFor />
      <Problem />
      <Solution />
      <Services />
      <HowItWorks />
      <AboutUs />
      <Results />
      <FreeOffer />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
