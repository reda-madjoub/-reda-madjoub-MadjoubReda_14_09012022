import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateEmployee from './components/CreateEmployee/CreateEmployee'
import CurrentEmployee from './components/CurrentEmployee/CurrentEmployee'
import Error from './components/Error/Error'

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
