import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
      </Routes>
    </>
  );
}

export default App;
