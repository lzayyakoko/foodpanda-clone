import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { globalstyles } from "./globalstyle";
import { Ionicons } from '@expo/vector-icons';

const DrawerItems=({label, iconName})=>{
    return(
        <DrawerItem
        
            label={label}
            icon={()=><Ionicons name={iconName} size={24} color="black" />}
            />
    );
}
export default DrawerItems;