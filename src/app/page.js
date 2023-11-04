import useTranslations from "@/i18n/useTranslations"
import { getJson } from "@/enhancedFetch"

import AppBar from "@/ui/components/app-bar/index"

import { fetchPokemonList } from "./pokemon/api"
import PokemonList from "./pokemon/pokemon-list"

import PageLayout from "../ui/components/page-layout"

export default async function Home() {
  const { t } = useTranslations()
  const pokemons = await fetchPokemonList(1)

  return (
    <main>
      <AppBar />

      <PokemonList initialData={pokemons} />
    </main>
  )
}
