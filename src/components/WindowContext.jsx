import { createContext, useContext, useState, useEffect } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowContext.Provider value={{ width }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => useContext(WindowContext);
