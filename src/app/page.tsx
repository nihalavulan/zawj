import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ValueProps from "@/components/ValueProps";
import Comparison from "@/components/Comparison";
import Steps from "@/components/Steps";
import ShareWithPartner from "@/components/ShareWithPartner";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <ValueProps />
      <Comparison />
      <Steps />
      <ShareWithPartner />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
