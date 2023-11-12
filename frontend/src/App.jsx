import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Header from "./components/header.js/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homePage/homePage";
import SongsPage from "./pages/songsPage/songsPage";
import Register from "./pages/registerPage/registerPage";

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
