import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { AuthContext } from '@/context/AuthContext'; // Utiliser le contexte d'authentification

const RegisterScreen = ({ navigation }) => {
  const { register } = useContext(AuthContext); // Utilisation de la fonction d'inscription depuis AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  // Gérer l'inscription
  const handleRegister = async () => {
    try {
      await register(name, email, password); // Appel à la méthode d'inscription dans AuthContext
      navigation.navigate('Login'); // Rediriger vers l'écran de connexion après inscription
    } catch (e) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="S'inscrire" onPress={handleRegister} />
      <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
        Déjà un compte ? Se connecter
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { textAlign: 'center', color: 'blue', marginTop: 10 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
});

export default RegisterScreen;
