import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface IProps extends TextInputProps {}
const CustomInput: FC<IProps> = ({style, ...restProps}) => {
  return <TextInput style={[styles.wrapper, style]} {...restProps} />;
};

export {CustomInput};
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 3,
    fontSize: 16,
    width: '100%',
    maxWidth: 500,
    marginTop: 20,
    minWidth: 200,
  },
});
