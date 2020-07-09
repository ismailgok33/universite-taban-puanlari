import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import UniversityListScreen from '../screens/UniversityListScreen';
import UniversityDetailScreen from '../screens/UniversityDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const UniversityNavigator = createStackNavigator({
    UniversityList: UniversityListScreen,
    UniversityDetail: UniversityDetailScreen,
    Favorites: FavoritesScreen,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    }
});

export default createAppContainer(UniversityNavigator);