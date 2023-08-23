import "./pokedex.css";
import Search from "../search/search";
import Pokemonlist from "../pokemonlist/pokemonlist";
function Pokedex()
{
    
   return(
       <div className="pokedex-div">
          <h1>POKEDEX</h1>
          <Search/>
          <Pokemonlist/>
       </div>
   )
}
export default Pokedex;