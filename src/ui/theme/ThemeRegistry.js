"use client"
import * as React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import NextAppDirEmotionCacheProvider from "./EmotionCache"
import theme from "./theme"

// Souorce: https://github.com/mui/material-ui/blob/a459e2fa227bf4291376cee238cb1b48e21a958c/examples/material-ui-nextjs/src/components/ThemeRegistry/ThemeRegistry.js
export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
