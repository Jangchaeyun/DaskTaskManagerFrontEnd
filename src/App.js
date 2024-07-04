import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/darktheme";

function App() {
  return <ThemeProvider theme={darkTheme}>DayTaskManage</ThemeProvider>;
}

export default App;
