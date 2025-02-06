import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JournalingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écrire dans ton Journal</Text>
      <TextInput style={styles.input} placeholder="Écris tes pensées..." />
      <Button title="Sauvegarder" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 },
});

export default JournalingScreen;
