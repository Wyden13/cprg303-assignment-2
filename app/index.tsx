import React from "react";
import { View } from "react-native";
import ToDoForm from "@/components/ToDoForm";
import ToDoList from "@/components/ToDoList";
export default function Index() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <ToDoList />
      <ToDoForm />
    </View>
  );
}
