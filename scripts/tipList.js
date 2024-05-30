import { database } from "./fishData.js";

export const tipList = () => {
  // Use a loop to generate the HTML for each tip. Render each tip as an <li class="tip"> element inside a <ul class="tips"> element.
  let tipHTML = "";
  let tips = database.tips;

  for (const tip of tips) {
    tipHTML += `
    <ul class="tips">
        <li class="tip">
           
                <h2 class="tip_topic">${tip.topic}</h2>
                <p>${tip.text}</p>
          
        </li>
    </ul>
       `;
  }

  return tipHTML;
};

export const renderTipToDOM = (tipHTML) => {
  const tipList = document.getElementById("tip-list");

  if (tipList) {
    tipList.innerHTML = tipHTML;
  } else {
    console.error('Could not find element with id "tip-list"');
  }
};
