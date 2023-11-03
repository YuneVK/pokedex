import { useCallback } from "react"

import regionlessEnglish from "./messages/en.json"

const useTranslations = () => {
  const formatMessage = (id, values) => {
    let template = regionlessEnglish[id]

    if (!template) {
      console.warn(`⚠️ Translation for '${id}' not found.`)
      template = id
    }

    // Replace placeholders with values
    if (values) {
      Object.keys(values).forEach((key) => {
        const regex = new RegExp(`{${key}}`, "g")

        if (!regex.test(template)) {
          console.warn(`⚠️ Placeholder '{${key}}' not found for '${id}'.`) // Warn if placeholder missing.
        }

        template = template.replace(regex, values[key])
      })
    }

    return template
  }

  return { t: formatMessage }
}

export default useTranslations
