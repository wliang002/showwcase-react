import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header'
import Main from './pages/Main'

const App: FunctionComponent = props => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact key="Home" component={Home} />
          <Route path="/education" exact key="Home" component={Main} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
