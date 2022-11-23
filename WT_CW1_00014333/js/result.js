const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const resultsList = document.querySelectorAll(".list-of-results>div");

leftBtn.addEventListener("click", () => {
  if (resultsList[0].getAttribute("class") == "result hidden") {
    let lastVisibleItem = 0;
    for (let i = 0; i < resultsList.length; i++) {
      if (resultsList[i].getAttribute("class") == "result visible") {
        lastVisibleItem = i;
      }
    }
    resultsList[lastVisibleItem - 2].setAttribute("class", "result visible");
    resultsList[lastVisibleItem].setAttribute("class", "result hidden");
    if (lastVisibleItem - 2 == 0) {
      leftBtn.setAttribute("class", "disabled");
    }
    rightBtn.setAttribute("class", "enabled");
  }
});

rightBtn.addEventListener("click", () => {
  if (
    resultsList[resultsList.length - 1].getAttribute("class") == "result hidden"
  ) {
    let firstVisibleItem = 0;
    for (let i = 0; i < resultsList.length; i++) {
      console.log(resultsList[i].getAttribute("class"));
      if (resultsList[i].getAttribute("class") == "result visible") {
        firstVisibleItem = i;
        break;
      }
    }
    console.log(firstVisibleItem);
    resultsList[firstVisibleItem + 2].setAttribute("class", "result visible");
    resultsList[firstVisibleItem].setAttribute("class", "result hidden");
    if (firstVisibleItem + 2 == resultsList.length - 1) {
      rightBtn.setAttribute("class", "disabled");
    }
    leftBtn.setAttribute("class", "enabled");
  }
});
