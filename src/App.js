import "./App.scss";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <div className="test"></div>

      <Footer />
    </div>
  );
}

export default App;
