// Screen2.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tab1 from "./tab1";
import Tab2 from "./tab2";

const Tab = createBottomTabNavigator();

const Screen2 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
};

export default Screen2;
