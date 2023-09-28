import React, {ReactElement} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import NoteCard from './NoteCard';
import DashboardScreenController from './DashboardScreenController';
import MasonryList from '@react-native-seoul/masonry-list';
import Note from '../../../domain/model/Note';
import TopAppBar from './TopAppBar';
import {FAB, useTheme} from 'react-native-paper';

const DashboardScreen = () => {
  const {notesList, timeOfDay, onItemRemove, onFabClick} =
    DashboardScreenController();
  const {colors} = useTheme();

  const renderItem = ({item, i}): ReactElement => {
    const note = item as Note;

    return <NoteCard note={note} onRemoveClick={() => onItemRemove(note.id)} />;
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView>
        <TopAppBar
          timeOfDay={timeOfDay}
          onTrashIconClick={() => console.log('Clicked')}
        />
        <MasonryList
          numColumns={2}
          data={notesList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.mainContent}
        />
      </ScrollView>

      <FAB icon="plus" style={styles.fab} onPress={onFabClick} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  mainContent: {flex: 1},
  fab: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});

export default DashboardScreen;
