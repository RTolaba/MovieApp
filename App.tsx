import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { style } from './src/themes/MovieCardTheme';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

//import { LogBox } from 'react-native'
//import ignoreWarnings from 'ignore-warnings';

const AppState = ({ children }: any ) => {

  return(
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}


export const App = () => {

  /*ignoreWarnings('warn',['ViewPropTypes','[react-native-gesture-handler]'])

  LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ])*/

  return (
    <NavigationContainer >
      <AppState>
        <StackNavigator />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};
