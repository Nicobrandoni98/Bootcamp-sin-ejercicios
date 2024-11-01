import { createSlice, current } from "@reduxjs/toolkit";

// Generate Id random
const generateId = () => Number((Math.random() * 1000000).toFixed(0));

// Reducer
const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      const content = action.payload;
      state.push({
        content,
        important: false,
        id: generateId(),
      });
    },
    toggleImportanceOf(state, action) {
      const id = action.payload;
      
      const noteToChange = state.find((n) => n.id === id);
      
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      
      return state.map((note) => (note.id !== id ? note : changedNote));
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload
    }
  },
});

export const { createNote, toggleImportanceOf, appendNote, setNotes } = noteSlice.actions;
export default noteSlice.reducer;
