import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../stylesheets/buttons.sass'
import className from 'classnames'
import { toggleButton } from './actions'

class MainContainer extends Component {
  static contextTypes: {
    store: React.PropTypes.object
  };

  handleClick = (e) => {
    e.preventDefault()
    this.props.dispatch(toggleButton())
  }

  render() {
    return (
      <div>
        <h1>Hello in main world!</h1>
        <div className={className("button-on", {"button-off" : this.props.buttonState })} onClick={this.handleClick}> button </div>
      </div>
    )
  }
}

function hookUpState(state) {
  return state
}

export default connect(hookUpState)(MainContainer)
