import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { checkLogin } from "../services/authService";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage on app load
  // useEffect(() => {
  //   const savedUser = localStorage.getItem("user");
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //   } else {
  //     setUser(null);
  //   }
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const loggedInUser = await checkLogin();
        if (!isMounted) return;
        setUser(loggedInUser.user);
      } catch (err) {
        setUser(null);
        console.log(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
