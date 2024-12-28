"use client";

import { deleteCookiesByKey, getCookieByKey } from "@/app/actions/cookies";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export const RedirectToast = () => {
  const pathanme = usePathname();
  useEffect(() => {
    const fetchToast = async () => {
      const message = await getCookieByKey("toast");
      if (!!message) {
        toast.success(message);
        deleteCookiesByKey("toast");
      }
    };
    fetchToast();
  }, [pathanme]);
  return null;
};
