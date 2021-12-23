import React from "react";
import { View, Text, Image} from "react-native";
import { globalstyles } from "./globalstyle";

const Third=({title, setTitle, btn, imageLink})=>{
    return(
        <View style={globalstyles.ThirdContainer}>
            <Image style={[globalstyles.ThirdImage, globalstyles.ThirdImagePosition]} source={imageLink}/>
            <View style={globalstyles.ThirdPosition}>
                <Text style={globalstyles.contentAlign}>{title}</Text>
                <Text style={globalstyles.contentAlign}>{setTitle}</Text>
                <View style={globalstyles.btnCenter}>
                    <Text style={globalstyles.btn}>{btn}</Text>
                </View>
            </View>
        </View>
    );
}
export default Third;
