import {
  faFile,
  faCheckCircle,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TICKET_ICONS = {
  OPEN: (
    <FontAwesomeIcon
      icon={faFile}
      style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}
    />
  ),
  DONE: (
    <FontAwesomeIcon
      icon={faCheckCircle}
      style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}
    />
  ),
  IN_PROGRESS: (
    <FontAwesomeIcon
      icon={faPencil}
      style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}
    />
  ),
};
