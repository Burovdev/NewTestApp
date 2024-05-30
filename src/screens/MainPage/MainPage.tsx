import React, {useState, useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {ScreenWrapper} from '../../components/Wrapper/index.tsx';
import {CustomButton, TextTitle} from '../../components/index.ts';
import {COLORS} from '../../styles/Colors.ts';
import {ScrollView} from 'react-native-gesture-handler';
import Informations from '../../components/Informations/Informations.tsx';
import BoxStories from '../../components/BoxStories/BoxStories.tsx';
import {TextFontSize} from '../../styles/FontSize.ts';
import Text from '../../components/Text/Text.tsx';
import Logo from '../../assets/images/tittleImg.svg';
import Shere from '../../assets/icons/Group.svg';
import TagsBox from '../../components/TagsBox/TagsBox.tsx';
import BottomNav from '../../components/BottomNav/BottomNav.tsx';
import UserBox from '../../components/UserBox/UserBox.tsx';
import CommentsBox from '../../components/CommentsBox/CommentsBox.tsx';

function MainPage(): React.JSX.Element {
  const [bottomNavVisible] = useState(true);
  const scrollOffset = useRef(new Animated.Value(0)).current;
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollOffset}}}],
    {useNativeDriver: false},
  );
  const bottomNavStyle = {
    transform: [
      {
        translateY: scrollOffset.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      },
    ],
    opacity: bottomNavVisible ? 1 : 0,
  };
  return (
    <>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <ScreenWrapper>
          <View style={styles.sectionTitle}>
            <TextTitle
              style={{color: 'white', textAlign: 'center', paddingBottom: 20}}
              text={'Breaking the \nChains of Panic \n Disorder'}
            />
            <Text
              color={COLORS.primaryBackgroundColor}
              children={'25 Jul 2025'}
            />
            <View style={styles.image}>
              <Logo />
            </View>
          </View>
          <View style={styles.container}>
            <UserBox />
            <Informations />
            <TagsBox />
            <View style={styles.buttonsBox}>
              <CustomButton
                image={<Shere />}
                children={'Shere'}
                textStyle={{color: COLORS.black}}
              />
              <CustomButton
                children={'Report'}
                textStyle={{color: COLORS.orange}}
              />
            </View>
            <TextTitle style={styles.tittle} text={'More stories '} />
            <BoxStories />
            <TextTitle style={styles.tittle} text={'1.3k Comments'} />
            <CommentsBox />
          </View>
        </ScreenWrapper>
      </ScrollView>
      <Animated.View style={[styles.bottomNav, bottomNavStyle]}>
        <BottomNav />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    flex: 1,
  },
  buttonsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  sectionTitle: {
    backgroundColor: COLORS.primaryColor,
    alignItems: 'center',
    minHeight: 594,
    paddingTop: 24,
    justifyContent: 'flex-end',
    width: '100%',
  },
  image: {
    paddingTop: 100,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    backgroundColor: COLORS.backgroundColor,
  },
  commentsButtonsBox: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  popularButton: {
    borderRadius: 16,
    backgroundColor: COLORS.darkBlue,
  },
  recentButton: {
    borderRadius: 16,
    backgroundColor: COLORS.lightGray,
  },
  tittle: {
    color: COLORS.black,
    fontSize: TextFontSize.mini,
    marginHorizontal: 25,
    marginVertical: 15,
    fontWeight: '700',
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
});

export default MainPage;
