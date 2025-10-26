import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text, Button, Card, FAB } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Counter } from "./types";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Main screen (list of counters).
export default function HomeScreen() {
  const router = useRouter();
  const [counters, setCounters] = useState<Counter[]>([]);

  const insets = useSafeAreaInsets();

  // Load counters from storage
  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem("counters");
      if (stored) setCounters(JSON.parse(stored));
    })();
  }, []);

  // Save counters to storage
  const saveCounters = async (newCounters: Counter[]) => {
    setCounters(newCounters);
    await AsyncStorage.setItem("counters", JSON.stringify(newCounters));
  };

  const increment = (id: string) =>
    saveCounters(
      counters.map((c) => (c.id === id ? { ...c, count: c.count + 1 } : c))
    );

  const decrement = (id: string) =>
    saveCounters(
      counters.map((c) => (c.id === id ? { ...c, count: c.count - 1 } : c))
    );

  const reset = (id: string) =>
    saveCounters(counters.map((c) => (c.id === id ? { ...c, count: 0 } : c)));

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={counters}
        keyExtractor={(c) => c.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10, padding: 10 }}>
            <Text variant="titleMedium">{item.name}</Text>
            <Text>Count: {item.count}</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <Button onPress={() => increment(item.id)}>+1</Button>
              <Button onPress={() => decrement(item.id)}>-1</Button>
              <Button onPress={() => reset(item.id)}>Reset</Button>
            </View>
          </Card>
        )}
      />
      <FAB
        icon="plus"
        style={{
          position: "absolute",
          right: 16,
          bottom: insets.bottom + 16, // pushes above navigation bar
        }}
        onPress={() => router.push("/add")}
      />
    </SafeAreaView>
  );
}
