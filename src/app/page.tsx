import Hero from "@/components/Hero";
import Story from "@/components/Story";
import ValueProps from "@/components/ValueProps";
import ShareWithPartner from "@/components/ShareWithPartner";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitPopup from "@/components/ExitPopup";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ValueProps />
      <ShareWithPartner />
      <Closing />
      <Footer />
      <FloatingWhatsApp />
      <ExitPopup />
    </>
  );
}
