import Header from "../Header/Header"
import Main from "../Main/Main"
import Portfolio from "../Portfolio/Portfolio"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import { HashRouter, Route } from "react-router-dom"


function App() {
  return (

    <div>
    <Header />

    <HashRouter>
      <Route path="/" exact component={Main} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/contact" exact component={Contact} />
    </HashRouter>

    <Footer />
    </div>
  );
}

export default App;
