import { getCriminals } from './Criminal/CriminalProvider.js'
import CriminalList from "./Criminal/CriminalList.js"
import { getConvictions } from './Conviction/ConvictionProvider.js'
import ConvictionSelect from './Conviction/ConvictionSelect.js'
import NoteFormComponent from './Notes/NoteForm.js'
import { getNotes } from './Notes/NoteDataProvider.js'
import NoteListComponent from './Notes/NoteList.js'
import DialogComponent from './dialog/Dialog.js'

NoteFormComponent()
DialogComponent()

getConvictions().then(
    () => ConvictionSelect()
)

getCriminals().then(
    () => CriminalList()
)

getNotes().then(() => NoteListComponent())


