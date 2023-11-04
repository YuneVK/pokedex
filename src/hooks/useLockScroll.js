import { useEffect } from 'react'

const useLockScroll = (isLocked) => {
  useEffect(() => {
    document.documentElement.style.overflow = `hidden ${
      isLocked ? 'hidden' : 'auto'
    }`

    return () => {
      document.documentElement.style.overflow = 'hidden auto'
    }
  }, [isLocked])
}

export default useLockScroll
