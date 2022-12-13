//elements

const personOneEl = document.getElementById("person-1");
const personTwoEl = document.getElementById("person-2");
const arrowNext = document.getElementById("arr-nxt");
const arrowPrev = document.getElementById("arr-prev");

//event listners

arrowNext.addEventListener("click", () => {
  personTwoEl.classList.remove("hidden");
  personOneEl.classList.add("hidden");
});

arrowPrev.addEventListener("click", () => {
  personOneEl.classList.remove("hidden");
  personTwoEl.classList.add("hidden");
});
