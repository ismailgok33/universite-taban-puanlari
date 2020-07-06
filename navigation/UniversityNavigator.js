import { createStackNavigator } from 'react-navigation-stack';

import UniversityListScreen from '../screens/UniversityListScreen';
import UniversityDetailScreen from '../screens/UniversityDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createAppContainer } from 'react-navigation';

const UniversityNavigator = createStackNavigator({
    UniversityList: UniversityListScreen,
    UniversityDetail: UniversityDetailScreen,
    Favorites: FavoritesScreen,
});

export default createAppContainer(UniversityNavigator);