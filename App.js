  import * as React from "react";
  import { View } from "react-native";

  // Import a local component here
  import Header from "./components/Header";
  import Footer from "./components/Footer"
import WelcomeScreen from "./Screens/WelcomeScreen";
import MenuItems from "./components/MenuItems";

  export default function App() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}
      >
        <Header />
        <MenuItems/>
        <WelcomeScreen/>
        <View style={{ backgroundColor: "#495E57" }}>
          <Footer />
        </View>
      </View>
    );
  }
