/*
    Author: Madi Peper
    Responsiblity: This module is responsible for using the criminal data, turning each criminal object into HTML, and putting that HTML on the DOM.
*/

import { useCriminals, getCriminals } from "./CriminalDataProvider.js"
import { CriminalHTML } from "./CriminalHTML.js"

export const CriminalList = () => {
    // Get a reference to the element where we want to pur out list of criminals
    const criminalContainer = document.querySelector(".criminalsContainer")

    // We have to get the criminals first before we can use them
    getCriminals().then(() => {
        // Now we can use them!
        const criminalArray = useCriminals()

        for (const singleCriminal of criminalArray) {
            criminalContainer.innerHTML += CriminalHTML(singleCriminal)
        }
    })
}