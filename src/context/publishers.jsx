/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const PublishersContext = createContext();

export const PublishersProvider = ({ children }) => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-oasis-68149-c720121aea60.herokuapp.com/publishers")
      .then((res) => res.json())
      .then((data) => setPublishers(data));
  }, []);

  const value = [publishers, setPublishers];
  return (
    <PublishersContext.Provider value={value}>
      {children}
    </PublishersContext.Provider>
  );
};
