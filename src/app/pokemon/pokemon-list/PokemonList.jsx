"use client"

import { useEffect, useRef, useState } from "react"
import useSWRInfinite from "swr/infinite"

import useTranslations from "@/i18n/useTranslations"

import PokemonCard from "../pokemon-card"
import PokemonModal from "../pokemon-modal"
import Filters from "../filters"
import TypesFilter from "../types-filter"

import { fetchPokemonList, fetchTypes } from "../api"

import usePokemonInfiniteScroll from "../usePokemonInfiniteScroll"

const PokemonList = ({ initialData }) => {
  const { t } = useTranslations()
  const [selectedTypes, setSelectedTypes] = useState([])

  const { data, error, isValidating, sentinelRef } = usePokemonInfiniteScroll(
    initialData,
    selectedTypes
  )

  const [isVisible, setIsVisible] = useState(false)

  const filterPokemonByType = (pokemonList, selectedTypes) => {
    if (!selectedTypes.length) {
      return pokemonList
    }
    return pokemonList.filter((pokemon) =>
      selectedTypes.every((selectedType) =>
        pokemon.types.includes(selectedType)
      )
    )
  }

  const flatList = Array.isArray(data) ? data.flat() : initialData
  const filteredPokemonList = filterPokemonByType(flatList, selectedTypes)

  const handleTypeFilterChange = (e) => {
    const values = e.map((option) => option.value)
    setSelectedTypes(values)
  }

  const hasSameTypes = (pokemonTypes) => {
    return selectedTypes.every((pokemonType) =>
      pokemonTypes.includes(pokemonType)
    )
  }

  return (
    <div className="pokemonList">
      <div className="pokemonList-filters">
        <Filters>
          <TypesFilter onChange={handleTypeFilterChange} />
        </Filters>
      </div>

      <div className="pokemonList-listContainer">
        <div className="pokemonList-list">
          {filteredPokemonList.length ? (
            filteredPokemonList.map((pokemon) => (
              <PokemonModal key={`pokemon-${pokemon.id}`} pokemon={pokemon}>
                <PokemonCard pokemon={pokemon} />
              </PokemonModal>
            ))
          ) : (
            <div className="pokemonList-empty">{t("noun:no-matches")}</div>
          )}
        </div>

        <div className="pokemonList-sentinel" ref={sentinelRef}></div>
        {isValidating && (
          <p className="pokemonList-loading">{t("noun:loading")}</p>
        )}
      </div>
    </div>
  )
}

export default PokemonList
