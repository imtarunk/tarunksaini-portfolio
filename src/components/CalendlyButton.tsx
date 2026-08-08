import { useEffect } from "react";

import { CALENDLY_URL } from "../constants/about";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyButton = ({
  variant = "secondary",
}: {
  variant?: "secondary" | "ghost";
}) => {
  useEffect(() => {
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
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
      className={variant === "ghost" ? "btn-ghost" : "btn-secondary"}
      type="button"
    >
      Book a call
    </button>
  );
};

export default CalendlyButton;
