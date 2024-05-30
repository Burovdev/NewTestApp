import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface IProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
  image?: React.ReactNode;
}

export const CustomButton: React.FC<IProps> = ({
  style,
  textStyle,
  children,
  image,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} {...restProps}>
      {typeof children === 'string' ? (
        <View style={styles.contentContainer}>
          {image && <View style={styles.image}>{image}</View>}
          <Text style={textStyle}>{children}</Text>
        </View>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 5,
  },
});
