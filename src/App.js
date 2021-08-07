import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produtos from './Components/Produtos'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Produtos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
