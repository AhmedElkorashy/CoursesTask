import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
};

export default App;
