import CriminalComponent from "./Criminal.js"
import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")
const criminalHTML = document.querySelector(".criminalsContainer")


const CriminalList = () => {
    // Load the application state to be used by this component
    const Criminals = useCriminals()

    eventHub.addEventListener("crimeSelected", event => {
        const crimeId = event.detail.crime
        
        const accurateCriminals = Criminals.filter(
            (crime) => {
                if (crime.conviction === crimeId) {
                    return Criminals
                }
            }
        )
render(accurateCriminals)
    })



    eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("associates--")) {

          const [prefix, id] = clickEvent.target.id.split("--")

        const message = new CustomEvent("associateButtonClicked", {

          detail: {

              criminalId: id

          }
        })
        eventHub.dispatchEvent(message)
      }
    })



    
    const render = crimeCollections => {
        criminalHTML.innerHTML = `
          ${
          crimeCollections.map(
            (criminal) => {
              return CriminalComponent(criminal)
            }
          ).join("")
          }
              `
      }
      render(Criminals)
    }
    
    export default CriminalList
    // export default CriminalListComponent
//     contentTarget.innerHTML = `
//         <div class="criminals">
//             ${
//                 Criminals.map(currentCriminalObject => {
//                     const criminalHTML = Criminal(currentCriminalObject)
//                     return criminalHTML
//                 }).join("")
//             }
//         </div>
//     `
//     console.groupEnd()
// }





