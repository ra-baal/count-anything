import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Counter } from "./types";

// Add Counter screen.
export default function AddScreen() {
  const router = useRouter();
  const [name, setName] = useState("");

  const addCounter = async () => {
    const stored = await AsyncStorage.getItem("counters");
    const counters: Counter[] = stored ? JSON.parse(stored) : [];
    const newCounter: Counter = {
      id: Date.now().toString(),
      name,
      count: 0,
    };
    await AsyncStorage.setItem(
      "counters",
      JSON.stringify([...counters, newCounter])
    );
    router.back(); // go back to main screen
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text variant="titleMedium">Add New Counter</Text>
      <TextInput
        placeholder="Counter Name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          width: "100%",
          marginVertical: 10,
          padding: 8,
        }}
      />
      <Button mode="contained" onPress={addCounter} disabled={!name}>
        Add
      </Button>
      <Button onPress={() => router.back()} style={{ marginTop: 10 }}>
        Cancel
      </Button>
    </View>
  );
}
