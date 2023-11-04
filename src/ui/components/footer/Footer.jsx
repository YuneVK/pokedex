import useTranslations from "@/i18n/useTranslations"

import ButtonLink from "../button-link"

const Footer = () => {
  const { t } = useTranslations()

  return (
    <footer className="footer">
      <h1 className="footer-title">{t("title:footer")}</h1>

      <ButtonLink href="#">{t("actions:legal")}</ButtonLink>
    </footer>
  )
}

export default Footer
