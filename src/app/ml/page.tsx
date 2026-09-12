import type { Metadata } from "next";
import Landing from "@/components/Landing";

export const metadata: Metadata = {
  title: "Zawj — couples-ന്റെ ഉംറ അനുഭവം",
  description:
    "couples-നായി ശ്രദ്ധയോടെ ഒരുക്കിയ ഒരു ഉംറ — കൂടുതൽ സ്വകാര്യതയും വ്യക്തിഗത ഇടവും ഒരുമിച്ചുള്ള അർത്ഥവത്തായ സമയവും.",
};

export default function HomeMl() {
  return <Landing lang="ml" />;
}
