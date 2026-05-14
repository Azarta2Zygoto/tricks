function onChangeNumberColonnes(value) {
  const colonneNumber = parseInt(value);
  const ligneNumber = parseInt(document.getElementById("ligne").value);
  changeNumberElements(colonneNumber, ligneNumber);
}
function onChangeNumberLignes(value) {
  const colonneNumber = parseInt(document.getElementById("colonne").value);
  const ligneNumber = parseInt(value);
  changeNumberElements(colonneNumber, ligneNumber);
}
function changeNumberElements(colonneNumber, ligneNumber) {
  const flip = document.getElementById("flip");

  const nbElements = colonneNumber * ligneNumber;

  while (flip.childElementCount > nbElements) {
    flip.removeChild(flip.lastChild);
  }

  const currentValue = parseInt(flip.dataset.value);
  for (let i = flip.childElementCount; i < nbElements; i++) {
    const element = document.createElement("div");
    element.classList.add("element");
    element.style.transform = `rotate(${-currentValue}deg)`;
    element.textContent = i + 1;
    flip.appendChild(element);
  }
  resizeElements(flip, colonneNumber, ligneNumber);
}

function resizeElements(flip, colonneNumber, ligneNumber) {
  const elements = document.querySelectorAll(".element");
  elementSize = getElementSize(flip, colonneNumber, ligneNumber);
  flip.style.gridTemplateColumns = `repeat(${colonneNumber}, ${elementSize}px)`;
  elements.forEach((element) => {
    element.style.width = `${elementSize - 10}px`;
    element.style.height = `${elementSize - 10}px`;
  });
}

function getElementSize(flip, colonneNumber, ligneNumber) {
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
  flip = document.getElementById("flip");
  const colonneNumber = parseInt(document.getElementById("colonne").value);
  const ligneNumber = parseInt(document.getElementById("ligne").value);
  resizeElements(flip, colonneNumber, ligneNumber);
});
