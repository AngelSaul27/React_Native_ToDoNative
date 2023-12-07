import { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./src/components/Navigation";
import CustomDrawer from "./src/components/CustomDrawer";

export default function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => { setDrawerOpen(true); };
  const closeDrawer = () => { setDrawerOpen(false); };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
    
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTabNavigation openDrawer={openDrawer} />
          <CustomDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}
