import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { resetPage } from '../actions/SaveAction.js'

class ResetButton extends React.Component {
  handleClick(){
  	this.props.resetPage()
  }

  render() {
    return (
      <Button
      	onPress={() => this.handleClick()}
      	title="RESET"
      	color='red'
      />
    );
  }
}

const mapDispatchToProps = {
	resetPage
}

export default connect(null, mapDispatchToProps)(ResetButton);