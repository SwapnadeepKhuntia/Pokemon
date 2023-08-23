import "./pokemon.css"
function Pokemon({name,image})
{
     return(
         <div className="pokemon-wrapper">
             <div className="name"><span>{name}</span></div>
             <img src={image} alt="" />
         </div>
     )
}
export default Pokemon;