import React, { Component } from 'react';
import Main from "./components/MainComponent";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { baseUrl } from "./baseUrl";
import { Provider } from 'react-redux';
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <BrowserRouter basename={baseUrl}>
            <div>
              <Main/>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
