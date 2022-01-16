import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import CurrentEmployee from './pages/CurrentEmployee/CurrentEmployee'
import Error from './pages/Error/Error'
import ContextProvider from './utils/context/index'
import './App.css'

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
            <Route exact path="/" element={<CreateEmployee/>}/>
            <Route exact path="/employee-list" element={<CurrentEmployee/>}/>
            <Route  path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App;
