import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

export const AppWrapper = ({children}: React.PropsWithChildren) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};
