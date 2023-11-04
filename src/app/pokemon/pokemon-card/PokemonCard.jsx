import Image from "next/image"

import TypeChip from "../type-chip"
import { formatId } from "../business"

const PokemonCard = ({ pokemon, onClick }) => {
  const formattedId = formatId(pokemon.id)

  return (
    <section className="pokemonCard" onClick={onClick} role="button">
      <div className="pokemonCard-info">
        <p className="pokemonCard-id">{formattedId}</p>
        <h2 className="pokemonCard-name">{pokemon.name}</h2>

        <ul className="pokemonCard-types">
          {pokemon.types.map((type) => (
            <li key={`pokemon-${pokemon.id}-type-${type}`}>
              <TypeChip type={type} />
            </li>
          ))}
        </ul>
      </div>

      <Image
        className="pokemonCard-image"
        src={pokemon.image}
        alt="Pokemon name"
        width="150"
        height="150"
        unoptimized
        priority={false}
      />
    </section>
  )
}

export default PokemonCard
