import "./App.css"
import Download from "./components/download/Download"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Order from "./components/order/Order"
import Services from "./components/services/Services"

function App() {
  return (
    <div className="overflow-x-hidden bg-slate-100">
      <Hero />
      <Services />
      <Order />
      <Download />
      <Footer />
    </div>
  )
}

export default App
