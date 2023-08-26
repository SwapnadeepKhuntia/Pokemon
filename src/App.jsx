import './App.css'
import Pokedex from './components/pokedex/pokedex'
import Customrouts from './routes/customroutes'
import Navbar from './navbar/nav'
import { Link } from "react-router-dom";
function App() {

  return (
    <>
      <Link to={`/`}><Navbar/></Link> 
       <Customrouts/>
    </>
  )
}

export default App
