import clsx from "clsx"

import useTranslations from "@/i18n/useTranslations"
import useLockScroll from "@/hooks/useLockScroll"

const Modal = ({
  children,
  onClose,
  className = "",
  isCloseButtonSecondary,
  isOpen,
}) => {
  const { t } = useTranslations()

  useLockScroll(isOpen)

  return (
    <div className={clsx("modal", className)}>
      <div className="modal-background" onClick={onClose} />
      <div className="modal-content">
        <button
          className={clsx("modal-close", {
            "is-secondary": isCloseButtonSecondary,
          })}
          aria-label="close"
          onClick={onClose}
        >
          {t("actions:close")}
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
