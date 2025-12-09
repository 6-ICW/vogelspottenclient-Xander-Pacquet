const vogelSelect = document.querySelector("#vogelSelect");
const counter = document.querySelector("#counter");
const plusBtn = document.querySelector("#plusBtn");

const loadVogels = () => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };

  fetch("https://apivogelspotten.onrender.com/vogelspotten/")
    .then((result) => result.json())
    .then((dataVogel) => {
      dataVogel.forEach((vogel) => {
        const newOp = document.createElement("option");
        newOp.value = vogel.id;
        newOp.innerHTML = vogel.soort;
        vogelSelect.appendChild(newOp);
      });
      vogelSelect.addEventListener("change", () => {
        console.log(vogeldata.aantalKeerGespot);
      });
    });
};

loadVogels();

// const plusBtn = ()=>{

// }

const getOneVogel = () => {
  fetch(`https://apivogelspotten.onrender.com/vogelspotten/getOne/2`)
    .then((result) => result.json)
    .then((dataVogel) => {
      // hardcoded 2? 
      const gezochtId = 2;
      const resultaat = dataVogel.find((element) => element.id === gezochtId);
      if (resultaat) {
        console.log(dataVogel.aantalKeerGespot);
      }
    });
};
getOneVogel();
