import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text, useTheme} from 'react-native-paper';
import {defaultColors} from '../../common/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TopAppBarProp {
  onTrashIconClick: () => void;
  timeOfDay: string;
}

const TopAppBar = (props: TopAppBarProp) => {
  const {timeOfDay, onTrashIconClick} = props;
  const theme = useTheme();

  return (
    <View
      style={[
        styles.topBarParent,
        {backgroundColor: defaultColors.transparent},
      ]}>

      <View style={[styles.topBarIcons, styles.topBarStartIcon]}>
        <Icon
          name="face-man-shimmer-outline"
          color={theme.colors.onBackground}
          size={30}
        />
      </View>

      <Text variant="headlineSmall" style={styles.topBarMessage}>
        Hi, {timeOfDay}!
      </Text>

      <IconButton
        icon="trash-can-outline"
        iconColor={theme.colors.onBackground}
        size={26}
        style={styles.topBarIcons}
        onPress={onTrashIconClick}
        rippleColor={defaultColors.rippleColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBarParent: {
    paddingVertical: 16,
    paddingHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarMessage: {
    fontWeight: '900',
    fontSize: 20,
    flex: 3,
    margin: 8,
  },
  topBarIcons: {flex: 1},
  topBarStartIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopAppBar;
