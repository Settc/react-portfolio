import Header from "../Header/Header"
import Main from "../Main/Main"
import Portfolio from "../Portfolio/Portfolio"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import { Route, HashRouter } from "react-router-dom"


function App() {
  return (

    <div>
    <Header />

    <HashRouter>
      <Route path="/react-portfolio/#/" exact component={Main} />
      <Route path="/react-portfolio/#/portfolio" exact component={Portfolio} />
      <Route path="/react-portfolio/#/contact" exact component={Contact} />
    </HashRouter>    
    

    <Footer />
    </div>
  );
}

export default App;
