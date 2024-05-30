import { fishList } from "./fishList.js";
import { renderTipToDOM, tipList } from "./tipList.js";
import { locationList, renderLocationToDOM } from "./locationList.js";
import { renderFishToDOM } from "./fishList.js";

// Generate the fish list
const fishHTML = fishList();
renderFishToDOM(fishHTML);

// Generate the care tips
const tipHTML = tipList();
renderTipToDOM(tipHTML);

// Generate the location list
const locationHTML = locationList();
renderLocationToDOM(locationHTML);

// Render each HTML string to the correct DOM element
