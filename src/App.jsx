import './App.css'
import Cardapio from './componentes/cardapio'
import Footer from './componentes/footer'
import Hero from './componentes/hero'
import Navbar from './componentes/navbar'
import Sobre from './componentes/sobre'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre/>
      <Cardapio/>
      <Footer/>
    </>
  )
}

export default App
