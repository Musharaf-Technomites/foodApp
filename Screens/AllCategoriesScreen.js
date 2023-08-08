import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StatusBar, ImageBackground } from "react-native"
import Colors from '../Constants/Colors'
import { allCategories } from '../Data/DummyData'
import MyHeader from "../Components/MyHader"
const AllCategoriesScreen = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bgWhite }}>
            <StatusBar backgroundColor={Colors.primary} />
            <MyHeader headerTitle="Categories" />
            <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    data={allCategories}
                    renderItem={(itemData) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate("AllMeals", {
                                    categoryData: itemData.item
                                })
                            }} style={{ height: 150, width: '47.5%', backgroundColor: 'lightgray', margin: 5, borderRadius: 10, overflow: "hidden" }}>
                                <ImageBackground source={{ uri: itemData.item.imageUrl }} style={{ height: '100%', width: '100%' }}>
                                    <View style={{ height: '100%', width: '100%', backgroundColor: "#00000096", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", letterSpacing: 1.5 }}>
                                            {itemData.item.name}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>

                        )
                    }}
                />
            </View>
        </View>
    )
}

export default AllCategoriesScreen

