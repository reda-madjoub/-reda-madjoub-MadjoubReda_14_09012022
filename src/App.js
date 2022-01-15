import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import CurrentEmployee from './pages/CurrentEmployee/CurrentEmployee'
import Error from './pages/Error/Error'

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<CreateEmployee/>}/>
          <Route exact path="/employee-list" element={<CurrentEmployee/>}/>
          <Route  path="*" element={<Error/>}/>
        </Routes>
      </Router>
  )
}

export default App;
