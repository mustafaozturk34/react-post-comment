import React from "react";
import YaziListesi from "./components/YaziListesi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YaziDetayi from "./components/YaziDetayi";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" element={<YaziListesi />} />
            <Route path="/posts/:id" element={<YaziDetayi />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
