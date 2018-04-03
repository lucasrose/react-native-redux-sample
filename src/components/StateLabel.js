import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class StateLabel extends React.Component {

  render() {
    return (
      <View>
      	<Text>State: {this.props.saved ? "SAVED": "NOT SAVED"}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
	saved: state.saved
});

export default connect(mapStateToProps, null)(StateLabel);
