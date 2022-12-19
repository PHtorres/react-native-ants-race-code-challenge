import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';

export const AppWrapper = ({children}: React.PropsWithChildren) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};
