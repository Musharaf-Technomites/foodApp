import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import SplashScreen from "../Screens/SplashScreen"
import CategoryScreen from "../Screens/CategoryScreen"
import MealsScreen from "../Screens/MealsScreen"

const Stack = createStackNavigator()



const MainNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{}}>
                <Stack.Screen options={{ headerShown: false }} name="splash" component={SplashScreen} />
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
                <Stack.Screen name="MealsScreen" component={MealsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default MainNavigator