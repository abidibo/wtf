import React from "react"
import AppRouter from "./Router"

/**
 * Everything under router to assure freedom about pages layout.
 * Inject router in BaseLayout if you don't need freedom and you
 * have a fixed template
 */
export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  )
}
