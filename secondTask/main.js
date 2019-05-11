const button = document.getElementById("button");

let doubleClicked = false;

const test = () => console.info('Double clicked');

button.addEventListener("click", () => {

  setTimeout(() => {doubleClicked = false}, 300);

  button.addEventListener("click", () => {
    doubleClicked = true;
  });

  if(doubleClicked) test();
});
