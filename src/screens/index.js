import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home';

const AppNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
