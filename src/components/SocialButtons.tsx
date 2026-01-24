import { useState } from "react";
import { SocialLinkType } from "../types";

const SocialButtons = ({ social }: { social: (SocialLinkType & { color?: string }) }) => {
  const Icon = social.icon;
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (social.isEmail) {
      window.location.href = social.url;
    } else {
      window.open(social.url, "_blank", "noopener noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center transition-all duration-300 group/social"
      aria-label={`Visit ${social.name}`}
    >
      <Icon
        className="h-6 w-6 transition-all duration-300 text-text-muted"
        style={{ color: isHovered ? social.color : undefined, transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
      />
    </button>
  );
};

export default SocialButtons;
