import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getAuth } from "../getAuth";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const [isFetched, setIsFetched] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await getAuth();

      setUser(user);
      setIsFetched(true);
    };
    fetchUser();
  }, [pathname]);

  return {
    user,
    isFetched,
  };
};
