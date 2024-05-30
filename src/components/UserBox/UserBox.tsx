import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../components/index.ts';
import {COLORS} from '../../styles/Colors.ts';
import {TextFontSize} from '../../styles/FontSize.ts';
import Text from '../../components/Text/Text.tsx';
import AU from '../../assets/icons/AU.svg';
import UserImg from '../../assets/icons/UserImg.svg';

function UserBox(): React.JSX.Element {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.userBoxWrapper}>
      <View style={styles.userBox}>
        <UserImg />
        <View style={styles.userBoxText}>
          <Text style={styles.userNickName} fontSize={TextFontSize.microxxs}>
            @loveinhumanity
          </Text>
          <View style={styles.box}>
            <AU />
            <Text color={COLORS.blue}>UA</Text>
          </View>
        </View>
        <CustomButton
          onPress={handleFollowToggle}
          children={isFollowing ? 'Unfollow' : 'Follow'}
          textStyle={{color: COLORS.black}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  image: {
    paddingTop: 100,
  },
  tittle: {
    color: COLORS.black,
    fontSize: TextFontSize.mini,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  userBoxWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -20,
  },
  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    width: '80%',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.primaryBackgroundColor,
    padding: 10,
  },
  userBoxText: {
    flex: 1,
    marginLeft: 10,
  },
  userNickName: {
    color: '#4E5BA6',
    fontWeight: '700',
  },
});

export default UserBox;
