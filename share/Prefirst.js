import React from "react";
import { View, Text, Image} from "react-native";
import { globalstyles } from "../share/globalstyle";

const Prefirst=()=>{
    return(
        <View style={globalstyles.container}>
                <View>
                    <Text style={globalstyles.headerTitle}>
                        ကောင်းသောနေ့လယ်ခင်းပါ
                    </Text>

                    <Text style={globalstyles.headerText}>
                        နေ့လယ်စာ စားတော့မှာလား?
                        စားသောက်ဆိုင် ၁၁၁ခု သင့်အနီးအနားမှာ ရှိနေပြီနော်။
                    </Text>

                    <Image style={globalstyles.preImage} source={require("../assets/food/seafood.png")}/>
                </View>
            </View>
    )
}
export default Prefirst;