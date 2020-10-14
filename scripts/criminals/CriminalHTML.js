/*
    Author: Madi Peper
    Responsibility: This module is responsible for representing what one Criminal should look like in HTML
*/
export const CriminalHTML = (criminalObj) => {
    return `
    <section class="criminal__card">
        <div class="criminal__card-content">
            <h3 class="criminal__name">${criminalObj.name}</h3>
            <p class="criminal__age">${criminalObj.age}</p>
            <p class="criminal__conviction">${criminalObj.conviction}</p>
            <p class="criminal__incarceration-start">${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="criminal__incarceration-end">${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    </section>
    `
}