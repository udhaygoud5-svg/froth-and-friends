export default function WhatsAppFab() {
  return (
    <a
      id="whatsapp-fab"
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center"
    >
      <span
        className="material-symbols-outlined text-3xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        chat
      </span>
    </a>
  );
}
