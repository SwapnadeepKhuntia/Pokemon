import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pokemon from "../pokemon/pokemon";
import "./pokemonlist.css"
function Pokemonlist()
{
 
    // const [pokemon_url,setpokemon_url]=useState("https://pokeapi.co/api/v2/pokemon");
    // const [storedata,setstoredata]=useState([]);
    // const [isloding,setisloding] =useState(true)
    // const[pre,setpre]=useState()
    // const[next,setnext]=useState()


    const [pokemonstate,setpokemonstate]=useState({
        pokemon_url:"https://pokeapi.co/api/v2/pokemon",
        storedata:[],
        isloding:true,
        pre:"",
        next:""
    });

    const fatchdata = async() =>{
        // setisloding(true)
        setpokemonstate((state)=>({...state,isloding:true}))
        const responce = await axios.get(pokemonstate.pokemon_url)
        console.log(responce.data);
        // setpre(responce.data.previous);
        // setnext(responce.data.next)
        setpokemonstate((state)=>({
            ...state,
            pre:responce.data.previous,
            next:responce.data.next
        }))
        // setisloding(false)
        const alldata=responce.data.results;
        console.log(alldata);
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
        // setstoredata(pokemon)
        setpokemonstate((state)=>({...state,storedata:pokemon,isloding:false}))
    }

    useEffect(()=>{
        fatchdata()
    },[pokemonstate.pokemon_url])

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