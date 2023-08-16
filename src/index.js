import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import store from './redux/store';
import Login from './Login';
import Home from './Home';
import Account from './Account';
import Unauthorized from './Unauthorized';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        {/* Always show the login page */}
        <Route path="/" element={<Login />} />
        {/* Show Home only if authenticated */}
        <Route path="/home" element={<Home />} />
        {/* Show Account only if authenticated */}
        <Route path="/account" element={<Account />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/unauthorized" />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

