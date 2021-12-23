import React from "react";
import { View, Text} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { globalstyles } from "./globalstyle";
import DrawerItems from "./DrawerItems";

const DrawerContents=()=>{
    return(
        <DrawerContentScrollView>
            <View style={globalstyles.userName}>
                <View style={globalstyles.firstName}>
                    <Text style={globalstyles.firstNameContent}>Z</Text>
                </View>
                
                <View style={globalstyles.name}>
                    <Text style={globalstyles.nameContent}>Zay Ya</Text>
                </View>
            </View>

            <DrawerItems label="စိတ်ကြိုက်စားစရာများ" iconName="heart-outline"/>
            <DrawerItems label="အော်ဒါများ" iconName="newspaper-outline"/>
            <DrawerItems label="ပရိုဖိုင်" iconName="person-outline"/>
            <DrawerItems label="လိပ်စာများ" iconName="location-outline"/>
            <DrawerItems label="ဘောက်ချာများ" iconName="clipboard-outline"/>
            <DrawerItems label="အကူအညီပေးဌာန" iconName="help-circle-outline"/>
            <DrawerItems label="သူငယ်ချင်းများကို ဖိတ်ခေါ်ရန်" iconName="git-network-outline"/>

            <Drawer.Section/>

            <DrawerItem
            label="ဆက်တင်များ"
            />

            <DrawerItem
            label="စည်းကမ်းသတ်မှတ်ချက်များ/သီးသန့်အချက်အလက်"
            />

            <DrawerItem
            label="အကောင့်မှထွက်ရန်"
            />
        </DrawerContentScrollView>
    );
}
export default DrawerContents;