import { useNotes, getNotes } from "./NoteDataProvider.js";
import { noteComponent } from "./Note.js";

const eventHub = document.querySelector(".container")
const noteHTML = document.querySelector(".notesContainer")

const NoteListComponent = () => {
  

  eventHub.addEventListener("showNoteButtonClicked", event => {
    getNotes().then(
      () => {
        const allNotes = useNotes()
        console.log(allNotes)
        render(allNotes)
      }
    )
  })

  const render = noteCollection => {
    noteHTML.innerHTML = 
      noteCollection.map(
        (note) => {
          return noteComponent(note)
        }
      ).join("")
  }
}

export default NoteListComponent