import useTranslations from "@/i18n/useTranslations"

import AppBar from "@/ui/components/app-bar/index"

export default function Home() {
  const { t } = useTranslations()

  return (
    <main>
      <AppBar />
    </main>
  )
}
