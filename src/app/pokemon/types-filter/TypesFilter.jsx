import { useState, useEffect } from "react"
import Select from "react-select"

import useTranslations from "@/i18n/useTranslations"
import TYPE_COLORS from "../../types/type-chip/colors"

import { fetchTypes } from "../api"

const TypesFilter = ({ onChange }) => {
  const { t } = useTranslations()
  const [typeOptions, setTypeOptions] = useState([])

  useEffect(() => {
    const fetchTypesOptions = async () => {
      const types = await fetchTypes()

      const typeOptions = types.sort().map((type) => ({
        label: type,
        value: type,
        color: TYPE_COLORS[type],
      }))

      setTypeOptions(typeOptions)
    }
    fetchTypesOptions()
  }, [])

  return (
    <div className="typesFilter">
      <Select
        isMulti
        placeholder={t("filters:type:placeholder")}
        options={typeOptions}
        onChange={onChange}
        styles={{
          option: (styles, { data }) => {
            return {
              ...styles,
              textTransform: "capitalize",
            }
          },
          multiValueLabel: (styles, { data }) => ({
            ...styles,
            backgroundColor: data.color,
            color: "var(--neutral-white)",
            textTransform: "capitalize",
          }),
        }}
      />
    </div>
  )
}

export default TypesFilter
