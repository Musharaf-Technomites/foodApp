import React from 'react'
import { View, Text, StatusBar, FlatList, TouchableOpacity, ImageBackground } from "react-native"
import Colors from '../Constants/Colors'
import MyHader from '../Components/MyHader'
import { allMeals } from '../Data/DummyData'
const AllMealsScreen = (props) => {
    const CategoryData = props?.route?.params?.categoryData
    const FilteredMeals = allMeals.filter((i) => i.categoryId === CategoryData.id)

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bgWhite }}>
            <StatusBar backgroundColor={Colors.primary} />
            <MyHader headerTitle={CategoryData.name} />
            <View style={{ paddingHorizontal: 10, marginVertical: 10, height: "87%" }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={FilteredMeals}
                    renderItem={(itemData) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("MealsDetails", {
                                        details: itemData.item
                                    })
                                }}
                                style={{ height: 150, width: '100%', backgroundColor: 'lightgray', marginBottom: 10, borderRadius: 10, overflow: "hidden" }}>
                                <ImageBackground resizeMode="cover" source={{ uri: itemData.item.imageUrl }} style={{ height: "100%", width: "100%" }}>
                                    <View style={{ height: '100%', width: '100%', backgroundColor: "#00000096", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", letterSpacing: 1.5 }}>
                                            {itemData.item.title}
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

export default AllMealsScreen