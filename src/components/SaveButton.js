import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { savePage } from '../actions/SaveAction.js'

class SaveButton extends React.Component {
  handleClick(){
  	this.props.savePage()
  }

  render() {
    return (
      <Button
      	onPress={() => this.handleClick()}
      	title="SAVE"
      	color='green'
      />

    );
  }
}

const mapDispatchToProps = {
	savePage
}

export default connect(null, mapDispatchToProps)(SaveButton);