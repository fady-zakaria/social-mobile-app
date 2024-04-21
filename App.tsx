import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Navigation from './src/navigations/Navigation';
import ProvidersWrapper from './src/Providers/ProvidersWrapper';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ProvidersWrapper>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <Navigation />
      </SafeAreaView>
    </ProvidersWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
