import './App.css';
import { FormPage } from './Pages/FormPage'
import { Report } from './Pages/Report'
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FormPage/>}/>
          <Route path="/:id" element={<Report/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
