import Details from './Details'
import './App.css'
import ServiceDetails from './ServicesDetails'
import BoardingDetails from './BoardingDetails'
import Summary from "./Summary";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/"  element={<Details/>} />
          <Route path="/ServiceDetails" element={<ServiceDetails/>} />
          <Route path="/BoardingDetails" element={<BoardingDetails/>} />
          <Route path='/summary' element={<Summary/>}/>
          </Routes>
      </Router>
    </>
  );
};

export default App;


