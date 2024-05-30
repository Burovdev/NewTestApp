import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ScreenWrapper} from '../../components/Wrapper';

import {TextTitle} from '../../components';
import {COLORS} from '../../styles/Colors.ts';

import {ScrollView} from 'react-native-gesture-handler';
import {TextFontSize} from '../../styles/FontSize.ts';
import Text from '../Text/Text.tsx';
import Image1 from '../../assets/icons/Image1.svg';
import Image from '../../assets/icons/Image.svg';

function Informations(): React.JSX.Element {
  return (
    <ScrollView>
      <ScreenWrapper>
        <View style={styles.sectionContainer}>
          <TextTitle
            style={{color: COLORS.primaryColor, fontSize: TextFontSize.small}}
            text={'How it all began'}
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            fontFamily="Source Serif Pro"
            children={
              "The city's noise had always been a comforting backdrop for Jenna. The distant hum of traffic, the soft murmurs of passersby—it all melded into a familiar symphony of urban life. "
            }
          />
          <View style={styles.firstImage}>
            <Image />
          </View>
          <View style={styles.textNoth}>
            <Text
              style={{fontStyle: 'italic'}}
              lineHeight={24}
              fontSize={TextFontSize.micro}
              color={COLORS.gray}
              children={
                'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.'
              }
            />
          </View>
          <TextTitle
            style={{color: COLORS.black, fontSize: TextFontSize.mini}}
            text={'Your sub-header goes here'}
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'For weeks, Jenna tried to shrug it off, attributing it to work stress or fatigue.  '
            }
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'But the episodes grew in frequency, and soon, she found herself avoiding certain places and activities, fearful of triggering another episode. '
            }
          />

          <TextTitle
            style={{color: COLORS.primaryColor, fontSize: TextFontSize.small}}
            text={'How is the journey like for me now'}
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />

          <TextTitle
            style={{color: COLORS.black, fontSize: TextFontSize.mini}}
            text={'Your sub-header goes here'}
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />

          <TextTitle
            style={{color: COLORS.primaryColor, fontSize: TextFontSize.small}}
            text={'Positive changes I hope to see in the future'}
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />
          <Image1 />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />
          <TextTitle
            style={{color: COLORS.black, fontSize: TextFontSize.mini}}
            text={
              'But lately, these sounds had started triggering an unfamiliar reaction'
            }
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />

          <TextTitle
            style={{color: COLORS.primaryColor, fontSize: TextFontSize.small}}
            text={'My message to others who are on the same journey'}
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />
          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'For weeks, Jenna tried to shrug it off, attributing it to work stress or fatigue. But the episodes grew in frequency, and soon, she found herself avoiding certain places and activities, fearful of triggering another episode. The world she once explored freely now seemed riddled with invisible landmines. Jenna felt trapped, her life shrinking before her eyes. '
            }
          />

          <Text
            color={COLORS.gray}
            lineHeight={24}
            fontSize={TextFontSize.micro}
            children={
              'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack. '
            }
          />
        </View>
      </ScreenWrapper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    gap: 15,
  },
  textNoth: {
    borderColor: COLORS.orange,
    borderLeftWidth: 4,
    padding: 8,
    lineHeight: 24,
  },
  sectionBox: {
    gap: 15,
  },
  image: {
    width: '90%',
    height: '100%',
  },
  firstImage: {
    borderRadius: 16,
  },
});

export default Informations;
