const steps = Array.from(document.querySelectorAll(".form"));
const backBtns = Array.from(document.querySelectorAll("#back"));
const nextBtns = Array.from(document.querySelectorAll("#next"));
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

nextBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    toStep("next");
  })
);

backBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    toStep("back");
  })
);

function toStep(type) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");

  switch (type) {
    case "next":
      index++;
      break;

    case "back":
      index--;
      break;

    default:
      break;
  }

  steps[index].classList.add("active");
}
