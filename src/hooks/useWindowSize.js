import { useState, useEffect } from "react"

export const BREAKPOINTS = {
  DESKTOP: 1280,
  TABLET: 768,
  MOBILE: 375,
}

const getBreakpoint = (width) => {
  if (width < BREAKPOINTS.TABLET) {
    return BREAKPOINTS.MOBILE
  } else if (width < BREAKPOINTS.DESKTOP) {
    return BREAKPOINTS.TABLET
  } else if (width >= BREAKPOINTS.DESKTOP) {
    return BREAKPOINTS.DESKTOP
  }

  return null
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const breakpoint = getBreakpoint(windowSize.width)

  return {
    isLoaded,
    windowSize,
    breakpoint,
    isMobile: breakpoint ? breakpoint === BREAKPOINTS.MOBILE : null,
    isTablet: breakpoint ? breakpoint === BREAKPOINTS.TABLET : null,
    isDesktop: breakpoint ? breakpoint === BREAKPOINTS.DESKTOP : null,
  }
}
