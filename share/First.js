import React from "react";
import { View, Text, Image} from "react-native";
import { globalstyles } from "./globalstyle";

const First=()=>{
    return(
        <View style={globalstyles.firstContainer}>
            <Image style={globalstyles.FirstImage} source={require("../assets/food/noddle.png")}/>
            <View style={globalstyles.position}>
                <Text style={[globalstyles.whiteContent, globalstyles.fontSize]}>
                    အစားအသောက်ပို့ဆောင်မှု
                </Text>

                <Text style={globalstyles.whiteContent}>
                    စားချင်တာ မှာစားလိုက်ပါ။
                </Text>

            </View>
        </View>
    );
}
export default First;