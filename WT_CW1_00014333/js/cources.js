const infoList = document.querySelectorAll(".info>div>ul>li");
const navBar = document.querySelectorAll(".nav-bar>li");
const infoImg = document.querySelector(".info>div.img");

navBar[0].style = "background-color: rgb(54,52,53); color: white;";
infoList[0].innerHTML = "Group 13 (±1) Students";
infoList[1].innerHTML = "2 books (Students book and Home book)";
infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
infoList[3].innerHTML = "Service Academic Support";
infoList[4].innerHTML = "Video Arsenal for each lesson";
infoList[5].innerHTML = "Speaking Club and Master class";

console.log(infoImg);

const changeInfo = (text) => {
  if (text == navBar[0].innerHTML) {
    infoList[4].style = "margin-bottom: 1.5rem";
    infoList[5].style = "visibility: visible";
    infoImg.style =
      "background-image: url('https://web.inter-nation.uz/wp-content/uploads/2022/06/tab-img-1.jpg.webp')";
    infoList[0].innerHTML = "Group 13 (±1) Students";
    infoList[1].innerHTML = "2 books (Students book and Home book)";
    infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
    infoList[3].innerHTML = "Service Academic Support";
    infoList[4].innerHTML = "Video Arsenal for each lesson";
    infoList[5].innerHTML = "Speaking Club and Master class";
  } else if (text == navBar[1].innerHTML) {
    infoList[4].style = "margin-bottom: 1.5rem";
    infoList[5].style = "visibility: visible";
    infoImg.style =
      "background-image: url('https://web.inter-nation.uz/wp-content/uploads/2022/06/tab-img-2.jpg.webp')";
    infoList[0].innerHTML = "Group 13 (±1) Students";
    infoList[1].innerHTML =
      "4 books (Writing, Reading, Listening and Speaking, Vocabulary)";
    infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
    infoList[3].innerHTML = "Service Academic Support";
    infoList[4].innerHTML = "Video Arsenal for each lesson";
    infoList[5].innerHTML = "Mock IELTS every week";
  } else if (text == navBar[1].innerHTML) {
    infoList[4].style = "margin-bottom: 1.5rem";
    infoList[5].style = "visibility: visible";
    infoImg.style =
      "background-image: url('https://web.inter-nation.uz/wp-content/uploads/2022/06/tab-img-3.jpg.webp')";
    infoList[0].innerHTML = "Group 13 (±1) Students";
    infoList[1].innerHTML =
      "4 books (Writing, Reading, Listening and Speaking, Vocabulary)";
    infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
    infoList[3].innerHTML = "Service Academic Support";
    infoList[4].innerHTML = "Video Arsenal for each lesson";
    infoList[5].innerHTML = "Mock IELTS every week";
  } else {
    infoImg.style =
      "background-image: url('https://web.inter-nation.uz/wp-content/uploads/2022/06/tab-img-1.jpg.webp')";
    infoList[0].innerHTML = "The number of employees is unlimited";
    infoList[1].innerHTML = "2 books (Students book and Home book)";
    infoList[2].innerHTML = "Signature Notebook Grammar and Vocabulary";
    infoList[3].innerHTML = "Service Academic Support";
    infoList[4].innerHTML = "The teacher comes to you with all the devices";
    infoList[4].style = "margin-bottom: 0";
    infoList[5].style = "display: none";
    priceText.style = "visibility: hidden";
  }
};

const removingBackground = () => {
  navBar.forEach((item) => {
    item.style = "background-color: rgb(226, 226, 226)";
  });
};

navBar.forEach((item) => {
  item.addEventListener("click", () => {
    removingBackground();
    item.style = "background-color: rgb(54,52,53); color: white;";
    changeInfo(item.innerHTML);
  });
});
