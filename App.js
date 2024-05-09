import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator, AppNavigation } from './src/navigation/AppNavigation';
import { LogInScreen } from './src/screens';
import { firebaseAuthStatePersistance } from './src/utilities/config/firebase'; // Asegúrate de que la ruta sea correcta

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Escucha los cambios en el estado de autenticación
    const unsubscribe = firebaseAuthStatePersistance.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });

    // Limpia el listener al desmontar
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <MainStackNavigator />}
    </NavigationContainer>
  );
}
