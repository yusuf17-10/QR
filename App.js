import * as React from 'react';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}


var AppNavigator = createBottomTabNavigator({
  TransactionScreen:{screen:TransactionScreen},
  SearchScreen : {screen:SearchScreen}
})

const AppContainer = createAppContainer(AppNavigator)
