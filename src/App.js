import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Router from './component/route';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Router />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
