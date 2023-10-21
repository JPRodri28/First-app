import Footer from "./components/Footer";
import Header from "./components/Header"
import TitleWithText from "./components/TitleWithText";
function App() {
  return(
    <>
    <Header/>
    <TitleWithText title= "Titulo 1" content="outra coisa 1"/>
    <TitleWithText title= "Outro Titulo 2" content="outra coisa 2"/>
    <TitleWithText title= "Outro Titulo 3" content="outra coisa 3"/>
    <TitleWithText title= "Outro Titulo 4" content="outra coisa 4"/>
    <Footer id="rodape" autor="João Pedro Rodrigues"/>
    </>
  );
}

export default App;