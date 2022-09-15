import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CalenderContext = createContext();

function CalenderContextProvider({ children }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [month, setMonth] = useState("January");

  const [state, setState] = useState(0);

  const handleChange = (value) => {
    if (state !== -1 && state !== 12) {
      setState((prev) => prev + value);
    }
  };

  useEffect(() => {
    if (state !== -1 && state !== 12) {
      setMonth(months[state]);
    }
  }, [state]);

  return (
    <CalenderContext.Provider value={{ month, handleChange }}>
      {children}
    </CalenderContext.Provider>
  );
}

export default CalenderContextProvider;
