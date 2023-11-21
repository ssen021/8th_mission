import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TVs from "./pages/TVs";
import MovieDetail from "./pages/MovieDetail";
import Loginpage from "./pages/Loginpage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TVs />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/Login"
            element={<Loginpage setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
