import { fetchingNotes } from "../actions/index";
export const ADDING_NOTE = "ADDING_NOTE";
export const ADDED_NOTE = "ADDED_NOTE";
export const UPDATING_NOTE = "UPDATING_NOTE";
export const UPDATED_NOTE = "UPDATED_NOTE";
export const DELETING_NOTE = "DELETING_NOTE";
export const DELETED_NOTE = "DELETED_NOTE";
export const GETTING_NOTES = "GETTING_NOTES";
export const GOT_NOTES = "GOT_NOTES";
export const SELECTING_NOTE = "SELECTING_NOTE";
export const SELECTED_NOTE = "SELECTED_NOTE";
export const SORT_GREATEST = "SORT_GREATEST";
export const SORT_LEAST = "SORT_LEAST";
export const ERROR = "ERROR";

const initialState = {
  notes: [],
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  gettingNotes: false,
  selecting: false,
  error: null,
  select: null,
  nextId: null,
  sort: null,
  count: 0,
};

const reducerNote = (state = initialState, action) => {
  const notes = state.notes;
  switch (action.type) {
    case ADDING_NOTE:
      return { ...state, addingNote: true };
    case ADDED_NOTE:
      return {
        ...state,
        addingNote: false,
        notes: [...state.notes, action.payload]
      };
    case UPDATING_NOTE:
      return { ...state, updatingNote: true };
    case UPDATED_NOTE:
      
      return {
        ...state,
        count: Math.floor(Math.random() *1000000),
        updatingNote: false,
        notes: state.notes.map(
          note =>
            note.id === action.payload.id
              ? (note = {
                  id: action.payload.id,
                  title: action.payload.title,
                  textBody: action.payload.textBody,
                  __v: action.payload.__v,
                  tags: action.payload.tags,
                  time: action.payload.time,
                  length: action.payload.textBody.length
                })
              : (note = note)
        )
        
      };
      
    case DELETING_NOTE:
      return { ...state, deletingNote: true };
    case DELETED_NOTE:
      return {
        ...state,
        deletingNote: false,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    case SELECTING_NOTE:
      return { ...state, selecting: true };
    case SELECTED_NOTE:
      return { ...state, selecting: false, select: action.payload };
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case GOT_NOTES:
      return { ...state, gettingNotes: false, notes: action.payload };
    case SORT_GREATEST:
      notes.sort((a, b) => {
        return a.length < b.length;
      });
      return { ...state, notes, sort: SORT_GREATEST };
    case SORT_LEAST:
      notes.sort((a, b) => {
        return a.length > b.length;
      });
      return { ...state, notes, sort: SORT_LEAST };
    case ERROR:
      return {
        ...state,
        gettingNotes: false,
        addingNote: false,
        updatingNote: false,
        deletingNote: false,
        selecting: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default reducerNote;
