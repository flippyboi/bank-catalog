import { Nav } from "./components/Nav";
import { Routes, Route} from 'react-router-dom'
import { Debet } from "./pages/Debet";
import { CreditCards } from "./pages/CreditCards";
import { Loans } from "./pages/Loans";
import { Credits } from "./pages/Credits";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/debet-cards' element={<Debet />} />
        <Route path='/credit-cards' element={<CreditCards />} />
        <Route path='/mkr' element={<Loans />} />
        <Route path='/credits' element={ <Credits />} />
      </Routes>
    </div>
  );
}

export default App;
