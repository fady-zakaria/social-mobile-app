import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

type props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

// queryClient.((error: {message: string | undefined}) => {
//   Alert.alert('Error', error.message);
// });

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

const ProvidersWrapper = ({children}: props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ProvidersWrapper;
