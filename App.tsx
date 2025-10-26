import "expo-router/entry"; // Tells Expo to use app/ routing.

import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return <SafeAreaProvider />; // Provides safe area context for all screens.
}
