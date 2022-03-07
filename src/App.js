import { ThemeProvider } from "styled-components"
import { darkTheme } from "./components/Themes"
import GlobalStyle from "./globalStyle"
function App() {
  return <>



    <GlobalStyle/>
    <ThemeProvider theme={darkTheme}>
      App File
    </ThemeProvider>
    
    
    </>
    
}

export default App

