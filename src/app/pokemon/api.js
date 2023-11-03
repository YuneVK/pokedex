import { getJson } from "@/enhancedFetch"

import { parsePokemonData } from "./business"
import { ELEMENTS_PER_PAGE } from "./config"

const PATHNAME = "/pokemon"

const getPokemonDetail = async (name) => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${PATHNAME}/${name}`
  )
  const pokemon = await getJson(url.toString())

  return parsePokemonData(pokemon)
}

export const fetchPokemonList = async (page = 1) => {
  const offset = (page - 1) * ELEMENTS_PER_PAGE
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}${PATHNAME}`)

  url.searchParams.append("offset", offset)
  url.searchParams.append("limit", ELEMENTS_PER_PAGE)

  const pokemonList = await getJson(url.toString())

  const detailsPromises = pokemonList.results.map((pokemon) =>
    getPokemonDetail(pokemon.name)
  )

  const pokemonDetails = await Promise.all(detailsPromises)

  return pokemonDetails
}
