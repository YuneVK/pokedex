import { useState, useEffect, useRef } from "react"
import useSWRInfinite from "swr/infinite"

import { fetchPokemonList } from "./api"

const usePokemonInfiniteScroll = (initialData, selectedTypes) => {
  const [isVisible, setIsVisible] = useState(false)
  const sentinelRef = useRef(null)

  const fetcher = async ([page]) => {
    return await fetchPokemonList(page)
  }

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null

    const page = pageIndex + 1
    return [page]
  }

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    {
      initialData: [initialData],
    }
  )

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

    const observerOptions = { threshold: 0.8 }
    const observer = new IntersectionObserver(observerCallback, observerOptions)

    observer.observe(sentinel)

    return () => {
      if (!sentinel) return

      observer.unobserve(sentinel)
    }
  }, [])

  return {
    data,
    error,
    isValidating,
    sentinelRef,
  }
}

export default usePokemonInfiniteScroll
