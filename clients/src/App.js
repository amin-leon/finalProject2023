import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NewUserRegistration from './components/home_user_page/NewUserRegistration'
import Home from './pages/Home';
import CreateNewIssue from './components/home_user_page/new_Issue';
import Progress from './components/home_user_page/Progress';
import Solved from './components/home_user_page/Solved';
import Rejected from './components/home_user_page/Rejected';
import UserAcountSettings from './components/home_user_page/settings/UserAcountSettings';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Login />} />
         <Route path='/user-homepage' element={<Home />}>
             <Route path='new-issue' element={<CreateNewIssue />} />
             <Route path='progress-issues' element={<Progress />} />
             <Route path='solved-issues' element={<Solved />} />
             <Route path='rejected-issues' element={<Rejected />} />
             <Route path='settings' element={<UserAcountSettings />} />
         </Route>
         <Route path='/register' element={<NewUserRegistration />} />
      </Routes>
    </Router>
  );
};

export default App;

