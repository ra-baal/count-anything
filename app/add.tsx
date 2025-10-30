import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import storage from "../common/storage";
import Path from "../common/path";

export default function AddScreen() {
  const router = useRouter();
  const [name, setName] = useState("");

  const addCounter = async () => {
    await storage.addCounter(name);
    router.replace(Path.Home);
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
      <Button
        onPress={() => router.replace(Path.Home)}
        style={{ marginTop: 10 }}
      >
        Cancel
      </Button>
    </View>
  );
}
