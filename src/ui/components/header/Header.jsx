import useTranslations from "@/i18n/useTranslations"

import ButtonLink from "../button-link"

const Header = () => {
  const { t } = useTranslations()

  return (
    <header className="header">
      <h1 className="header-title">{t("title:site")}</h1>

      <ButtonLink href="#">{t("actions:login")}</ButtonLink>
    </header>
  )
}

export default Header
