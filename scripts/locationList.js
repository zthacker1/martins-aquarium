import { database } from "./fishData.js";

export const locationList = () => {
  // Define each location as a <section> element with the class location inside an <article> element with the class locations.
  let locationHTML = "";
  let locations = database.locations;

  for (const location of locations) {
    locationHTML += `
        <section>
           <article class="location">
               <div class="location_details">
                   <h2 class="location_name">${location.name}</h2>
                   <p>country: ${location.country}</p>
                   <p>${location.description}</p>

               </div>
           </article>
        </section>
       `;
  }

  return locationHTML;
};

export const renderLocationToDOM = (locationHTML) => {
  const locationList = document.getElementById("location-list");

  if (locationList) {
    locationList.innerHTML = locationHTML;
  } else {
    console.error('Could not find element with id "location-list"');
  }
};
