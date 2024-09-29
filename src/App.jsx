import Nav from "./components/Nav";
import { Hero, Product, DetailsPage } from "./sections";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./sections/Contact";
import AboutUs from "./sections/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="relative ">
          <Nav />
          
          <Routes>
            <Route path="/product/:productId" element={<DetailsPage />} />
            <Route
              path="/"
              element={
                <>
                <Hero />
                  <section id={'location'}>
                  <Product />
                  </section>
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <AboutUs />
                </>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
