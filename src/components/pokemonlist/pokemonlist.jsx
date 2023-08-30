import usepokemonlist from "../../hookes/uespokemonlist";
import Pokemon from "../pokemon/pokemon";
import "./pokemonlist.css"
function Pokemonlist()
{
    const {pokemonstate,setpokemonstate} = usepokemonlist();
   return(
       <>
       <div>
           <div className="pokemonlist-wrapper">
           {
             (pokemonstate.isloding)? "loading....":pokemonstate.storedata.map((el)=> <Pokemon key={el.id} name={el.name} image={el.image}id={el.id}/>)
           }
           </div>
           <button disabled={pokemonstate.pre == null} onClick={()=>setpokemonstate({...pokemonstate,pokemon_url:pokemonstate.pre})}>Pre</button>
           <button disabled={pokemonstate.next == null} onClick={()=>setpokemonstate({...pokemonstate,pokemon_url:pokemonstate.next})}>Next</button>
        </div>
       </>
   )
}
export default Pokemonlist;