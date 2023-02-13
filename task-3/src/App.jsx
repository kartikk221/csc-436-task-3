import './App.css'

// Import the components
import TotalCost from './components/TotalCost'
import AllProducts from './components/AllProducts'
import AscendingProducts from './components/AscendingProducts'
import SaleProducts from './components/SaleProducts'

export default function App() {
  return (
    <div className="App">
      <TotalCost/>
      <AllProducts/>
      <AscendingProducts/>
      <SaleProducts/>
    </div>
  )
}