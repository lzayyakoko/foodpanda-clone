import React from "react";
import { View, Text, TextInput} from "react-native";
import { globalstyles } from "./globalstyle";

const SearchBox=()=>{
    return(
        <View>
            <TextInput style={globalstyles.SearchBox} placeholder="Search for shops & restaurants"/>
        </View>
    );
}
export default SearchBox;