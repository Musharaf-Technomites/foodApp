import React from 'react'
import { View, Text, StatusBar, ScrollView, Image, FlatList } from "react-native"
import Colors from '../Constants/Colors'
import MyHader from '../Components/MyHader'
const MealsDetails = (props) => {
    const MealsDeils = props.route.params.details
    return (
        <View style={{ height: "100%", width: "100%", backgroundColor: Colors.bgWhite }}>
            <StatusBar backgroundColor={Colors.primary} />
            <MyHader
                headerTitle={MealsDeils.title}
            />
            <ScrollView contentContainerStyle={{ paddingHorizontal: 10, marginVertical: 10 }}>
                <Image
                    style={{ height: 150, width: "100%", borderRadius: 10 }}
                    source={{ uri: MealsDeils.imageUrl }}
                />

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: Colors.primary, fontSize: 20, fontWeight: 'bold', letterSpacing: 1.5 }}>
                        Time
                    </Text>

                    <Text style={{ color: "black", fontSize: 15, letterSpacing: 1.5 }}>
                        {MealsDeils.time}
                    </Text>
                </View>


                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: Colors.primary, fontSize: 20, fontWeight: 'bold', letterSpacing: 1.5 }}>
                        Description
                    </Text>

                    <Text style={{ color: "black", fontSize: 15, letterSpacing: 1.5 }}>
                        {MealsDeils.description}
                    </Text>
                </View>


                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: Colors.primary, fontSize: 20, fontWeight: 'bold', letterSpacing: 1.5 }}>
                        Ingridients
                    </Text>

                    <View style={{ marginTop: 10 }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={MealsDeils.ing}
                            horizontal={true}
                            renderItem={(itemData) => {
                                return (
                                    <View style={{ backgroundColor: 'lightgray', marginHorizontal: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                                        <Text style={{ color: "black", fontSize: 15, letterSpacing: 1.5 }}>
                                            {itemData.item.ingName}
                                        </Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default MealsDetails