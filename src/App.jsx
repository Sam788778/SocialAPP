import { Routes, Route } from 'react-router-dom';

import UsersPage from './pages/UsersPage/UsersPage';

import './App.css';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/users' element={<UsersPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
