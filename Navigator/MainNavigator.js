import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()


// import Screens
import AllCategories from "../Screens/AllCategoriesScreen"
import AllMealsScreen from "../Screens/AllMealsScreen"
import MealsDetails from "../Screens/MealsDetails"


const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Categories" component={AllCategories} />
                <Stack.Screen name="AllMeals" component={AllMealsScreen} />
                <Stack.Screen name="MealsDetails" component={MealsDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator