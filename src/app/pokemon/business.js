export const parsePokemonData = (pokemon) => {
  const typesNames = pokemon.types.map((type) => type.type.name)
  const image = pokemon.sprites.front_default
  const games = pokemon.game_indices.map((game) => game.version.name)

  return {
    id: pokemon.id,
    name: pokemon.name,
    image,
    types: typesNames,
    games,
  }
}

export const formatId = (id) => `#${id.toString().padStart(3, "0")}`

export const parseTypes = (types) => types.map((type) => type.name)
