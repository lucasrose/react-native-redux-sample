import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { saveReducer } from '../reducers/SaveReducer.js';
import SaveButton from './SaveButton.js'
import ResetButton from './ResetButton.js'
import StateLabel from './StateLabel.js'

const store = createStore(saveReducer, applyMiddleware(thunk));

class MainPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
      	<View>
        	<SaveButton/>
        	<ResetButton/>
        	<StateLabel/>
        </View>
      </Provider>
    );
  }
}

export default MainPage;
