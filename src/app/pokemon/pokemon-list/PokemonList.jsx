import PokemonCard from "../pokemon-card"
import PokemonModal from "../pokemon-modal"

const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => (
        <PokemonModal key={`pokemon-${pokemon.id}`} pokemon={pokemon}>
          <PokemonCard pokemon={pokemon} />
        </PokemonModal>
      ))}
    </div>
  )
}

export default PokemonList
