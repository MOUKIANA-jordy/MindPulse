import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext'; // Importer le contexte d'authentification
import HomeScreen from '../screens/HomeScreen'; // Écran d'accueil
import LoginScreen from '../screens/LoginScreen'; // Écran de connexion
import RegisterScreen from '../screens/RegisterScreen'; // Écran d'inscription
import DashboardScreen from '../screens/DashboardScreen';
import JournalingScreen from '../screens/JournalingScreen'; // Ecran du journal
import ResourcesScreen from '../screens/ResourcesScreen'; // Ecran des ressources
import ProfileScreen from '../screens/ProfileScreen'; // Ecran de profil
import CommunityScreen from '../screens/CommunityScreen'; // Ecran communautaire

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext); // Accéder à l'état d'authentification depuis le contexte

  if (loading) {
    // Si l'état de l'utilisateur est encore en train de charger, afficher un écran de chargement
    return null; // Tu peux ajouter un écran de chargement ici
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Si l'utilisateur est connecté, afficher l'écran principal
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
  );
}

