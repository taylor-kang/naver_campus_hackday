import React from 'react';
import './App.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import OrderList from "./module/order-list/page/order-list";
import OrderDetail from "./module/order-detail/page/order-detail";
import Header from './component/header/header';
import Footer from './component/footer/footer';
import "./App.scss"
import LeftSection from './component/left-sc/left-sc';

class App extends React.Component {
  public render() {
    return (
        <div className="App">
          <Header/>
          <div className="container">
            <div className='left-section'>
              <LeftSection/>
            </div>
            <div className="right-section">
              <Switch>
                <Route exact path="/" render={() => (
                  <Redirect to="/order"/>
                )}/>
                <Route exact path="/order" component={OrderList}/>
                <Route exact path="/order/:id" component={OrderDetail}/>
              </Switch>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App;
