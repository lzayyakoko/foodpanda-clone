import React from "react";
import { View, Text, ScrollView, Button} from "react-native";
import First from "../share/First";
import { globalstyles } from "../share/globalstyle";
import Prefirst from "../share/Prefirst";
import Searchbar from "../share/Searchbar";
import Second from "../share/Second";
import Third from "../share/Third";
import Sp from "./Sp";

const Home=({navigation})=>{
    return(
        <ScrollView style={globalstyles.all}>
            <Prefirst/>
            <Searchbar navigation={navigation}/>
            <First/>

            <View style={globalstyles.secondRow}>
                <Second title="ဆိုင်များ" imageLink={require("../assets/food/potato.png")} setTitle="စားသောက်ကုန်များနှင့်အခြား"/>
                <Second title="ကိုယ်တိုင်သွားယူရန်" imageLink={require("../assets/food/hamburger.png")} setTitle="၁၅% အပိုဆောင်းလျှော့ဈေးရယူပါ"/>
            </View>

            <View>
                <Text style={globalstyles.onlyText}>သင့်အတွက် နေ့စဉ် လျှော့ဈေးများ</Text>
            </View>

            <View style={globalstyles.secondRow}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <Third title="၁ နှစ်တာလုံးရဲ့" setTitle="အလန်းဆုံးလျှော့ဈေးများ" btn="အခုပဲမှာလိုက်ပါ" imageLink={require("../assets/food/birthdaycake.png")}/>
                    <Third title="foodpanda exclusive" setTitle="၂ နှစ်ပြည့်မွေးနေ့ အထူး" btn="အခုပဲမှာလိုက်ပါ" imageLink={require("../assets/food/birthdaycakewhite.png")}/>
                    <Third title="မွေးနေ့အထူး" setTitle="လက်ဆောင်များ" btn="အခုပဲမှာလိုက်ပါ"/>
                </ScrollView>
            </View>

        </ScrollView>
    );
}
export default Home;