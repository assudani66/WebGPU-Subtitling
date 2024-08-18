import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadFile from './components/UploadFile.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<UploadFile />} />
      </Routes>
    </Router>
  );
}

export default App;
