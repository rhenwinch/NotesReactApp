import React from 'react';
import {
  Card,
  Divider,
  IconButton,
  MD3Colors,
  Text,
  useTheme,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Note from '../../../domain/model/Note';
import {defaultColors} from '../../common/Colors';

interface NoteCardProps {
  onRemoveClick: () => void;
  note: Note;
}
const NoteCard = (props: NoteCardProps) => {
  const {colors} = useTheme();
  const {onRemoveClick, note} = props;

  return (
    <Card style={styles.container}>
      <Card.Title
        titleStyle={styles.title}
        titleNumberOfLines={2}
        titleVariant="titleMedium"
        title={note.title}
        subtitleStyle={styles.subtitle}
        subtitleVariant="labelSmall"
        subtitle={note.createdAt.toLocaleDateString()}
      />
      <Divider style={styles.divider} />
      <Card.Content>
        <Text variant="bodyMedium" numberOfLines={9} ellipsizeMode="tail">
          {note.content}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {margin: 8},
  parent: {
    position: 'relative',
  },
  child: {
    position: 'absolute',
    width: '100%', // Child 2 occupies full width
  },
  card: {
    flex: 1,
    minHeight: 30,
  },
  centerChild: {},
  alignBottom: {
    bottom: '50%', // Align Child 2 to the bottom
  },
  divider: {margin: 10},
  title: {fontWeight: '900'},
  subtitle: {fontWeight: '200'},
  errorButton: {backgroundColor: MD3Colors.error90},
});

export default NoteCard;
