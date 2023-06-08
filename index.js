import {
  AppRegistry,
} from 'react-native';
import {LearnRNContainer} from "./src/learn/LearnRNContainer";
import {WanAndroidContainer} from "./src/wanandroid/WanAndroidContainer";

AppRegistry.registerComponent(
  'LearnRNPage',
  () => LearnRNContainer
);

AppRegistry.registerComponent(
    'WanAndroidPage',
    () => WanAndroidContainer
)
