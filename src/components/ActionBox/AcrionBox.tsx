import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles/Colors.ts';
import Text from '../../components/Text/Text.tsx';
import Replay from '../../assets/icons/Comment.svg';
import Like from '../../assets/icons/heart-2 1.svg';
import ActiveLike from '../../assets/icons/Heart.svg';
import ActionItem from './ActionItem.tsx';

const AcrionBox: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(235);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.box}>
      <ActionItem
        icon={<Replay />}
        label="Replay"
        textColor={COLORS.black}
        textSize={12}
      />
      <Text color={COLORS.black}>•</Text>
      <ActionItem
        icon={isLiked ? <ActiveLike /> : <Like />}
        label={`${likeCount}`}
        textColor={COLORS.black}
        textSize={12}
        onPress={toggleLike}
      />
      <Text color={COLORS.black}>•</Text>
      <ActionItem label="Report" textColor={COLORS.orange} textSize={12} />
      <Text color={COLORS.black}>•</Text>
      <ActionItem label="8h" textColor={COLORS.black} textSize={12} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 3,
  },
});

export default AcrionBox;
