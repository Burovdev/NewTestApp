import React from 'react';
import Text from '../../components/Text/Text.tsx';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';

interface ActionItemProps {
  icon?: React.ReactNode;
  label: string;
  textColor?: string;
  textSize?: number;
  onPress?: () => void;
}

const ActionItem: React.FC<ActionItemProps> = ({
  icon,
  label,
  textColor,
  textSize,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text color={textColor} fontSize={textSize}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 4,
  },
});

export default ActionItem;
