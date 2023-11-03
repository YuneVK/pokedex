import Image from "next/image"

import TypeChip from "@/app/types/type-chip/index"

import { formatId } from "../business"

const PokemonCard = ({ pokemon, onClick }) => {
  const formattedId = formatId(pokemon.id)

  return (
    <div className="pokemonCard" onClick={onClick} role="button">
      <section className="pokemonCard-info">
        <p className="pokemonCard-id">{formattedId}</p>
        <h2 className="pokemonCard-name">{pokemon.name}</h2>

        <ul className="pokemonCard-types">
          {pokemon.types.map((type) => (
            <li key={`pokemon-${pokemon.id}-type-${type}`}>
              <TypeChip type={type} />
            </li>
          ))}
        </ul>
      </section>

      <Image
        className="pokemonCard-image"
        src={pokemon.image}
        alt="Pokemon name"
        width="150"
        height="150"
        unoptimized
        priority={false}
      />
    </div>
  )
}

export default PokemonCard
