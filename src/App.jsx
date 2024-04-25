import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection/LandingSection";
import NowPlayingMovies from "./components/NowPlayingMovies/NowPlayingMovies";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import WatchList from "./components/WatchList/WatchList";
import { Provider } from "react-redux";
import store from "./Store/index";
import LanguageContext from "./context/LanguageContenxt";
import { useState } from "react";

const App = () => {
  const lang = useState("en");
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LanguageContext.Provider value={lang}>
          <Header style={{ direction: "rtl" }} />
          <Routes>
            <Route path="/" element={<LandingSection />} />
            <Route path="/movies" element={<NowPlayingMovies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />{" "}
            <Route path="/register" element={<Register />} />
            <Route path="/WatchList" element={<WatchList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
