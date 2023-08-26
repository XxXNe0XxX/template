import { useState, useContext } from "react";
import React from "react";
const ContentContext = React.createContext();

export function useContent() {
  return useContext(ContentContext);
}

const ContentProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ContentContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
