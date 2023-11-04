import { useState } from "react"
import clsx from "clsx"

import useTranslations from "@/i18n/useTranslations"
import useWindowSize from "@/hooks/useWindowSize"

import Modal from "@/ui/components/modal"

import SettingsIcon from "@/ui/icons/settings"

const DesktopContainer = ({ children }) => <>{children}</>

const Filters = ({ children }) => {
  const { t } = useTranslations()
  const [isContentOpen, setIsContentOpen] = useState(false)
  const { isMobile } = useWindowSize()

  const Container = isMobile ? Modal : DesktopContainer

  const openFilters = () => setIsContentOpen(true)
  const closeFilters = () => setIsContentOpen(false)

  return (
    <div className="filters">
      {isMobile ? (
        <button className="filters-toggle" onClick={openFilters}>
          <SettingsIcon className="filters-icon" /> {t("noun:filter")}
        </button>
      ) : null}

      <Container
        className={clsx("filters-container", {
          "is-visible": isMobile === false || isContentOpen,
        })}
        onClose={closeFilters}
        isOpen={isMobile === false || isContentOpen}
      >
        <div className="filters-content">
          <div className="filters-header">
            <h2 className="filters-title">{t("noun:filter-by")}</h2>
          </div>
          {children}
        </div>
      </Container>
    </div>
  )
}

export default Filters
