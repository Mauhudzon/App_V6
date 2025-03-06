import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSession } from "../../ctx";

export default function Main() {
  const { signOut } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Auth App</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#E0E0E0", 
  },
  logoutButton: {
    backgroundColor: "#4A4A4A", 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 6, 
  },
  logoutText: {
    color: "#FFFFFF", 
    fontSize: 16,
    fontWeight: "bold",
  },
});
