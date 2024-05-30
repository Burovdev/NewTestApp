import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../components/index.ts';
import {COLORS} from '../../styles/Colors.ts';
import {TextFontSize} from '../../styles/FontSize.ts';
import Text from '../../components/Text/Text.tsx';
import AcrionBox from '../ActionBox/AcrionBox.tsx';

interface UserCommentProps {
  avatar: React.ReactElement;
  userName: string;
  comment: string;
  isActive?: boolean;
  isViewAll?: boolean;
  toggleViewAll?: () => void;
}

const UserComment: React.FC<UserCommentProps> = ({
  avatar,
  userName,
  comment,
  isActive,
  isViewAll,
  toggleViewAll,
}) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <View>{avatar}</View>
      <View>
        <View style={styles.userBoxText}>
          <Text style={styles.userNickName} fontSize={TextFontSize.microxxs}>
            {userName}
          </Text>
          {isActive && (
            <View style={styles.activeTag}>
              <Text style={styles.activeTagText}>Moderator</Text>
            </View>
          )}
        </View>
        <View style={styles.box}>
          <Text color={COLORS.gray}>{comment}</Text>
        </View>
      </View>
    </View>
    <AcrionBox />
    {isViewAll && (
      <View style={styles.viewMore}>
        <CustomButton
          children={'View all 12 replies'}
          onPress={toggleViewAll}
        />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  userBoxText: {
    flex: 1,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTag: {
    backgroundColor: '#F9F5FF',
    padding: 5,
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  activeTagText: {
    color: '#6941C6',
  },
  userNickName: {
    paddingTop: 5,
    color: '#4E5BA6',
    fontWeight: '700',
  },
  viewMore: {
    alignItems: 'flex-end',
  },
});

export default UserComment;
