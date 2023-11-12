import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/header.js/header";
import Footer from "./components/footer/footer";
import HomePage from "./components/homePage/homePage";

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
