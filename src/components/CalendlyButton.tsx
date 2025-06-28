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
      className="btn-primary text-sm flex items-center gap-2 px-4 py-2 rounded bg-[#0069ff] text-white hover:bg-blue-700 transition"
      type="button"
    >
      <SiCalendly
        className="h-5 w-5"
        color="#fff"
        style={{ background: "#0069ff", borderRadius: "3px" }}
      />
      Book a Meeting
    </button>
  );
};

export default CalendlyButton;
