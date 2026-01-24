import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { MdAlternateEmail } from "react-icons/md";

import { SocialLinkType } from "../types";

export const socialsInfo: SocialLinkType[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:tarunshr145@gmail.com",
    icon: MdAlternateEmail,
    color: "#EA4335", // Gmail Red
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/imtarunk",
    icon: RxGithubLogo,
    color: "#333333", // GitHub Black
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/itarunsaini/",
    icon: RxLinkedinLogo,
    color: "#0077B5", // LinkedIn Blue
  },
  {
    id: 4,
    name: "Twitter",
    url: "https://x.com/imtarun_saini",
    icon: RxTwitterLogo,
    color: "#1DA1F2", // Twitter Blue
  },
];
