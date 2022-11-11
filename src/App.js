import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import MultistepForm from "./components/MultistepForm";
import theme from "./theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MultistepForm />
      </ThemeProvider>
    </>
  );
}

export default App;
