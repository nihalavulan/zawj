import { WHATSAPP_URL } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-ൽ ഞങ്ങളോട് ചാറ്റ് ചെയ്യൂ"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:shadow-xl sm:bottom-6 sm:right-6 sm:h-[3.75rem] sm:w-[3.75rem]"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-whatsapp opacity-60 motion-safe:animate-ping"
        style={{ animationDuration: "2.5s" }}
      />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-md transition group-hover:opacity-100 sm:block">
        WhatsApp-ൽ ചാറ്റ് ചെയ്യൂ
      </span>
    </a>
  );
}
