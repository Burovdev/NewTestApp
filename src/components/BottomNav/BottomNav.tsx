import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles/Colors.ts';
import {CustomButton} from '../Button/CustomButton';
import Replay from '../../assets/icons/comment-white.svg';
import Like from '../../assets/icons/heart-white.svg';
import Top from '../../assets/icons/arrow-up.svg';
import Send from '../../assets/icons/Vector.svg';
import {CustomInput} from '../Input/CustomInput.tsx';

function BottomNav(): React.JSX.Element {
  return (
    <>
      <View style={styles.section}>
        <View style={styles.box}>
          <CustomButton
            image={<Like />}
            children="80k"
            textStyle={{color: COLORS.primaryBackgroundColor}}
          />
          <CustomButton
            image={<Replay />}
            children="1.3k"
            textStyle={{color: COLORS.primaryBackgroundColor}}
          />
          <CustomButton
            image={<Top />}
            children="Top"
            textStyle={{color: COLORS.primaryBackgroundColor}}
          />
        </View>
        <View style={styles.inputBox}>
          <CustomInput
            style={styles.customInput}
            placeholder={'Write a comment'}
            placeholderTextColor={'#667085'}
          />
          <View style={styles.sendButton}>
            <CustomButton
              image={<Send />}
              children={''}
              textStyle={{color: COLORS.black}}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingVertical: 4,
    backgroundColor: COLORS.black,
    borderRadius: 99,
    gap: 15,
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: COLORS.primaryBackgroundColor,
    shadowColor: '#101828',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  customInput: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#D0D5DD',
    color: '#667085',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: COLORS.primaryBackgroundColor,
  },
  sendButton: {
    paddingTop: 20,
  },
});

export default BottomNav;
