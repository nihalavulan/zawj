import type { Metadata } from "next";
import Hero from "@/components/ml/Hero";
import Story from "@/components/ml/Story";
import ValueProps from "@/components/ml/ValueProps";
import ShareWithPartner from "@/components/ml/ShareWithPartner";
import Closing from "@/components/ml/Closing";
import Footer from "@/components/ml/Footer";
import FloatingWhatsApp from "@/components/ml/FloatingWhatsApp";
import ExitPopup from "@/components/ml/ExitPopup";

export const metadata: Metadata = {
  title: "Zawj — 7 ദിവസത്തെ Couples Only Umrah",
  description:
    "നിങ്ങളിരുവർക്കും വേണ്ടി മാത്രം ഒരുക്കിയ 7 ദിവസത്തെ Couples Only Umrah അനുഭവം — വെറും 12 couples, thoughtfully curated.",
};

export default function HomeMl() {
  return (
    <div lang="ml">
      <Hero />
      <Story />
      <ValueProps />
      <ShareWithPartner />
      <Closing />
      <Footer />
      <FloatingWhatsApp />
      <ExitPopup />
    </div>
  );
}
