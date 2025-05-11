
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Communication from "@/components/Communication";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="security">
          <Security />
        </div>
        <div id="communication">
          <Communication />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
