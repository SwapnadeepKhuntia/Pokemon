import "./pokedex.css";
import Search from "../search/search";
import Pokemonlist from "../pokemonlist/pokemonlist";
function Pokedex()
{
    
   return(
       <div className="pokedex-div">
          <Search/>
          <Pokemonlist/>
       </div>
   )
}
export default Pokedex;