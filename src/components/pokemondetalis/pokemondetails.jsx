import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./pokemondetails.css"
function PokemonDetails()
{
    const [pokemondetailsdata,setpokemondetailsdata]=useState({});
   const {id}=useParams();
   console.log(id);
   async function downlodepokemon()
   {
         const responce=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(responce.data);
        setpokemondetailsdata({
            name:responce.data.name,
            image:responce.data.sprites.other.dream_world.front_default,
            Width:responce.data.weight,
            height:responce.data.height,
            types:responce.data.types.map((t)=>t.type.name)
        })

   }
   useEffect(()=>{
    downlodepokemon()
   },[])
   
   return(
       <>
          <div className="allpokemondetails">
                <h1 className="pokemondetails-name">Name:-{pokemondetailsdata.name}</h1>
                <img className="pokemondetails-image" src={pokemondetailsdata.image} alt="" />
                <h1 className="pokemondetails-height">Height:-{pokemondetailsdata.height}</h1>
                <h1 className="pokemondetails-width">Weidth:-{pokemondetailsdata.Width}</h1>
                <div className="pokemondetails-types">
                  {(!pokemondetailsdata.types)? "lodding...":pokemondetailsdata.types.map((el)=><h1 key={el}> {el}</h1>)} 
                </div>
          </div>
       </>
   )
}
export default PokemonDetails;