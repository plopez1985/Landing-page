import {Navbar} from "./components/Navbar"
import {Jumbotron} from "./components/Jumbotron"
import {Card} from "./components/Card"
import { Footer } from "./components/Footer"

function App() {
  
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container-fluid">  
      <div className="row" > 
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
      </div>
      <div className="text-center" >
      <Footer />
       </div> 
      
    </>
  )
}

export default App
