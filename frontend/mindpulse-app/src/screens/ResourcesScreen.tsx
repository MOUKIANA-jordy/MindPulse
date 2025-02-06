import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ressources</Text>
      <Text>Voici des ressources pour ta santé mentale...</Text>
      <Button title="Retour au Dashboard" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default ResourcesScreen;
