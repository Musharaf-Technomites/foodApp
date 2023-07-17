import React from "react"
import { View, Text, Image, Button, TouchableOpacity } from "react-native"
const SplashScreen = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: "white" }}>
            <Image
                style={{ height: 200, width: 200, borderRadius: 30 }}
                source={{ uri: "https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=360" }}
            />
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("CategoryScreen")
            }} style={{ height: 50, width: "60%", backgroundColor: "orange", borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>GO TO CATEGORY</Text>
            </TouchableOpacity>
            {/* <Button onPress={() => {
                props.navigation.navigate("CategoryScreen")
            }} title="Go To Category" /> */}
        </View>
    )
}

export default SplashScreen