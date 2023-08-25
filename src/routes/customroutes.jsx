import{Routes,Route}from "react-router-dom";
import Pokedex from "../components/pokedex/pokedex";
import PokemonDetails from "../components/pokemondetalis/pokemondetails";
function Customrouts()
{
    return(
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/Detailes/:id" element={<PokemonDetails/>}/>
        </Routes>
    );
}
export default Customrouts;