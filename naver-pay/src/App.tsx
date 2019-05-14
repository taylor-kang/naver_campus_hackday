import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import OrderList from "./module/order-list/page/order-list";
import OrderDetail from "./module/order-detail/page/order-detail";

class App extends React.Component {
  public render() {
    return (
        <div>
          <header>
            APP
          </header>

          <Switch>
            <Route exact path="/order" component={OrderList}/>
            <Route exact path="/order/:id" component={OrderDetail}/>
          </Switch>
        </div>
    );
  }
}

export default App;
