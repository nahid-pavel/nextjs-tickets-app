import { faPlaneLock } from "@fortawesome/free-solid-svg-icons/faPlaneLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { cloneElement } from "react";

interface PlaceholderProps {
  label?: string;
  icon?: React.ReactElement;
  button?: React.ReactNode;
}

export const Placeholder = ({
  label,
  icon = <FontAwesomeIcon icon={faPlaneLock} />,
  button = <div className="h-10" />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
};
