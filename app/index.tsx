import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text, Button, Card, FAB } from "react-native-paper";
import { useRouter } from "expo-router";
import { Counter } from "../common/types";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import storage from "../common/storage";
import Path from "../common/path";

export default function HomeScreen() {
  const router = useRouter();
  const [counters, setCounters] = useState<Counter[]>([]);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    (async () => {
      const counters = await storage.getCounters();
      setCounters(counters);
    })();
  }, []);

  const saveCounters = async (newCounters: Counter[]) => {
    setCounters(newCounters);
    storage.setCounters(newCounters);
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

  const remove = (id: string) =>
    saveCounters(counters.filter((c) => c.id !== id));

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
              <Button onPress={() => remove(item.id)}>Remove</Button>
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
        onPress={() => router.push(Path.Add)}
      />
    </SafeAreaView>
  );
}
