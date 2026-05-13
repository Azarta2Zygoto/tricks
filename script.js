function onChangeNumberColonnes(value) {
  const flip = document.getElementById("flip");
  // Supprimer tous les éléments enfants de la div "flip"
  while (flip.firstChild) {
    flip.removeChild(flip.firstChild);
  }

  // Récupérer le nombre de colonnes et de lignes à partir des champs d'entrée
  const colonneNumber = parseInt(value);
  const ligneNumber = parseInt(document.getElementById("ligne").value);

  elementSize = getElementSize(colonneNumber, ligneNumber);

  // Récupérer le flip des éléments
  const currentValue = parseInt(flip.dataset.value);

  // Générer les éléments en fonction du nombre de colonnes et de lignes
  for (let i = 0; i < ligneNumber; i++) {
    const elementRow = document.createElement("div");
    elementRow.classList.add("element-row");
    for (let j = 0; j < colonneNumber; j++) {
      const element = document.createElement("div");
      element.classList.add("element");
      element.style.width = `${elementSize - 10}px`;
      element.style.height = `${elementSize - 10}px`;
      element.style.transform = `rotate(${-currentValue}deg)`;
      element.textContent = i * colonneNumber + j + 1;
      elementRow.appendChild(element);
    }
    flip.appendChild(elementRow);
  }
}

function onChangeNumberLignes(value) {
  const flip = document.getElementById("flip");
  // Supprimer tous les éléments enfants de la div "flip"
  while (flip.firstChild) {
    flip.removeChild(flip.firstChild);
  }

  // Récupérer le nombre de colonnes et de lignes à partir des champs d'entrée
  const colonneNumber = parseInt(document.getElementById("colonne").value);
  const ligneNumber = parseInt(value);

  elementSize = getElementSize(colonneNumber, ligneNumber);

  // Récupérer le flip des éléments
  const currentValue = parseInt(flip.dataset.value);

  // Générer les éléments en fonction du nombre de colonnes et de lignes
  for (let i = 0; i < ligneNumber; i++) {
    const elementRow = document.createElement("div");
    elementRow.classList.add("element-row");
    for (let j = 0; j < colonneNumber; j++) {
      const element = document.createElement("div");
      element.classList.add("element");
      element.style.width = `${elementSize - 10}px`;
      element.style.height = `${elementSize - 10}px`;
      element.style.transform = `rotate(${-currentValue}deg)`;
      element.textContent = i * colonneNumber + j + 1;
      elementRow.appendChild(element);
    }
    flip.appendChild(elementRow);
  }
}

function getElementSize(colonneNumber, ligneNumber) {
  const flip = document.getElementById("flip");
  const flipWidth = flip.clientWidth;
  const flipHeight = flip.clientHeight;
  const minimum = Math.min(flipWidth, flipHeight);
  return minimum / Math.max(colonneNumber, ligneNumber);
}

function onClickFlip(sign) {
  const flip = document.getElementById("flip");
  const currentValue = parseInt(flip.dataset.value);
  const newValue = currentValue + 90 * sign;
  flip.dataset.value = newValue;
  flip.style.transform = `rotate(${newValue}deg)`;
  const elements = flip.querySelectorAll(".element");
  elements.forEach((element) => {
    element.style.transform = `rotate(${-newValue}deg)`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  onChangeNumberColonnes(document.getElementById("colonne").value);
});

window.addEventListener("resize", () => {
  console.log("resize");
  onChangeNumberColonnes(document.getElementById("colonne").value);
});
