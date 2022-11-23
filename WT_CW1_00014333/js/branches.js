const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const branchImg = document.querySelector("div.img");
const locationStreet = document.querySelector(".location>div>h3");
const locationInfo = document.querySelector(".location>div>p");
const branchCount = document.querySelector(".branch-container>h1");
console.log(branchCount);
const list = [
  [
    "Istiqbol str., 12",
    "Chilonzor tumani, Xalqlar do'stligi bekati",
    "https://images.adsttc.com/media/images/5d74/e3e7/284d/d1ce/8a00/004c/newsletter/YZFLS_Branch_Campus-1.jpg?1567941600",
  ],
  [
    "Mirzo Ulug'bek str., 14",
    "Mirzo Ulug'bek tumani, 3 bino, Hamid Olimjon metro",
    "https://www.usu.edu/today/images/stories/lg/language-building-01-UST.jpg",
  ],
  [
    "Shayhontohur str., 86",
    "Shayhontohur tumani, Beruniy ko'chasi, Tinchlik metro",
    "https://schoolconstructionnews.com/wp-content/uploads/2021/10/OrangeCoastCollege.png",
  ],
  [
    "Mirobod str., 1",
    "Mirobod tumani, Mirobod ko'chasi, Oybek Metro",
    "https://images.adsttc.com/media/images/62de/084b/e5a2/df01/6634/a7c1/medium_jpg/not-ready-shenzhen-foreign-language-school-baoan-campus-capol_5.jpg?1658718294",
  ],
  [
    "Novza str., 52/2",
    'Novza Metrosi yaqinida',
    "https://images.adsttc.com/media/images/62de/084b/c8bb/b201/692c/5d95/newsletter/not-ready-shenzhen-foreign-language-school-baoan-campus-capol_4.jpg?1658718295",
  ],
  [
    "11/9 Yangi Sergeli str., 21B",
    "Credit Asia Sergeli yonida'",
    "https://bloximages.newyork1.vip.townnews.com/cherokeephoenix.org/content/tncms/assets/v3/editorial/b/f7/bf741aca-b98b-11eb-b25f-3b39c686a855/60a693dfdfd60.image.jpg?resize=888%2C500",
  ],
  [
    "Yunusabad str., 16 ",
    "Yunusabad tumani, 'Stroy centre savdo majmuasi yaqinida' ",
    "https://homestay-in-japan.com/guest/wp-content/uploads/2020/09/ILS_fa_01-1024x512.jpg",
  ],
  [
    "Novza str., 52/2",
    "Chilonzor tumani, Novza Metro yaqinida'",
    "https://lmit.edu.tw/files/sit.nptu/IMG_1365.jpg",
  ],
];

let currentBranchNumber = 1;

leftBtn.addEventListener("click", () => {
  if (currentBranchNumber != 1) {
    currentBranchNumber--;
    branchImg.style =
      "background-image: url(" + list[currentBranchNumber - 1][2] + ")";
    locationStreet.innerHTML = list[currentBranchNumber - 1][0];
    locationInfo.innerHTML = list[currentBranchNumber - 1][1];
    branchCount.innerHTML = currentBranchNumber;
    console.log(currentBranchNumber);
  } else {
    currentBranchNumber = 8;
    branchImg.style = "background-image: url(" + list[list.length - 1][2] + ")";
    locationStreet.innerHTML = list[list.length - 1][0];
    locationInfo.innerHTML = list[list.length - 1][1];
    branchCount.innerHTML = currentBranchNumber;
    console.log(currentBranchNumber);
  }
});

rightBtn.addEventListener("click", () => {
  if (currentBranchNumber != list.length) {
    currentBranchNumber++;
    branchImg.style =
      "background-image: url(" + list[currentBranchNumber - 1][2] + ")";
    locationStreet.innerHTML = list[currentBranchNumber - 1][0];
    locationInfo.innerHTML = list[currentBranchNumber - 1][1];
    branchCount.innerHTML = currentBranchNumber;
    console.log(currentBranchNumber);
  } else {
    currentBranchNumber = 1;
    branchImg.style = "background-image: url(" + list[0][2] + ")";
    locationStreet.innerHTML = list[0][0];
    locationInfo.innerHTML = list[0][1];
    branchCount.innerHTML = currentBranchNumber;
    console.log(currentBranchNumber);
  }
});
