import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Produtos from './Components/Produtos'
import Header from './Components/Header'
import Contato from './Components/Contato'
import Footer from './Components/Footer'
import Produto from './Components/Produto'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Produtos} />
            <Route path="/produto/:id" exact component={Produto} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
