import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home';
import CalcForm from './components/CalcForm/CalcForm.js';
import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <>
      <CalcForm />
      <Switch>
        <ProtectedComponent active={false} path="/login" component={Login} />
        <ProtectedComponent active={false} exact path="/" component={Home} />
        <ProtectedComponent active={true} exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>

  );
}

export default App;
