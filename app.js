// https://www.islambook.com/azkar/1/%D8%A3%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD

// document.getElementById("count-total").data;
let Items = document.querySelectorAll(".item"); //كل بطاقة
let buttonsList = document.querySelectorAll(".count-button"); //كل زر للعد
let closed = document.querySelectorAll(".fa-times-circle"); //كل علامة حذف
let realCount = document.querySelectorAll(".count-is"); //المعدود الفعلي

// console.log(Items);
// console.log(buttonsList);
// console.log(closed);
for (let index = 0; index < closed.length; index++) {
  closed[index].addEventListener("click", function () {
    Items[index].classList.add("hidden");
    // Items[index].style.cssText = "transform: scale(0);    transition: 0.5s;";
    // Items[index].addEventListener('transitionend', function(e) {
    //   Items[index].classList.add('hide');
    // }
    Items[index].addEventListener("transitionend", function () {
      this.classList.add("hide");
    });
  });
}

for (var i = 0; i < buttonsList.length; i++) {
  buttonsList[i].addEventListener("click", function () {
    // console.log();
    let Total = parseInt(this.dataset.count);
    let n = parseInt(this.dataset.countableNumber);
    // console.log(Total);
    // console.log(n);
    // console.log(this.parentNode.childNodes[1].childNodes[1]);
    // console.log(this.parentNode.childNodes[11]);

    //عشان اوصل من الزرار اللي انا واقف عليه   لأول الكارت أو اول الأيتم ثم منه أروح للأبناء اللي منهم الايقونه اللي انا عاوزها استعنت بالخصائص اللي بتظهر للحاجة في الكونسل ووصلتهله كلك يمين كوبي باث
    let icon = this.parentNode.childNodes[1].childNodes[1];
    let span = this.parentNode.childNodes[11];
    if (!(n >= Total)) {
      this.dataset.countableNumber++;
      span.innerHTML = n;
    } else {
      // console.log("end");
      span.innerHTML = n;
      icon.classList.add("show");

      // console.log(n);
      //   span.inn = num;
    }
  });
}
// function counter(e) {
//   console.log(e);
//   let total = parseInt(this.dataset.count);
//   console.log(total);
//   var i = 0;
//   i++;
//     if (i >= 1) {
//         document.getElementById("count-is").style.display = "none";
//         document.getElementById("count-button").style.display = "none";
//         document.getElementById("fa-times-circle").style.display = "block";
//     } else {
//         document.getElementById("count-is").innerHTML = i;
//     }
// }

// function close() {
//     document.getElementById("item").style.display = "none";
//     console.log("aaa");
// }
//
var arrayOfTitles = document.getElementsByClassName("class-hover-title");
// console.log(arrayOfTitles);
for (var x = 0; x < arrayOfTitles.length; x++) {
  arrayOfTitles[x].addEventListener("click", function () {
    var element = this.nextElementSibling;
    element.classList.toggle("Hide");
  });
}

// function showAzkar() {

// }
