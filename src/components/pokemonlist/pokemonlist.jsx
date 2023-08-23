import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pokemon from "../pokemon/pokemon";
import "./pokemonlist.css"
function Pokemonlist()
{
 
    const [pokemon_url,setpokemon_url]=useState("https://pokeapi.co/api/v2/pokemon");
    const [storedata,setstoredata]=useState([]);
    const [isloding,setisloding] =useState(true)

    const[pre,setpre]=useState()
    const[next,setnext]=useState()

    const fatchdata = async() =>{
        setisloding(true)
        const responce = await axios.get(pokemon_url)
        console.log(responce.data);
        setpre(responce.data.previous);
        setnext(responce.data.next)
        setisloding(false)
        const alldata=responce.data.results;
        // console.log(alldata);
        const allurl = alldata.map((el)=> axios.get(el.url))
        // console.log(allurl);
        const pokemonurl = await axios.all(allurl);
        // console.log(pokemonurl);
        const pokemon = pokemonurl.map((el)=>{
            return{
              id:el.data.id,
              name:el.data.name,
              types:el.data.types,
              image:el.data.sprites.other.dream_world.front_default,

             
            }
        })
        // console.log(pokemon);
        setstoredata(pokemon)
    }

    useEffect(()=>{
        fatchdata()
    },[pokemon_url])

   return(
       <>
       <div>
           <div className="pokemonlist-wrapper">
           {
             (isloding)? "loading....": storedata.map((el)=> <Pokemon key={el.id} name={el.name} image={el.image}/>)
           }
           </div>
           <button disabled={pre == null} onClick={()=>setpokemon_url(pre)}>Pre</button>
           <button disabled={next == null} onClick={()=>setpokemon_url(next)}>Next</button>
        </div>
       </>
   )
}
export default Pokemonlist;