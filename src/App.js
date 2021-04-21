import './App.css';
import React,{ Component } from 'react';
import Header from  './components/Header';
import TopContent from './components/TopContent';
import SearchContent from './components/SearchContent';
import { Container } from "reactstrap";
import DetailsContent from './components/DetailsContent';
import store from './store';
import { Provider } from "react-redux";
class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <TopContent />
          <SearchContent />
          <DetailsContent />
        </div>
      </Provider>
    );
  }
  
}

export default App;
