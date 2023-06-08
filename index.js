import {
  AppRegistry,
} from 'react-native';
import {LearnRN} from "./src/learn/LearnRN";
import {WanHome} from "./src/wanandroid/WanHome";

AppRegistry.registerComponent(
  'LearnRNPage',
  () => LearnRN
);

AppRegistry.registerComponent(
    'WanAndroidPage',
    () => WanHome
)
