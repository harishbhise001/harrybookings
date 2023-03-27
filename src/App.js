import react from 'react';
import
{
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import List from './pages/list/List.jsx';
import Hotel from './pages/hotel/Hotel.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hotels' element={<List/>} />
          <Route path='/hotels/:id' element={<Hotel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
