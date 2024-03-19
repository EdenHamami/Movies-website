import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:id" element={<MoviePage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
