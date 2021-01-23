import Header from "./Components/Header/header-component";
import About from "./Components/About/about-component";
import Footer from "./Components/Footer/footer-component";
import "./App.styles.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
