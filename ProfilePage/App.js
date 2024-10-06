import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from "./src/pages/Profile";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Profile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}