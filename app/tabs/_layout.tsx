import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { TextInput } from "react-native";

export default function TabsLayout() {
  const router = useRouter();
  return (
    <Tabs
    
    screenOptions={{
        tabBarActiveTintColor: "blue",
        headerRight: () => (
          <Ionicons
            name="log-out"
            size={22}
            color="black"
            style={{ marginRight: 15 }}
            onPress={()=>router.push("/../")}
          />
        ),
      }}
      
    >
     
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="note" options={{ title: "Note" }} />
    </Tabs>
  );
}
