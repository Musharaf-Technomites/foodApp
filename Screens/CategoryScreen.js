import React from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { allCategories, allMeals } from "../Data/DummyData"
const CategoryScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FlatList
                data={allCategories}
                numColumns={2}
                renderItem={(itemData) => {
                    console.log(itemData.item.color)
                    return (
                        <TouchableOpacity style={{ height: 100, width: "47%", backgroundColor: itemData.item.color, margin: 5, borderRadius: 20, overflow: "hidden" }}>
                            <View style={{ height: '100%', width: '100%', backgroundColor: '#00000059', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                                    {itemData.item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default CategoryScreen