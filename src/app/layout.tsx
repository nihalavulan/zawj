import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Zawj — 7 ദിവസത്തെ Couples Only Umrah",
  description:
    "നിങ്ങളിരുവർക്കും വേണ്ടി മാത്രം ഒരുക്കിയ 7 ദിവസത്തെ Couples Only Umrah അനുഭവം — വെറും 12 couples, thoughtfully curated.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ml"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yg0ph2jlwx");`}
        </Script>
      </body>
    </html>
  );
}
