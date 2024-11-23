import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
      </div>
      <div className="container my-2">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 pb-2">
            <Card />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 pb-2">
            <Card />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 pb-2">
            <Card />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 pb-2">
            <Card />
          </div>
        </div>
      </div>
      <div className="text-center">
        <Footer />
      </div>
    </>
  );
}

export default App;
