import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from '../../src/context/AuthContext'; // Assurez-vous que vous avez créé ce contexte
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../src/screens/HomeScreen'; // Page d'accueil
import LoginScreen from '../../src/screens/LoginScreen'; // Page de login
import RegisterScreen from '../../src/screens/RegisterScreen'; // Page d'inscription

// Créer un StackNavigator
const Stack = createStackNavigator();

export default function App() {
  const { user, loading } = useContext(AuthContext);

  // Si le contexte est en train de charger l'utilisateur, afficher un écran de chargement.
  if (loading) return null; // Tu peux aussi afficher un écran de chargement ici

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            // Si l'utilisateur est connecté, afficher l'écran principal (HomeScreen)
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            // Si l'utilisateur n'est pas connecté, afficher les écrans de connexion et d'inscription
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
