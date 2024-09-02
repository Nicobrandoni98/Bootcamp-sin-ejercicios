const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const Note = require('./models/note');

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

// ------- PARTE DE LA BASE DE DATOS
/* const mongoose = require('mongoose')

const password = process.argv[2]
console.log('password', password)

const url = `mongodb+srv://nicobrandoni98:1RXqaQ5n8QWVZrHa@proeyctofullstack.vqdwg.mongodb.net/noteApp?retryWrites=true&w=majority&appName=proeyctoFullstack`; */
// lo que esta despues de nicobrandoni98 hasta el @: es la contraseña

//----------------------------------


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


app.get("/api/notes", (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  })
});

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
  /* const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  } */

    const {content, important} = request.body

  Note.findByIdAndUpdate(
    request.params.id,
     {content, important},
     {new: true, runValidators: true, context: 'query'}
    )
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

app.post('/api/notes', (request, response, next) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
  .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response) => {
  const { id } = request.params;
  const body = request.body;

  Note.findByIdAndUpdate(id, body, { new: true })
    .then(updatedNote => {
      if (updatedNote) {
        response.json(updatedNote);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => response.status(400).send({ error: 'malformatted id' }));
});


const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })

  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}


app.use(unknownEndpoint)
app.use(errorHandler)


const PORT = process.env.PORT 
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
