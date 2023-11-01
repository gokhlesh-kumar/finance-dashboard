import { useMemo, useState } from 'react'
import { themeSettings } from './theme'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

function App() {

  const theme = useMemo(()=>createTheme(themeSettings),[])

  return (
    <>
      <div className='app'>
        <ThemeProvider theme={theme} >
          <CssBaseline />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
