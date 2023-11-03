"use client"

import { useEffect, useRef, useState } from "react"
import useSWRInfinite from "swr/infinite"

import useTranslations from "@/i18n/useTranslations"

import PokemonCard from "../pokemon-card"
import PokemonModal from "../pokemon-modal"

import { fetchPokemonList } from "../api"

const fetcher = async (page) => await fetchPokemonList(page)

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null
  const page = pageIndex + 1
  return page
}

const PokemonList = ({ initialData }) => {
  const { t } = useTranslations()
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    {
      initialData: [initialData],
    }
  )

  const [isVisible, setIsVisible] = useState(false)

  const flatList = Array.isArray(data) ? data.flat() : initialData

  const sentinelRef = useRef(null)

  useEffect(() => {
    if (!isVisible) return

    if (isValidating) {
      setIsVisible(false)
      return
    }

    setSize(size + 1)
  }, [isValidating, isVisible, setSize, size])

  const observerCallback = (entries) => {
    const firstEntry = entries[0]
    if (firstEntry.isIntersecting) {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    const sentinel = sentinelRef.current

    if (!sentinel) return

    const observerOptions = {
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    observer.observe(sentinel)

    return () => {
      if (!sentinel) return

      observer.unobserve(sentinel)
    }
  }, [])

  return (
    <div className="pokemonList">
      <div className="pokemonList-list">
        {flatList.map((pokemon) => (
          <PokemonModal key={`pokemon-${pokemon.id}`} pokemon={pokemon}>
            <PokemonCard pokemon={pokemon} />
          </PokemonModal>
        ))}
      </div>
      {isValidating && (
        <p className="pokemonList-loading">{t("noun:loading")}</p>
      )}
      <div ref={sentinelRef}></div>
    </div>
  )
}

export default PokemonList
