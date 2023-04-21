import { ThemeProvider, createTheme } from "@mui/material/styles"
import {useMemo} from "react"
import { themeSettings } from "./theme"
import { CssBaseline, Box } from "@mui/material"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "@/scenes/navbar"
import Dashboard from "./scenes/dashboard"

function App() {
  const theme = useMemo(() => createTheme(themeSettings),[])
  return (
    <div className="app"> 
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="100%" height="100%" padding="0rem 2rem 6rem 2rem">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/predictions" element={<div>predictions</div>}/>
      </Routes>
      </Box>
      
      </ThemeProvider>
      </BrowserRouter>     
    </div>
  )
}

export default App
