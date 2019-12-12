//  component will fetch those crimes an export a useConvictions() method for other components to import.

let convictions = []

export const useConvictions = () => {
    return convictions
}

export const getConvictions = () => {

        return fetch("http://criminals.glassdale.us/crimes")

        .then(response => response.json())

        .then(
            SetConvictions => {
                convictions = SetConvictions.slice()
            })
 
}
