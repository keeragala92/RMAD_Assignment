/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import HomeCC from './src/HomeCC';
import Myflatlist from './src/Myflatlist';

AppRegistry.registerComponent(appName, () =>Myflatlist);

