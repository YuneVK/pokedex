import clsx from "clsx"
import { useLockBodyScroll } from "@uidotdev/usehooks"

import useTranslations from "@/i18n/useTranslations"

const Modal = ({
  children,
  onClose,
  className = "",
  isCloseButtonSecondary,
}) => {
  const { t } = useTranslations()

  useLockBodyScroll()

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
