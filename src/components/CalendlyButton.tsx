import { useEffect } from "react";
import { SiCalendly } from "react-icons/si";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/tarunshr145";

const CalendlyButton = () => {
  useEffect(() => {
    // Inject Calendly widget CSS
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    // Inject Calendly widget JS
    if (!document.getElementById("calendly-widget-js")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-background-secondary border border-border-primary text-text-primary font-bold text-xl hover:border-accent hover:bg-accent-soft transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 w-full sm:w-auto"
      type="button"
    >
      <SiCalendly
        className="h-6 w-6 text-[#0069ff]"
      />
      Book a Meeting
    </button>
  );
};

export default CalendlyButton;
