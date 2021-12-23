import React from "react";
import { View, Text} from "react-native";
import { globalstyles } from "./globalstyle";

const title=()=>{
    return(
        <View>
            <Text style={[globalstyles.headerTextColor, globalstyles.fontSize]}>ရွေးချယ်ထားသောတည်နေရာ</Text>
            <Text style={globalstyles.headerTextColor}>Mandalay</Text>
        </View>
    )
}
export default title;