import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import UsersPage from './pages/UsersPage/UsersPage';

import UserProfile from './pages/UserProfile/UserProfile';

import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/users' element={<UsersPage />} />
          <Route index element={<Home />} />
          <Route path='/userprofile/:id' element={<UserProfile />} />
          <Route path='/login' element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
