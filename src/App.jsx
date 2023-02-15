import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/nav/Navbar";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
