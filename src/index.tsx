import {
  Platform,
  requireNativeComponent,
  UIManager,
  ViewProps,
} from 'react-native';
import ShadowView from './ShadowView';
import ShadowText from './ShadowText';

const LINKING_ERROR =
  `The package '@vesselsoft/react-native-shadow' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ComponentName = 'AndroidShadowView';

/**
 * @deprecated ShadowDrop only available for Android
 */
const ShadowDrop: any =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export { ShadowView, ShadowText, ShadowDrop };
