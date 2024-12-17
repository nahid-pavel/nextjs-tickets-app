import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center self-center">
      <FontAwesomeIcon icon={faSpinner} className="h-16 w-16 animate-spin" />
    </div>
  );
};
