import { MyContext } from "./MyContext";
import { useState } from "react";
export const MyProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      {children}
    </MyContext.Provider>
  );
};
