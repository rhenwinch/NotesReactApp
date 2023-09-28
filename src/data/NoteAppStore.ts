import {configureStore} from '@reduxjs/toolkit';
import appReducers from './NoteAppSlice';
export const store = configureStore({
  reducer: {
    notesApp: appReducers,
  },
});
export type RootState = ReturnType<typeof store.getState>;
