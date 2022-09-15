import { Routes, Route } from "react-router-dom";
import { Home, Create, Download, About, Signin, Signup } from "./pages";
import { Nav, ScrollToTop } from "./components";

function App() {
  return (
    <>
      <Nav />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
