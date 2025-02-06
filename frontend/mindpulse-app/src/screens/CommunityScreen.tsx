import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communauté</Text>
      <Text>Rejoins une communauté pour discuter et partager tes expériences.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default CommunityScreen;
