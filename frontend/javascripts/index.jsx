// import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { mainState } from './main/state'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import MainContainer from './main/main.jsx'

class MainRunner {

  constructor() {
    this.mainStore = createStore(
      mainState,
      compose(
        applyMiddleware(thunkMiddleware)
      )
    );
    this.container = document.querySelector("[data-container='home']")
  }

  run() {
    ReactDOM.render(
      <Provider store={this.mainStore}>
        <MainContainer />
      </Provider>,
    this.container
  );
  }
}

let mainRunner = new MainRunner()
mainRunner.run()
