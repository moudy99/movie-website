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
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingSection />} />
          <Route path="/movies" element={<NowPlayingMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />{" "}
          <Route path="/register" element={<Register />} />
          <Route path="/WatchList" element={<WatchList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
