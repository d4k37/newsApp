import React from 'react'
import  {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import NewsListScreen from '../screens/NewsListScreen'
import NewsDetailsScreen from '../screens/NewsDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MaterialIcons from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

const Tabs = createBottomTabNavigator()

function HomeNavigator(){
    return(
        <Stack.Navigator>
        <Stack.Screen 
        name="NewsList" 
        component={NewsListScreen} 
        options={{title: 'All News'}}
        />
        <Stack.Screen 
        name="NewsDetails" 
        component={NewsDetailsScreen} 
        options={{title: 'News Details'}}
        />
    </Stack.Navigator>
    )
}

function FavoriteNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}

function AppNavigator(){
    return(
        <NavigationContainer>
           <Tabs.Navigator 
                       screenOptions={({route})=> ({
                        tabBarIcon: () => {
                            let iconName;
                            if(route.name=="Home"){
                                iconName="home"
                            } else if (route.name=="Favorite") {
                                iconName="favorite"
                            }
                            return <MaterialIcons name={iconName} size={24} />
                        }
                       })}
           >
               <Tabs.Screen  name="Home" component={HomeNavigator} />
               <Tabs.Screen name="Favorite" component={FavoriteNavigator}/>
           </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator