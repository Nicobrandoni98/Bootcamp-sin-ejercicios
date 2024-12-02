import { useEffect } from "react";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import VisibilityFilter  from "./components/visibilityFilter";
import noteService from './services/notes'
import {setNotes} from './reducers/noteReducer'
import { useDispatch } from "react-redux";
import { initializeNotes } from './reducers/noteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App; 

// Comento el codigo para seguir con el cap D de la part 6
/* import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote, updateNote } from "./requests.js";

const App = () => {
  const queryClient = useQueryClient();

  const newNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(['notes'])
      queryClient.setQueryData(['notes'], notes.concat(newNote))
    }
  })

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    newNoteMutation.mutate({ content, important: true });
  };

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({ ...note, important: !note.important });
  };

  const result = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
    refetchOnWindowFocus: false
  });
  console.log(JSON.parse(JSON.stringify(result)));

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  const notes = result.data;

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "Important" : "Not important"}</strong>
        </li>
      ))}
    </div>
  );
};

export default App; 

// siguiendo parte 6 cap D, useReducer
/* import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Display />
      <div>
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </div>
  );
};

export default App; */
