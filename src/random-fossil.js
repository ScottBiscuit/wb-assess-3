// import Axios.
import axios from "axios";

async function getRandomFossil(evt) {
    const response = await axios.get("/random-fossil.json");
    const fossImg = response.data.img;
    const fossName = response.data.name;
    document.querySelector("#random-fossil-image").innerHTML = `<img src=${fossImg}>`;
    document.querySelector("#random-fossil-name").innerText = `${fossName}`;
  }
  
  document.querySelector('#get-random-fossil').addEventListener('click', getRandomFossil);
// Add an event listener which will listen for a click on the button that says “Get Random Fossil.”

// Inside the event listener’s callback:

// Make an Axios call to /random-fossil.json, which should give you the name and image of a random fossil.

// Display the fossil image in the div with id="random-fossil-image".

// Display the fossil name in the paragraph with id="random-fossil-name".


