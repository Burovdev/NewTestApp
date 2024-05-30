import React, {FC, memo} from 'react';
import {Text as RNText, StyleProp, TextProps, TextStyle} from 'react-native';

interface IProps extends TextProps {
  children?: string | number;
  fontSize?: number;
  lineHeight?: number;
  numberOfLines?: number | undefined;
  color?: string;
  backgroundColor?: string;
  weight?: number;
  center?: boolean;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  fontFamily?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}

const Text: FC<IProps> = ({
  children,
  fontSize,
  color,
  center,
  textDecorationLine,
  fontFamily,
  textTransform,
  textAlign,
  onPress,
  style,
  lineHeight,
  backgroundColor,
  numberOfLines,
  ...otherProps
}: IProps) => {
  return (
    <RNText
      {...otherProps}
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[
        {
          backgroundColor,
          lineHeight,
          fontSize,
          color,
          fontFamily,
          textAlign: textAlign || (center ? 'center' : 'left'),
          textDecorationLine: textDecorationLine || 'none',
          textTransform: textTransform || 'none',
        },
        style,
      ]}>
      {children}
    </RNText>
  );
};

export default memo(Text);
