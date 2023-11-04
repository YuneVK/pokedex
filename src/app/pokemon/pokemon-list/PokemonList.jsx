"use client"

import { useEffect, useMemo, useRef, useState } from "react"
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

  const filteredPokemonList = useMemo(() => {
    const flatList = Array.isArray(data) ? data.flat() : initialData
    return selectedTypes.length
      ? flatList.filter((pokemon) =>
          selectedTypes.every((type) => pokemon.types.includes(type))
        )
      : flatList
  }, [data, initialData, selectedTypes])

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
          {error && (
            <div className="pokemonList-message">{t("noun:error")}</div>
          )}

          {filteredPokemonList.length ? (
            filteredPokemonList.map((pokemon) => (
              <PokemonModal key={`pokemon-${pokemon.id}`} pokemon={pokemon}>
                <PokemonCard pokemon={pokemon} />
              </PokemonModal>
            ))
          ) : (
            <div className="pokemonList-message">{t("noun:no-matches")}</div>
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
