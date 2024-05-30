import {Keyboard, KeyboardAvoidingView, Pressable} from 'react-native';
import {isAndroidDevice} from '../../../utils/isAndroidDevice';
import {PropsWithChildren} from 'react';

export const KeyboardAvoidingViewComponent = ({
  children,
}: PropsWithChildren) => (
  <KeyboardAvoidingView
    behavior={!isAndroidDevice ? 'padding' : 'height'}
    style={{flex: 1}}>
    <Pressable onPress={Keyboard.dismiss} style={{flex: 1}}>
      {children}
    </Pressable>
  </KeyboardAvoidingView>
);
