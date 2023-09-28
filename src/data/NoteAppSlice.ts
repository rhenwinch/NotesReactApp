import {createSlice, nanoid} from '@reduxjs/toolkit';
import Note from '../domain/model/Note';
import {NoteAppState} from '../domain/model/state/NoteAppState';
import generateRandomLoremIpsum from '../utils/generateRandomLoremIpsum';
import getTimeOfDay from '../utils/TimeOfDay';

export type addNoteAction = {payload: {note: Note}; type: string};
export type removeNoteAction = {payload: {id: string}; type: string};

const initialNoteAppState: NoteAppState = {
  notesList: [
    new Note(nanoid(), 'Happy Birthday!', 'Es'),
    new Note(nanoid(), 'React-Native Notes', generateRandomLoremIpsum()),
    new Note(nanoid(), 'React-Native Notes2', generateRandomLoremIpsum()),
    new Note(nanoid(), 'React-Native Notes3', generateRandomLoremIpsum()),
    new Note(nanoid(), 'React-Native Notes4', generateRandomLoremIpsum()),
  ],
  trashBin: [
    new Note(nanoid(), 'Secret only!', generateRandomLoremIpsum()),
    new Note(nanoid(), 'Surprise event for Maria', generateRandomLoremIpsum()),
  ],
  timeOfDay: getTimeOfDay(),
};
export const NoteAppSlice = createSlice({
  name: 'notes',
  initialState: initialNoteAppState,
  reducers: {
    addNote: (state, action: addNoteAction) => {
      state.notesList = state.notesList.concat([action.payload.note]);
    },
    removeNote: (state, action: removeNoteAction) => {
      // Find the index of the note to remove in the notesList
      const noteIndexToRemove = state.notesList.findIndex(
        note => note.id === action.payload.id,
      );

      if (noteIndexToRemove !== -1) {
        // Remove the note from notesList and store it in a variable
        const removedNote = state.notesList.splice(noteIndexToRemove, 1)[0];

        // Add the removed note to the trashBin
        state.trashBin = [...state.trashBin, removedNote];
      }
    },
  },
});

const {addNote, removeNote} = NoteAppSlice.actions;

export const NotesAppActions = {
  addNote,
  removeNote,
};

export default NoteAppSlice.reducer;
