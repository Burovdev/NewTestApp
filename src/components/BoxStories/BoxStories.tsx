import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {COLORS} from '../../styles/Colors.ts';
import Text from '../Text/Text.tsx';
import {CustomButton} from '../Button/CustomButton';
import {TextTitle} from '../Text/TextTitle.tsx';
import {TextFontSize} from '../../styles/FontSize.ts';
import AU from '../../assets/icons/AU.svg';
import Replay from '../../assets/icons/Comment.svg';
import ActiveLike from '../../assets/icons/Heart.svg';
import Like from '../../assets/icons/heart-2 1.svg';

interface Tag {
  id: string;
  text: string;
}

interface ActiveTag extends Tag {
  dot?: string;
}

const stories = [
  {
    id: '1',
    user: '@forworldpeace',
    title: 'Shadows of Anxiety',
    text: "Growing up, I always felt the need to be perfect. My parents, though loving, set high standards, and anything less than excellence was not celebrated. This relentless pursuit of perfection followed me into adulthood. The trigger was a seemingly minor incident at work – a missed deadline. This small failure spiraled into a constant fear of inadequacy, leading to my first panic attack. It wasn't just the deadline; it was years of accumulated pressure finally erupting.",
    code: 'AUS',
    date: '25 Jul',
    image: '🍇',
    likes: '102k',
    coments: '2.2k',
  },
  {
    id: '2',
    user: '@user2',
    title: 'How it all began',
    text: "The city's noise had always been a comforting backdrop for Jenna. The distant hum of traffic, the soft murmurs of passersby—it all melded into a familiar symphony of urban life. ",
    code: 'AUS',
    date: '7 Jul',
    image: '🍉',
    likes: '10k',
    coments: '1.2k',
  },
  {
    id: '3',
    user: '@user3',
    title: 'Shadows of Anxiety',
    text: 'An overwhelming sensation of dread, causing her heart to race and her surroundings to blur. Jenna had experienced her first panic attack.',
    code: 'US',
    date: '29 Jul',
    image: '🍋',
    likes: '177k',
    coments: '2k',
  },
];

const tags: Tag[] = [
  {
    id: '2',
    text: 'Panic Disorder',
  },
];

const activeTags: ActiveTag[] = [
  {
    id: '1',
    text: 'Success Story',
    dot: '•',
  },
];

function BoxStories(): React.JSX.Element {
  const initialTags: Tag[] = [activeTags[0], tags[0]];
  const remainingTags: Tag[] = tags.slice(1);

  const splitIntoGroups = (arr: Tag[], groups: number[]): Tag[][] => {
    let result: Tag[][] = [];
    let startIndex = 0;
    groups.forEach(size => {
      result.push(arr.slice(startIndex, startIndex + size));
      startIndex += size;
    });
    return result;
  };

  const tagGroups = splitIntoGroups(remainingTags, [3, 3]);
  const allGroups = [initialTags, ...tagGroups];
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1102);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <FlatList
      data={stories}
      renderItem={({item}) => (
        <View style={styles.section}>
          <View style={styles.box}>
            <View style={styles.avatarBox}>
              <Text>{item.image}</Text>
            </View>
            <View>
              <Text
                style={styles.userNickName}
                fontSize={TextFontSize.microxxs}>
                {item.user}
              </Text>
              <View style={styles.box}>
                <AU />
                <Text color={COLORS.blue}>{item.code}</Text>
              </View>
            </View>
          </View>
          <TextTitle
            style={{color: COLORS.black, fontSize: TextFontSize.micro}}
            text={item.title}
          />
          <Text
            color={COLORS.gray}
            lineHeight={20}
            numberOfLines={4}
            fontSize={TextFontSize.microxxs}>
            {item.text}
          </Text>
          <View style={{paddingVertical: 5}}>
            {allGroups.map((group, index) => (
              <View key={index} style={styles.row}>
                {group.map(item => {
                  const isActive = activeTags.find(tag => tag.id === item.id);
                  const displayText = isActive
                    ? `${isActive.dot} ${item.text}`
                    : item.text;
                  return (
                    <View
                      key={item.id}
                      style={isActive ? styles.activeTag : styles.disabledTag}>
                      <Text
                        color={isActive ? '#027A48' : COLORS.gray}
                        lineHeight={18}
                        numberOfLines={1}
                        fontSize={12}>
                        {displayText}
                      </Text>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
          <View style={styles.boxActions}>
            <View style={styles.box}>
              <CustomButton
                image={isLiked ? <ActiveLike /> : <Like />}
                children={likeCount.toString()}
                textStyle={{color: COLORS.black}}
                onPress={toggleLike}
              />
              <CustomButton
                image={<Replay />}
                children={item.coments}
                textStyle={{color: COLORS.black}}
              />
            </View>
            <View style={styles.box}>
              <Text color={COLORS.gray}>{item.date}</Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.flatList}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 24,
  },
  contentContainer: {
    gap: 10,
  },
  section: {
    width: 345,
    height: '100%',
    padding: 15,
    backgroundColor: COLORS.primaryBackgroundColor,
    borderRadius: 16,
    gap: 7,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  boxActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarBox: {
    backgroundColor: '#2D3282',
    margin: 10,
    padding: 15,
    borderRadius: 99999,
  },
  activeTag: {
    backgroundColor: '#ECFDF3',
    padding: 5,
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 12,
  },
  disabledTag: {
    backgroundColor: COLORS.lightGray,
    padding: 5,
    borderRadius: 16,
    fontSize: 12,
    paddingHorizontal: 10,
  },
  userNickName: {
    color: '#4E5BA6',
    fontWeight: '700',
  },
});

export default BoxStories;
