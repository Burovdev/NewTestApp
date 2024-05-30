import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../../components/index.ts';
import {COLORS} from '../../styles/Colors.ts';
import Avatar1 from '../../assets/icons/Avatar (2).svg';
import Avatar2 from '../../assets/icons/Avatar (3).svg';
import Avatar3 from '../../assets/icons/Avatar (4).svg';
import UserComment from '../UserComment/UserComment.tsx';

const CommentsBox: React.FC = () => {
  const [viewAll, setViewAll] = useState(false);
  const [activeButton, setActiveButton] = useState('popular');

  const toggleViewAll = () => {
    setViewAll(!viewAll);
  };

  const handleButtonPress = (button: 'popular' | 'recent') => {
    setActiveButton(button);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.commentsButtonsBox}>
          <CustomButton
            children={'Most popular'}
            style={
              activeButton === 'popular'
                ? styles.popularButton
                : styles.recentButton
            }
            textStyle={{
              color:
                activeButton === 'popular'
                  ? COLORS.primaryBackgroundColor
                  : COLORS.darkBlue,
            }}
            onPress={() => handleButtonPress('popular')}
          />
          <CustomButton
            children={'Most recent'}
            style={
              activeButton === 'recent'
                ? styles.popularButton
                : styles.recentButton
            }
            textStyle={{
              color:
                activeButton === 'recent'
                  ? COLORS.primaryBackgroundColor
                  : COLORS.darkBlue,
            }}
            onPress={() => handleButtonPress('recent')}
          />
        </View>
        <UserComment
          avatar={<Avatar1 />}
          userName="@genztroubles"
          comment="Thank you so much for this post It has been such a joy reading this :D"
          isActive
          isViewAll
          toggleViewAll={toggleViewAll}
        />
        {viewAll && (
          <>
            <UserComment
              avatar={<Avatar1 />}
              userName="@additionalUser"
              comment="Additional reply 1"
            />
            <View style={styles.line} />
            <UserComment
              avatar={<Avatar1 />}
              userName="@anotherUser"
              comment="Additional reply 2"
            />
          </>
        )}
        <View style={styles.line} />
        <UserComment
          avatar={<Avatar2 />}
          userName="@onetwothreefour"
          comment="Wow, i cried reading this."
        />
        <View style={styles.line} />
        <UserComment
          avatar={<Avatar3 />}
          userName="@amandazar"
          comment="This post gave me so much hope."
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
    paddingBottom: 30,
  },
  commentsButtonsBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  popularButton: {
    borderRadius: 16,
    backgroundColor: COLORS.darkBlue,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  recentButton: {
    borderRadius: 16,
    backgroundColor: COLORS.lightGray,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.lineGray,
  },
});

export default CommentsBox;
