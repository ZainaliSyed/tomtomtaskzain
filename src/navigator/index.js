import React, {forwardRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './Stacks';
import {LoginContext} from '../';

const rootNavigator = forwardRef((props, ref) => (
  <LoginContext.Consumer>
    {({isLogin}) => (
      <NavigationContainer ref={ref}>
        {isLogin ? null : <AuthStack />}
      </NavigationContainer>
    )}
  </LoginContext.Consumer>
));

export default rootNavigator;
