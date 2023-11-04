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

  const flatList = Array.isArray(data) ? data.flat() : initialData

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
          {flatList.map((pokemon) =>
            !selectedTypes.length || hasSameTypes(pokemon.types) ? (
              <PokemonModal key={`pokemon-${pokemon.id}`} pokemon={pokemon}>
                <PokemonCard pokemon={pokemon} />
              </PokemonModal>
            ) : null
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
