"use client"

import { useState, cloneElement } from "react"
import Image from "next/image"

import useTranslations from "@/i18n/useTranslations"

import TypeChip from "@/app/types/type-chip"
import TYPE_COLORS from "@/app/types/type-chip/colors"

import Modal from "@/ui/components/modal"

import { formatId } from "../business"

const PokemonModal = ({ pokemon, children }) => {
  const { t } = useTranslations()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const color = TYPE_COLORS[pokemon.types[0]]

  const formattedId = formatId(pokemon.id)

  const handleOpenModal = (pokemon) => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {cloneElement(children, { onClick: handleOpenModal })}

      {isModalOpen && (
        <Modal
          className="pokemonModal"
          onClose={handleCloseModal}
          isCloseButtonSecondary
        >
          <div className="pokemonModal-header" style={{ "--color": color }}>
            <p className="pokemonModal-id">{formattedId}</p>

            <Image
              className="pokemonModal-image"
              src={pokemon.image}
              alt="Pokemon name"
              width="300"
              height="300"
              unoptimized
              priority={false}
            />
          </div>

          <div className="pokemonModal-body">
            <ul className="pokemonModal-types">
              {pokemon.types.map((type) => (
                <li key={`pokemon-modal-${pokemon.id}-type-${type}`}>
                  <TypeChip type={type} />
                </li>
              ))}
            </ul>

            <h2 className="pokemonModal-name">{pokemon.name}</h2>

            <div className="pokemonModal-games">
              <h3 className="pokemonModal-sectionTitle">{t("noun:games")}</h3>
              <ul className="pokemonModal-gamesList">
                {pokemon.games.map((game) => (
                  <li
                    key={`pokemon-modal-${pokemon.id}-game-${game}`}
                    className="pokemonModal-game"
                  >
                    {game.replace("-", " ")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default PokemonModal
