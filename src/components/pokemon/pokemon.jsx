import { Link } from "react-router-dom";
import "./pokemon.css"
function Pokemon({name,image,id})
{
     return(
         <Link to={`/Detailes/${id}`}>
         <div className="pokemon-wrapper">
             <div className="name"><span>{name}</span></div>
             <img src={image} alt="" />
         </div>
         </Link>
     )
}
export default Pokemon;