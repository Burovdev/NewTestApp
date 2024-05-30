import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles/Colors';
import Text from '../Text/Text';

interface Tag {
  id: string;
  text: string;
}

interface ActiveTag extends Tag {
  dot?: string;
}

interface TagsBoxProps {}

const tags: Tag[] = [
  {
    id: '2',
    text: 'General Anxiety Disorder',
  },
  {
    id: '3',
    text: 'Obsessive Compulsive Disorder',
  },
  {
    id: '4',
    text: 'Panic Disorder',
  },
  {
    id: '5',
    text: 'Health Anxiety',
  },
  {
    id: '6',
    text: 'Musician',
  },
  {
    id: '7',
    text: 'Workplace politics',
  },
  {
    id: '8',
    text: 'Workplace sucks',
  },
];

const activeTags: ActiveTag[] = [
  {
    id: '1',
    text: 'The struggles',
    dot: '•',
  },
];

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const TagsBox: React.FC<TagsBoxProps> = (): React.ReactElement => {
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

  return (
    <View style={styles.container}>
      {allGroups.map((group, index) => (
        <View key={index} style={styles.row}>
          {group.map(item => {
            const isActive = activeTags.find(tag => tag.id === item.id);
            const displayText = isActive
              ? `${isActive.dot} ${truncateText(item.text, 15)}`
              : truncateText(item.text, 15);
            return (
              <View
                key={item.id}
                style={isActive ? styles.activeTag : styles.disabledTag}>
                <Text
                  color={isActive ? '#B54708' : COLORS.gray}
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
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    gap: 10,
  },
  activeTag: {
    backgroundColor: '#FFFAEB',
    padding: 5,
    borderRadius: 16,
    fontSize: 12,
    paddingHorizontal: 10,
  },
  disabledTag: {
    backgroundColor: COLORS.lightGray,
    padding: 5,
    borderRadius: 16,
    fontSize: 12,
    paddingHorizontal: 10,
  },
});

export default TagsBox;
