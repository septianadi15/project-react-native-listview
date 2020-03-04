/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackHeaderFooter from './StackHeaderFooter';
import EasyGrid from './EasyGrid';
import FlatLists from './FlatLists';
import CustomAlert from './CustomAlert';

AppRegistry.registerComponent(appName, () => CustomAlert);
