const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://tsaarika:${password}@phonebook-fxjvs.mongodb.net/notes?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'And another one',
  date: new Date(),
  important: true,
})

note.save().then(response => {
  console.log(`Note ${response} saved`)
  mongoose.connection.close()
})