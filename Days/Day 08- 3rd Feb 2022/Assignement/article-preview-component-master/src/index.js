const shareButtons = document.querySelectorAll(".share-btn");
const shareDisplay = document.querySelector(".share");

function handleClick() {
  shareDisplay.classList.toggle("active");
}

shareButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});


