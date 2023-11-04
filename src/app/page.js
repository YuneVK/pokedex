import useTranslations from "@/i18n/useTranslations"
import { getJson } from "@/enhancedFetch"

import Header from "@/ui/components/header"
import Footer from "../ui/components/footer"

import { fetchPokemonList } from "./pokemon/api"
import PokemonList from "./pokemon/pokemon-list"

export default async function Home() {
  const { t } = useTranslations()
  const pokemons = await fetchPokemonList(1)

  return (
    <main>
      <Header />
      <PokemonList initialData={pokemons} />
      <Footer />
    </main>
  )
}
