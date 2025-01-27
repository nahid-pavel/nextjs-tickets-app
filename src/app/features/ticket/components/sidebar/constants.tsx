import {
  faBook,
  faClipboard,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { NavBaritems } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navItems: NavBaritems[] = [
  {
    title: "All Tickets",
    icon: <FontAwesomeIcon icon={faClipboard} />,
    href: "/",
  },
  {
    title: "My Tickets",
    icon: <FontAwesomeIcon icon={faBook} />,
    href: "/tickets",
  },
  {
    separator: true,
    title: "Account",
    icon: <FontAwesomeIcon icon={faCreditCard} />,
    href: "/accounts/profile",
  },
];

export const closedClassName =
  "text-background opacity-0 transition-all duration-300 group-hover:z-40 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100";
