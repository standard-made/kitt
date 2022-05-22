import "./App.css"
import Navbar from './components/navbar/Navbar'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Card1 from './components/cardMade/Card1'
import Mint from './components/mint/Mint'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useContext, useState } from "react"
import { themeContext } from "./Context"

function App() {
  const [accounts, setAccounts] = useState([])
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "var(--color-neon)" : "",
      }}
    > 
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Nav />
      <Header accounts={accounts} setAccounts={setAccounts}/>
      <Card1 />
      <Mint accounts={accounts} setAccounts={setAccounts} />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
