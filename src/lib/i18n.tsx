import type { ReactNode } from "react";

export type Lang = "en" | "ml";

const emEn = (t: string) => <em className="italic text-rose">{t}</em>;
const emMl = (t: string) => <span className="text-rose">{t}</span>;

type ValueProp = {
  eyebrow: string;
  headline: ReactNode;
  points: (string | { title: string; desc: string })[];
  cta: string;
};

type Dict = {
  nav: { whatsapp: string; toggleLabel: string; toggleHref: string };
  hero: {
    trust: string;
    title: ReactNode;
    sub: ReactNode;
    ctaPrimary: string;
    ctaSecondary: string;
    reassurance: string[];
  };
  problem: { eyebrow: string; title: ReactNode; body: ReactNode; pressPlay: string };
  value: ValueProp[];
  comparison: {
    eyebrow: string;
    title: ReactNode;
    colNormal: string;
    colZawj: string;
    rows: { label: string; normal: string; zawj: string }[];
    caption: string;
  };
  steps: {
    eyebrow: string;
    title: ReactNode;
    items: { title: string; desc: string }[];
    cta: string;
  };
  share: {
    eyebrow: string;
    title: ReactNode;
    body: string;
    button: string;
    shareTitle: string;
    shareText: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  finalCta: {
    eyebrow: string;
    title: ReactNode;
    body: ReactNode;
    recap: string[];
    panelTitle: string;
    panelBody: string;
    cta: string;
    reassurance: string[];
  };
  footer: {
    tagline: string;
    getInTouch: string;
    chat: string;
    rights: string;
    note: string;
  };
  floating: { label: string; aria: string };
};

const en: Dict = {
  nav: { whatsapp: "WhatsApp", toggleLabel: "മലയാളം", toggleHref: "/ml" },
  hero: {
    trust: "15+ Years of Trusted Experience",
    title: (
      <>
        Finally experience Umrah {emEn("together")} — more meaningful, more
        peaceful, and {emEn("closer to Allah and each other.")}
      </>
    ),
    sub: (
      <>
        No crowded groups. No shared bed spaces. No rushing through a generic
        itinerary. Zawj brings couples together for a curated Umrah with{" "}
        <span className="font-semibold text-ink">
          more privacy, personal space, and meaningful time together.
        </span>
      </>
    ),
    ctaPrimary: "Talk to us on WhatsApp",
    ctaSecondary: "Explore in detail",
    reassurance: ["Couples only", "Limited spots", "Dedicated support"],
  },
  problem: {
    eyebrow: "The problem",
    title: (
      <>
        The Umrah market gives couples two choices: join the {emEn("crowd")} or
        pay a {emEn("premium")} to escape it.
      </>
    ),
    body: (
      <>
        Join a traditional package and you&rsquo;re sharing spaces, following a
        group itinerary, and experiencing Umrah the same way everyone else does.
        Want something more private and personal?{" "}
        <span className="font-semibold text-ink">
          A custom package for just two can quickly become far more expensive.
        </span>
      </>
    ),
    pressPlay: "Press play",
  },
  value: [
    {
      eyebrow: "Designed for two",
      headline: (
        <>
          An Umrah Designed for {emEn("Two")}, Not Forty.
        </>
      ),
      points: [
        "Private rooms for every couple",
        "A 40-seat bus for just 12 couples",
        "A couples-only group",
        "Sessions and experiences created specifically for couples",
      ],
      cta: "See the Zawj Experience",
    },
    {
      eyebrow: "Smart value",
      headline: (
        <>
          The Experience of a {emEn("Custom Umrah")}, Without the Custom Trip
          Price.
        </>
      ),
      points: [
        "A couples-first experience with the efficiencies of a group",
        "Private rooms without paying for a fully private trip",
        "A thoughtfully planned itinerary without the cost of building one from scratch",
        "More personal than a group package, more accessible than a custom trip",
      ],
      cta: "See What's Included",
    },
    {
      eyebrow: "Growing together",
      headline: (
        <>
          An Umrah That Helps You Build the{" "}
          {emEn("Life You’re Praying For.")}
        </>
      ),
      points: [
        {
          title: "Marriage in Islam",
          desc: "Understand marriage, communication, responsibilities, and growing together through an Islamic perspective.",
        },
        {
          title: "Family Circle",
          desc: "Navigate marriage, parents, children, parenthood, and building your own family.",
        },
        {
          title: "Work and Life Balance",
          desc: "Learn how to protect your marriage and family while navigating careers, ambition, technology, and modern life.",
        },
        {
          title: "Couples Workshop",
          desc: "A practical session to turn these conversations into things you can take home and implement together.",
        },
      ],
      cta: "Explore the Journey",
    },
  ],
  comparison: {
    eyebrow: "The difference",
    title: (
      <>
        A normal package vs. {emEn("Zawj")}
      </>
    ),
    colNormal: "Normal package",
    colZawj: "Zawj",
    rows: [
      { label: "Group size", normal: "40+ pilgrims", zawj: "12 couples" },
      { label: "Your room", normal: "Shared spaces", zawj: "Private room" },
      { label: "Your group", normal: "Mixed crowd", zawj: "Couples only" },
      { label: "Experience", normal: "Generic", zawj: "Made for couples" },
      { label: "Itinerary", normal: "Fixed schedule", zawj: "Thoughtfully curated" },
      { label: "Price", normal: "$", zawj: "$$" },
    ],
    caption: "Everything a couple actually wants from Umrah — without the crowd.",
  },
  steps: {
    eyebrow: "How it works",
    title: (
      <>
        Experience the Umrah you&rsquo;ve always wanted in{" "}
        {emEn("4 simple steps")}
      </>
    ),
    items: [
      {
        title: "Tell Us You're Interested",
        desc: "Share a few details about you and your partner, and our team will get in touch to understand your plans and answer your questions.",
      },
      {
        title: "Speak With Our Zawj Team",
        desc: "We'll walk you through the October journey, what's included, the experience, and everything you need to know before you decide.",
      },
      {
        title: "Reserve Your Couple's Spot",
        desc: "Once you're ready, secure your place in the journey and complete the booking process with our team guiding you throughout.",
      },
      {
        title: "We Take Care of the Journey",
        desc: "From your stay and transportation to the experiences and sessions, everything is arranged so you can focus on your ibadah and enjoy the journey together.",
      },
    ],
    cta: "Start with step one",
  },
  share: {
    eyebrow: "Better together",
    title: (
      <>
        Some journeys are best{" "}
        <em className="italic text-blush">decided together.</em>
      </>
    ),
    body: "Send this to your other half and start the conversation — your Umrah, together, begins with a single tap.",
    button: "Share with my partner",
    shareTitle: "Zawj — A Couple's Umrah",
    shareText:
      "I found something for us 🕋❤️ — an Umrah made just for couples, to experience together. Should we? Take a look:",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions couples ask us",
    items: [
      {
        q: "Who is the Zawj Umrah for?",
        a: "Zawj is designed exclusively for married couples who want to experience Umrah together — with more privacy, personal space, and meaningful time as a couple, rather than in a large mixed group.",
      },
      {
        q: "When is the journey?",
        a: "Our next couples' Umrah departs in October. Speak with our team and we'll share the exact dates, the full itinerary, and everything that's included before you decide.",
      },
      {
        q: "What's included in the package?",
        a: "Everything is arranged for you — your stay, transportation, a thoughtfully curated itinerary, and couples-focused sessions and experiences. You simply focus on your ibadah and your time together.",
      },
      {
        q: "How private is it, really?",
        a: "Every couple gets their own private room, the group is capped at just 12 couples on a 40-seat bus, and it's couples-only throughout — so you get the closeness of a private trip with the ease and value of a group.",
      },
      {
        q: "How do I reserve a spot?",
        a: "Just tell us you're interested. Our team will reach out, walk you through all the details, and guide you through securing your couple's spot from start to finish.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Only 12 couples · This October",
    title: (
      <>
        This October, only {emEn("12 couples")} will make this journey together.
      </>
    ),
    body: (
      <>
        Once the spots are filled, they&rsquo;re gone. If you and your partner
        want an Umrah with real privacy, space, and meaning,{" "}
        <span className="font-semibold text-ink">
          this is the moment to reach out.
        </span>
      </>
    ),
    recap: [
      "Private rooms and a couples-only group of just 12",
      "Custom-trip closeness, without the custom-trip price",
      "Sessions that nurture your marriage, not just your itinerary",
    ],
    panelTitle: "Reserve your couple's spot",
    panelBody:
      "Tell us you're interested and our team takes it from there — no pressure, just a conversation.",
    cta: "Talk to us on WhatsApp",
    reassurance: [
      "15+ years of trusted experience",
      "Dedicated couple support",
      "Just a conversation, no obligation",
    ],
  },
  footer: {
    tagline:
      "A thoughtfully curated Umrah for couples — more privacy, personal space, and meaningful time together, guided by 15+ years of trusted experience.",
    getInTouch: "Get in touch",
    chat: "Chat on WhatsApp",
    rights: "All rights reserved.",
    note: "A couples-only Umrah experience.",
  },
  floating: { label: "Chat with us", aria: "Chat with us on WhatsApp" },
};

const ml: Dict = {
  nav: { whatsapp: "വാട്‌സാപ്പ്", toggleLabel: "English", toggleHref: "/" },
  hero: {
    trust: "15+ വർഷത്തെ വിശ്വസ്ത അനുഭവം",
    title: (
      <>
        ഒടുവിൽ ഉംറ {emMl("ഒരുമിച്ച്")} അനുഭവിക്കൂ — കൂടുതൽ അർത്ഥവത്തും, കൂടുതൽ
        ശാന്തവും, {emMl("അല്ലാഹുവിനോടും പരസ്പരവും കൂടുതൽ അടുത്തും.")}
      </>
    ),
    sub: (
      <>
        തിരക്കേറിയ ഗ്രൂപ്പുകളില്ല. പങ്കിടുന്ന കിടക്കകളില്ല. സാധാരണ പദ്ധതിയിലൂടെയുള്ള
        തിടുക്കമില്ല. കൂടുതൽ സ്വകാര്യതയോടെയും വ്യക്തിഗത ഇടത്തോടെയും ഒരുമിച്ചുള്ള
        അർത്ഥവത്തായ സമയത്തോടെയും ഒരു പ്രത്യേക ഉംറയ്ക്കായി{" "}
        <span className="font-semibold text-ink">
          സൗജ് ദമ്പതികളെ ഒരുമിപ്പിക്കുന്നു.
        </span>
      </>
    ),
    ctaPrimary: "വാട്‌സാപ്പിൽ സംസാരിക്കൂ",
    ctaSecondary: "വിശദമായി അറിയൂ",
    reassurance: ["ദമ്പതികൾക്ക് മാത്രം", "പരിമിതമായ സീറ്റുകൾ", "സമർപ്പിത പിന്തുണ"],
  },
  problem: {
    eyebrow: "പ്രശ്നം",
    title: (
      <>
        ഉംറ വിപണി ദമ്പതികൾക്ക് രണ്ട് വഴികളേ നൽകുന്നുള്ളൂ: {emMl("തിരക്കിൽ")} ചേരുക,
        അല്ലെങ്കിൽ അതിൽ നിന്ന് രക്ഷപ്പെടാൻ {emMl("കൂടുതൽ പണം")} നൽകുക.
      </>
    ),
    body: (
      <>
        ഒരു സാധാരണ പാക്കേജിൽ ചേർന്നാൽ നിങ്ങൾ ഇടങ്ങൾ പങ്കിടുന്നു, ഒരു ഗ്രൂപ്പ്
        പദ്ധതി പിന്തുടരുന്നു, മറ്റെല്ലാവരെയും പോലെ ഉംറ അനുഭവിക്കുന്നു. കൂടുതൽ
        സ്വകാര്യവും വ്യക്തിഗതവുമായ എന്തെങ്കിലും വേണോ?{" "}
        <span className="font-semibold text-ink">
          രണ്ടുപേർക്ക് മാത്രമുള്ള ഒരു കസ്റ്റം പാക്കേജ് പെട്ടെന്ന് വളരെ
          ചെലവേറിയതായി മാറും.
        </span>
      </>
    ),
    pressPlay: "പ്ലേ ചെയ്യൂ",
  },
  value: [
    {
      eyebrow: "രണ്ടുപേർക്കായി",
      headline: (
        <>
          നാൽപ്പതു പേർക്കല്ല, {emMl("രണ്ടുപേർക്കായി")} ഒരുക്കിയ ഒരു ഉംറ.
        </>
      ),
      points: [
        "ഓരോ ദമ്പതികൾക്കും സ്വകാര്യ മുറികൾ",
        "12 ദമ്പതികൾക്ക് മാത്രമായി 40 സീറ്റ് ബസ്",
        "ദമ്പതികൾ മാത്രമുള്ള ഗ്രൂപ്പ്",
        "ദമ്പതികൾക്കായി പ്രത്യേകം ഒരുക്കിയ സെഷനുകളും അനുഭവങ്ങളും",
      ],
      cta: "സൗജ് അനുഭവം കാണൂ",
    },
    {
      eyebrow: "മികച്ച മൂല്യം",
      headline: (
        <>
          കസ്റ്റം യാത്രയുടെ വിലയില്ലാതെ, {emMl("കസ്റ്റം ഉംറയുടെ അനുഭവം.")}
        </>
      ),
      points: [
        "ഗ്രൂപ്പിന്റെ സൗകര്യങ്ങളോടെ ദമ്പതികൾക്ക് മുൻഗണന നൽകുന്ന അനുഭവം",
        "പൂർണ്ണ സ്വകാര്യ യാത്രയ്ക്ക് പണം നൽകാതെ സ്വകാര്യ മുറികൾ",
        "പുതുതായി ഒരുക്കുന്നതിന്റെ ചെലവില്ലാതെ ശ്രദ്ധയോടെ ആസൂത്രണം ചെയ്ത യാത്രാ പദ്ധതി",
        "ഗ്രൂപ്പ് പാക്കേജിനെക്കാൾ വ്യക്തിഗതം, കസ്റ്റം യാത്രയെക്കാൾ പ്രാപ്യം",
      ],
      cta: "ഉൾപ്പെടുന്നത് കാണൂ",
    },
    {
      eyebrow: "ഒരുമിച്ച് വളരാം",
      headline: (
        <>
          {emMl("നിങ്ങൾ പ്രാർത്ഥിക്കുന്ന ജീവിതം")} കെട്ടിപ്പടുക്കാൻ സഹായിക്കുന്ന
          ഒരു ഉംറ.
        </>
      ),
      points: [
        {
          title: "ഇസ്‌ലാമിലെ വിവാഹം",
          desc: "വിവാഹം, ആശയവിനിമയം, ഉത്തരവാദിത്തങ്ങൾ, ഒരുമിച്ചുള്ള വളർച്ച എന്നിവ ഇസ്‌ലാമിക വീക്ഷണത്തിലൂടെ മനസ്സിലാക്കൂ.",
        },
        {
          title: "കുടുംബ വൃത്തം",
          desc: "വിവാഹം, മാതാപിതാക്കൾ, മക്കൾ, രക്ഷാകർതൃത്വം, സ്വന്തം കുടുംബം കെട്ടിപ്പടുക്കൽ എന്നിവയിലൂടെ വഴിനടക്കൂ.",
        },
        {
          title: "ജോലിയും ജീവിതവും",
          desc: "കരിയർ, ലക്ഷ്യങ്ങൾ, സാങ്കേതികവിദ്യ, ആധുനിക ജീവിതം എന്നിവയ്ക്കിടയിൽ നിങ്ങളുടെ വിവാഹവും കുടുംബവും സംരക്ഷിക്കാൻ പഠിക്കൂ.",
        },
        {
          title: "ദമ്പതികളുടെ വർക്ക്‌ഷോപ്പ്",
          desc: "ഈ സംഭാഷണങ്ങൾ വീട്ടിലേക്ക് കൊണ്ടുപോയി ഒരുമിച്ച് നടപ്പിലാക്കാവുന്ന കാര്യങ്ങളാക്കി മാറ്റുന്ന ഒരു പ്രായോഗിക സെഷൻ.",
        },
      ],
      cta: "യാത്ര അറിയൂ",
    },
  ],
  comparison: {
    eyebrow: "വ്യത്യാസം",
    title: (
      <>
        സാധാരണ പാക്കേജ് vs. {emMl("സൗജ്")}
      </>
    ),
    colNormal: "സാധാരണ പാക്കേജ്",
    colZawj: "സൗജ്",
    rows: [
      { label: "ഗ്രൂപ്പ് വലുപ്പം", normal: "40+ തീർത്ഥാടകർ", zawj: "12 ദമ്പതികൾ" },
      { label: "നിങ്ങളുടെ മുറി", normal: "പങ്കിടുന്ന ഇടങ്ങൾ", zawj: "സ്വകാര്യ മുറി" },
      { label: "നിങ്ങളുടെ ഗ്രൂപ്പ്", normal: "സമ്മിശ്ര ജനക്കൂട്ടം", zawj: "ദമ്പതികൾ മാത്രം" },
      { label: "അനുഭവം", normal: "സാധാരണം", zawj: "ദമ്പതികൾക്കായി" },
      { label: "യാത്രാ പദ്ധതി", normal: "നിശ്ചിത ഷെഡ്യൂൾ", zawj: "ശ്രദ്ധയോടെ ഒരുക്കിയത്" },
      { label: "വില", normal: "$", zawj: "$$" },
    ],
    caption: "തിരക്കില്ലാതെ, ഒരു ദമ്പതികൾ ഉംറയിൽ നിന്ന് യഥാർത്ഥത്തിൽ ആഗ്രഹിക്കുന്നതെല്ലാം.",
  },
  steps: {
    eyebrow: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    title: (
      <>
        നിങ്ങൾ എപ്പോഴും ആഗ്രഹിച്ച ഉംറ {emMl("4 ലളിതമായ ഘട്ടങ്ങളിലൂടെ")}{" "}
        അനുഭവിക്കൂ
      </>
    ),
    items: [
      {
        title: "താൽപ്പര്യമുണ്ടെന്ന് ഞങ്ങളോട് പറയൂ",
        desc: "നിങ്ങളെയും പങ്കാളിയെയും കുറിച്ചുള്ള കുറച്ച് വിവരങ്ങൾ പങ്കിടൂ, നിങ്ങളുടെ പദ്ധതികൾ മനസ്സിലാക്കാനും ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകാനും ഞങ്ങളുടെ ടീം ബന്ധപ്പെടും.",
      },
      {
        title: "ഞങ്ങളുടെ സൗജ് ടീമുമായി സംസാരിക്കൂ",
        desc: "ഒക്ടോബർ യാത്ര, ഉൾപ്പെടുന്നത്, അനുഭവം, തീരുമാനിക്കുന്നതിന് മുമ്പ് അറിയേണ്ടതെല്ലാം ഞങ്ങൾ വിശദീകരിക്കും.",
      },
      {
        title: "നിങ്ങളുടെ ദമ്പതികളുടെ സീറ്റ് റിസർവ് ചെയ്യൂ",
        desc: "നിങ്ങൾ തയ്യാറായാൽ, യാത്രയിൽ നിങ്ങളുടെ സ്ഥാനം ഉറപ്പിക്കൂ, ഞങ്ങളുടെ ടീമിന്റെ മാർഗനിർദേശത്തോടെ ബുക്കിംഗ് പൂർത്തിയാക്കൂ.",
      },
      {
        title: "യാത്ര ഞങ്ങൾ ശ്രദ്ധിക്കും",
        desc: "താമസവും യാത്രാ സൗകര്യവും മുതൽ അനുഭവങ്ങളും സെഷനുകളും വരെ എല്ലാം ഒരുക്കിയിരിക്കുന്നു, അതിനാൽ നിങ്ങൾക്ക് ഇബാദത്തിൽ ശ്രദ്ധിക്കാനും യാത്ര ഒരുമിച്ച് ആസ്വദിക്കാനും കഴിയും.",
      },
    ],
    cta: "ആദ്യ ഘട്ടത്തിൽ തുടങ്ങൂ",
  },
  share: {
    eyebrow: "ഒരുമിച്ചാവുമ്പോൾ മികച്ചത്",
    title: (
      <>
        ചില യാത്രകൾ{" "}
        <em className="text-blush">ഒരുമിച്ച് തീരുമാനിക്കുന്നതാണ് നല്ലത്.</em>
      </>
    ),
    body: "ഇത് നിങ്ങളുടെ പാതിയ്ക്ക് അയക്കൂ, സംഭാഷണം തുടങ്ങൂ — ഒരുമിച്ചുള്ള നിങ്ങളുടെ ഉംറ ഒരൊറ്റ ടാപ്പിൽ തുടങ്ങുന്നു.",
    button: "എന്റെ പങ്കാളിക്ക് ഷെയർ ചെയ്യൂ",
    shareTitle: "സൗജ് — ദമ്പതികളുടെ ഉംറ",
    shareText:
      "നമുക്കായി ഞാൻ ഒന്ന് കണ്ടെത്തി 🕋❤️ — ദമ്പതികൾക്കായി മാത്രം ഒരുക്കിയ, ഒരുമിച്ച് അനുഭവിക്കാനുള്ള ഒരു ഉംറ. നമുക്ക് പോയാലോ? ഒന്ന് നോക്കൂ:",
  },
  faq: {
    eyebrow: "പതിവ് ചോദ്യങ്ങൾ",
    title: "ദമ്പതികൾ ഞങ്ങളോട് ചോദിക്കുന്ന ചോദ്യങ്ങൾ",
    items: [
      {
        q: "സൗജ് ഉംറ ആർക്കുവേണ്ടിയാണ്?",
        a: "വലിയൊരു സമ്മിശ്ര ഗ്രൂപ്പിനുപകരം, കൂടുതൽ സ്വകാര്യതയോടെയും വ്യക്തിഗത ഇടത്തോടെയും ദമ്പതികൾ എന്ന നിലയിൽ അർത്ഥവത്തായ സമയത്തോടെയും ഉംറ ഒരുമിച്ച് അനുഭവിക്കാൻ ആഗ്രഹിക്കുന്ന വിവാഹിത ദമ്പതികൾക്കായി മാത്രമാണ് സൗജ് രൂപകൽപന ചെയ്തിരിക്കുന്നത്.",
      },
      {
        q: "യാത്ര എപ്പോഴാണ്?",
        a: "ഞങ്ങളുടെ അടുത്ത ദമ്പതികളുടെ ഉംറ ഒക്ടോബറിൽ പുറപ്പെടും. ഞങ്ങളുടെ ടീമുമായി സംസാരിക്കൂ, കൃത്യമായ തീയതികൾ, പൂർണ്ണ യാത്രാ പദ്ധതി, ഉൾപ്പെടുന്നതെല്ലാം തീരുമാനിക്കുന്നതിന് മുമ്പ് ഞങ്ങൾ പങ്കിടും.",
      },
      {
        q: "പാക്കേജിൽ എന്തൊക്കെ ഉൾപ്പെടുന്നു?",
        a: "എല്ലാം നിങ്ങൾക്കായി ഒരുക്കിയിരിക്കുന്നു — താമസം, യാത്രാ സൗകര്യം, ശ്രദ്ധയോടെ ഒരുക്കിയ യാത്രാ പദ്ധതി, ദമ്പതികളെ കേന്ദ്രീകരിച്ചുള്ള സെഷനുകളും അനുഭവങ്ങളും. നിങ്ങൾ ഇബാദത്തിലും ഒരുമിച്ചുള്ള സമയത്തിലും മാത്രം ശ്രദ്ധിച്ചാൽ മതി.",
      },
      {
        q: "ഇത് യഥാർത്ഥത്തിൽ എത്ര സ്വകാര്യമാണ്?",
        a: "ഓരോ ദമ്പതികൾക്കും സ്വന്തം സ്വകാര്യ മുറി ലഭിക്കും, 40 സീറ്റ് ബസിൽ ഗ്രൂപ്പ് 12 ദമ്പതികളായി പരിമിതപ്പെടുത്തിയിരിക്കുന്നു, തുടക്കം മുതൽ ഒടുക്കം വരെ ദമ്പതികൾ മാത്രം — അതിനാൽ ഒരു ഗ്രൂപ്പിന്റെ സൗകര്യത്തോടും മൂല്യത്തോടും കൂടി ഒരു സ്വകാര്യ യാത്രയുടെ അടുപ്പം നിങ്ങൾക്ക് ലഭിക്കും.",
      },
      {
        q: "ഞാൻ എങ്ങനെ സീറ്റ് റിസർവ് ചെയ്യും?",
        a: "നിങ്ങൾക്ക് താൽപ്പര്യമുണ്ടെന്ന് ഞങ്ങളോട് പറഞ്ഞാൽ മതി. ഞങ്ങളുടെ ടീം ബന്ധപ്പെടും, എല്ലാ വിവരങ്ങളും വിശദീകരിക്കും, തുടക്കം മുതൽ ഒടുക്കം വരെ നിങ്ങളുടെ ദമ്പതികളുടെ സീറ്റ് ഉറപ്പിക്കാൻ മാർഗനിർദേശം നൽകും.",
      },
    ],
  },
  finalCta: {
    eyebrow: "12 ദമ്പതികൾ മാത്രം · ഈ ഒക്ടോബർ",
    title: (
      <>
        ഈ ഒക്ടോബറിൽ, {emMl("12 ദമ്പതികൾ")} മാത്രം ഈ യാത്ര ഒരുമിച്ച് നടത്തും.
      </>
    ),
    body: (
      <>
        സീറ്റുകൾ നിറഞ്ഞാൽ, അവ പോയി. യഥാർത്ഥ സ്വകാര്യതയും ഇടവും അർത്ഥവുമുള്ള ഒരു ഉംറ
        നിങ്ങളും പങ്കാളിയും ആഗ്രഹിക്കുന്നുവെങ്കിൽ,{" "}
        <span className="font-semibold text-ink">
          ബന്ധപ്പെടാനുള്ള നിമിഷം ഇതാണ്.
        </span>
      </>
    ),
    recap: [
      "സ്വകാര്യ മുറികളും 12 പേർ മാത്രമുള്ള ദമ്പതികളുടെ ഗ്രൂപ്പും",
      "കസ്റ്റം യാത്രയുടെ വിലയില്ലാതെ, കസ്റ്റം യാത്രയുടെ അടുപ്പം",
      "യാത്രാ പദ്ധതി മാത്രമല്ല, നിങ്ങളുടെ വിവാഹത്തെ പരിപോഷിപ്പിക്കുന്ന സെഷനുകൾ",
    ],
    panelTitle: "നിങ്ങളുടെ ദമ്പതികളുടെ സീറ്റ് റിസർവ് ചെയ്യൂ",
    panelBody:
      "നിങ്ങൾക്ക് താൽപ്പര്യമുണ്ടെന്ന് ഞങ്ങളോട് പറയൂ, ബാക്കി ഞങ്ങളുടെ ടീം ഏറ്റെടുക്കും — സമ്മർദ്ദമില്ല, ഒരു സംഭാഷണം മാത്രം.",
    cta: "വാട്‌സാപ്പിൽ സംസാരിക്കൂ",
    reassurance: [
      "15+ വർഷത്തെ വിശ്വസ്ത അനുഭവം",
      "സമർപ്പിത ദമ്പതി പിന്തുണ",
      "ഒരു സംഭാഷണം മാത്രം, ബാധ്യതയില്ല",
    ],
  },
  footer: {
    tagline:
      "ദമ്പതികൾക്കായി ശ്രദ്ധയോടെ ഒരുക്കിയ ഒരു ഉംറ — 15+ വർഷത്തെ വിശ്വസ്ത അനുഭവത്തിന്റെ പിന്തുണയോടെ, കൂടുതൽ സ്വകാര്യതയും വ്യക്തിഗത ഇടവും ഒരുമിച്ചുള്ള അർത്ഥവത്തായ സമയവും.",
    getInTouch: "ബന്ധപ്പെടൂ",
    chat: "വാട്‌സാപ്പിൽ ചാറ്റ് ചെയ്യൂ",
    rights: "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
    note: "ദമ്പതികൾക്ക് മാത്രമുള്ള ഒരു ഉംറ അനുഭവം.",
  },
  floating: { label: "ഞങ്ങളോട് ചാറ്റ് ചെയ്യൂ", aria: "വാട്‌സാപ്പിൽ ഞങ്ങളോട് ചാറ്റ് ചെയ്യൂ" },
};

export const dict: Record<Lang, Dict> = { en, ml };
