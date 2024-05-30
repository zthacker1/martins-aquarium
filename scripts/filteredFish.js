import { database } from "./fishData.js";

let fishes = database.fish;

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];

  for (const fish of fishes) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldierFish = [];

  for (const fish of fishes) {
    if (fish.length % 5 === 0) {
      soldierFish.push(fish);
    }
  }

  return soldierFish;
};

export const regularFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = [];

  for (const fish of fishes) {
    if (fish.length % 5 !== 0 || fish.length % 3 !== 0) {
      regularFish.push(fish);
    }
  }

  return regularFish;
};
