import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NewUserRegistration from './components/home_user_page/NewUserRegistration'
import Home from './pages/Home';
import CreateNewIssue from './components/home_user_page/new_Issue';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/user-homepage' element={<Home />}>
             <Route path='new-issue' element={<CreateNewIssue />} />
         </Route>
         <Route path='/register' element={<NewUserRegistration />} />
      </Routes>
    </Router>
  );
};

export default App;

