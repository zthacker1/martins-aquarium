import { database } from "./fishData.js";
import { mostHolyFish, soldierFish, regularFish } from "./filteredFish.js";

// export const fishList = () => {
//   // Generate an HTML representation of each fish
//   let fishHTML = "";
//   let fishes = database.fish;

//   for (const fish of fishes) {
//     fishHTML += `
//            <article class="fish">
//                <img src="${fish.image}" alt="${fish.name} poster" class="fish_image">
//                <div class="fish__details">
//                    <h2 class="fish__name">${fish.name}</h2>
//                    <p>species: ${fish.species}</p>
//                    <p>length: ${fish.length}"</p>
//                    <p>location: ${fish.location}</p>
//                    <p>diet: ${fish.diet}</p>
//                </div>
//            </article>
//        `;
//   }

//   return fishHTML;
// };

export const fishList = () => {
  let holyFishes = mostHolyFish();
  let soldierFishes = soldierFish();
  let regularFishes = regularFish();
  let fishHTML = "";

  for (const fish of holyFishes) {
    fishHTML += `
    <article class="fish">
    <div class ="fish_details">
    <p>${fish.name}</p>

    </div>
    
    </article>
    `;
  }

  return fishHTML;
};

export const renderFishToDOM = (fishHTML) => {
  const fishList = document.getElementById("fish-list");

  if (fishList) {
    fishList.innerHTML = fishHTML;
  } else {
    console.error('Could not find element with id "fish-list"');
  }
};
