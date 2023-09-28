import {useDispatch, useSelector} from 'react-redux';
import {NoteAppState} from '../../domain/model/state/NoteAppState';
import {NotesAppActions} from '../../data/NoteAppSlice';
import Note from '../../domain/model/Note';
import {RootState} from '../../data/NoteAppStore';

const useAppViewModel = () => {
  const dispatch = useDispatch();
  const {notesList, trashBin, timeOfDay}: NoteAppState = useSelector(
    (state: RootState) => state.notesApp,
  );

  const {addNote, removeNote} = NotesAppActions;

  return {
    notesList,
    trashBin,
    timeOfDay,

    addNote: (note: Note) => dispatch(addNote({note})),
    removeNote: (id: string) => dispatch(removeNote({id})),
  };
};

export default useAppViewModel;
