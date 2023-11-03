import Button from "@mui/material/Button"

import useTranslations from "@/i18n/useTranslations"

export default function Home() {
  const { t } = useTranslations()

  return (
    <main>
      <Button variant="contained">{t("title:site")}</Button>
    </main>
  )
}
