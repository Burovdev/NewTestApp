import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {TextFontSize} from '../../styles/FontSize.ts';
interface IProps extends TextProps {
  text: string;
}
const TextTitle: FC<IProps> = ({style, text, ...restProps}) => {
  return (
    <Text style={[styles.text, style]} {...restProps}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: TextFontSize.xlarge,
    fontWeight: '700',
  },
});
export {TextTitle};
