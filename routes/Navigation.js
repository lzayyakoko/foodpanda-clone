import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { globalstyles } from "../share/globalstyle";
import RightIcon from "../share/rightIcon";
import Title from "../share/Title";
import Sp from "../screens/Sp";
import SearchBox from "../share/SearchBox";
import DrawerContents from "../share/DrawerContents";

const StackContainer = createStackNavigator();
const DrawerContainer = createDrawerNavigator();

const Homescreen = ({navigation})=>{
    return(
        <StackContainer.Navigator>
                <StackContainer.Screen
                 name="Home"
                 component={Home}
                 options ={
                     { title:   <Title/>,
                     headerLeft:    ()=>{
                         return <Ionicons name="menu-outline" size={35} color="black" style={globalstyles.icon} onPress={()=>navigation.openDrawer()} />
                     },
                     headerRight:   ()=>{
                        return  <RightIcon/>
                     },
                     headerStyle:   {
                         backgroundColor:   "#fff",
                         borderRadius:  20,
                         shadowOffset:  {
                             width: 3,
                             height:    3,
                         },
                         shadowColor:   "#333",
                         shadowRadius:  20,
                         elevation: 5,
                     }
                    }
                 }
                 />
                 <StackContainer.Screen
                  name="Sp" 
                  component={Sp}
                  options={
                      {title:   <SearchBox/>}
                  }
                  />
        </StackContainer.Navigator>
    )
}

const Navigation=()=>{
    return(
        <NavigationContainer>
                <DrawerContainer.Navigator
                drawerStyle={{
                    width:  320
                }
                }
                drawerContent={(props)=><DrawerContents {...props}/>}>
                    <DrawerContainer.Screen name="Home" component={Homescreen}/>
                </DrawerContainer.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;