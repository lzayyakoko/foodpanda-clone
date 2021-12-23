import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { globalstyles } from "./globalstyle";

const Searchbar=({navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("Sp")}>
            <View style={globalstyles.Searchbarcontainer}>
                <AntDesign name="search1" size={24} color="black" style={[globalstyles.forrightIcon, globalstyles.headerTextColor]}/>

                <Text style={globalstyles.searchText}>Search for shops & restaurants</Text>
            </View>
        </TouchableOpacity>
    );
}
export default Searchbar;