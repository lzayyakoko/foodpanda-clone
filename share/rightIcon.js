import React from "react";
import { View, Text} from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalstyles } from "./globalstyle";

const rightIcon=()=>{
    return(
        <View style={globalstyles.rightContainer}>
            <View style={globalstyles.forrightIcon}>
                <Feather name="heart" size={25} color="black"  style={globalstyles.headerTextColor} />
            </View>
            
            <View style={globalstyles.forrightIcon}>
                <MaterialCommunityIcons name="package-variant-closed" size={28} color="black"  style={globalstyles.headerTextColor}/>
            </View>
        </View>
    )
}
export default rightIcon;