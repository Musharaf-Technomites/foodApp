import React from 'react'
import { View, Text } from "react-native"
import Colors from '../Constants/Colors'
const MyHader = (props) => {
    return (
        <View style={{ height: "10%", width: "100%", backgroundColor: Colors.primary, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white", letterSpacing: 1.5 }}>{props.headerTitle}</Text>
        </View>
    )
}

export default MyHader