import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Results from "@/components/Results";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen" role="main">
        <Hero />
        <WhoIsThisFor />
        <Problem />
        <Services />
        <AboutUs />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
