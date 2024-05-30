import {View, ViewProps} from 'react-native';
import {KeyboardAvoidingViewComponent} from '../KeyboardAvoidingViewComponent/KeyboardAvoidingViewComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IProps extends ViewProps {
  allowAreaInsets?: 'top' | 'always';
}

export const ScreenWrapper: React.FC<IProps> = ({
  allowAreaInsets,
  style,
  children,
}) => {
  const {top: paddingTop, bottom: paddingBottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        {flex: 1},
        style,
        allowAreaInsets === 'always' && {paddingTop, paddingBottom},
        allowAreaInsets === 'top' && {paddingTop},
      ]}>
      <KeyboardAvoidingViewComponent>{children}</KeyboardAvoidingViewComponent>
    </View>
  );
};
