import React from "react";;
import { View, Text, Image} from "react-native";
import { globalstyles } from "./globalstyle";

const Second=({title, setTitle, imageLink})=>{
    return(
        <View style={globalstyles.secondContainer}>
            <Image style={globalstyles.secondImage} source={imageLink}/>
            <View style={globalstyles.secondPosition}>
                <Text style={[globalstyles.fontSize, globalstyles.whiteContent]}>
                    {title}
                </Text>
                    
                <Text style={[globalstyles.setTitleWidth, globalstyles.whiteContent]}>
                    {setTitle}
                </Text>
            </View>
        </View>
    );
}
export default Second;