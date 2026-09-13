export const SHARE_TITLE = "Zawj — 7 ദിവസത്തെ Couples Only Umrah";

export const SHARE_TEXT =
  "നമുക്കായി ഞാൻ ഒന്ന് കണ്ടെത്തി 🕋❤️ — couples-നായി മാത്രം ഒരുക്കിയ, ഒരുമിച്ച് അനുഭവിക്കാനുള്ള ഒരു 7 ദിവസത്തെ Umrah. നമുക്ക് പോയാലോ? ഒന്ന് നോക്കൂ:";

/** Share the current page — native share sheet, with a WhatsApp fallback. */
export async function shareWithPartner() {
  const url = typeof window !== "undefined" ? window.location.href : "";
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url });
      return;
    } catch {
      // cancelled / unsupported — fall through to WhatsApp
    }
  }
  window.open(
    `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${url}`)}`,
    "_blank",
    "noopener,noreferrer"
  );
}
