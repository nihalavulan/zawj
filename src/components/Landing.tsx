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
import type { Lang } from "@/lib/i18n";

export default function Landing({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero lang={lang} />
      <Problem lang={lang} />
      <ValueProps lang={lang} />
      <Comparison lang={lang} />
      <Steps lang={lang} />
      <ShareWithPartner lang={lang} />
      <FAQ lang={lang} />
      <FinalCTA lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
