import Note from '../Note';

export type NoteAppState = {
  notesList: Array<Note>;
  trashBin: Array<Note>;
  timeOfDay: string;
};
