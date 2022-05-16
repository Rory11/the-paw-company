import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/contact' element={<ContactPage />} />
        </Routes>
       </BrowserRouter>
     </div>
  );
} 
 

export default App;
