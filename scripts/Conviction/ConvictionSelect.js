import {useConvictions} from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crime: changeEvent.target.value
                }
            } )
            eventHub.dispatchEvent(message)
                
        }
    })

    const render = convictionsCollection => {

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(
                        conviction => `<option value="${conviction}">${conviction}</option>`
                    )
                }
            </select>
        `
    }
    render(convictions)
}


export default ConvictionSelect