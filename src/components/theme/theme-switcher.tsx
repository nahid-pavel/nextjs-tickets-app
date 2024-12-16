"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        variant="outline"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <FontAwesomeIcon
          icon={faEye}
          className="scale-0 h-4 w-4 dark:scale-100 dark:rotate-0 transition-transform"
        />
        <FontAwesomeIcon
          icon={faSun}
          className="absolute scale-100 h-4 w-4 dark:scale-0 -rotate-90 transition-all"
        />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </>
  );
};
