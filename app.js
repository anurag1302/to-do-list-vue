const item = document.querySelector("input");
const button = document.querySelector("button");
const ulElement = document.querySelector("ul");

button.addEventListener("click", () => {
  let itemValue = item.value;
  let liElement = document.createElement("li");
  liElement.textContent = itemValue;
  ulElement.append(liElement);
  item.value = "";
});
