import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator, AppNavigation } from './src/navigation/AppNavigation';
import { firebaseAuthStatePersistance } from './src/utilities/config/firebase';

import { ContextProvider } from './src/providers';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = firebaseAuthStatePersistance.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <ContextProvider>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigation /> : <MainStackNavigator />}
      </NavigationContainer>
    </ContextProvider>
  );
}
