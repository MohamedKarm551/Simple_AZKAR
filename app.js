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
    // 2-4-2022 رمضان   اللي حلو المشكلة السطر ده وتلت سطور تحت
    Items[index].classList.remove("show");
    //  لما بيفضل حاطط الماوس على الزرار بتاع الاكس بيفضل الايموشن معلق وبيبوظ عشان كده هخفي الكلوز لما يضغط
    closed[index].classList.add("hide");
    Items[index].addEventListener("transitionend", function () {
      this.classList.add("hide");
      // this.classList.remove("show");
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

let sOh = document.querySelectorAll(".hideAllOrShowAll  ");

for (let index = 0; index < sOh.length; index++) {
  // console.log(sOh[index].childNodes[1]);
  // let azkarSabah = sOh[0].parentElement.childNodes[1].innerHTML;
  // // اول ما تفتح الصفحة جمع كل اذكار الصباح هنا عشان اما احذفهم وعاوز اظهرهم تاني يبقو متجمعين معايا
  // let azkarMasaa = sOh[1].parentElement.childNodes[1].innerHTML;
  // // جمع كل أذكار المساء قبل الحذف عشان هعوزهم بعد الحذف
  // console.log(azkarSabah);
  // console.log(azkarMasaa);
  let arrOfItemsInContainerSabah = Array.from(
    sOh[0].parentElement.childNodes[1].children
  );
  let arrOfItemsInContainerMasaa = Array.from(
    sOh[1].parentElement.childNodes[1].children
  );
  // جمع كل الايتمز اللي في الكونتاينر عشان تلف عليهم تحذف منهم كلاس الهايد
  // console.log(arrOfItemsInContainerSabah);
  // console.log(arrOfItemsInContainerMasaa);
  sOh[index].childNodes[1].addEventListener("click", function () {
    // لما اضفط على كل زرار

    // console.log(this.parentElement.childNodes[1]);
    // this.parentElement.childNodes[1]//container
    // console.log(this.childNodes[1]);//button
    // روح من الزرار للكونتاينر واخفيه واظهره
    sOh[index].parentElement.childNodes[1].classList.toggle("hide");

    if (this.innerText == "Show All") {
      // لو لقيت الكلمة اللي في الزرار هي اظهر الكل

      if (index == 0) {
        // console.log(index);
        // console.log(arrOfItemsInContainerSabah);
        for (
          let index = 0;
          index < arrOfItemsInContainerSabah.length;
          index++
        ) {
          arrOfItemsInContainerSabah[index].classList.remove("hide");
          arrOfItemsInContainerSabah[index].classList.remove("hidden");
          // arrOfItemsInContainerSabah[index].classList.add("show");
          // 2-4-2022 اللي حل المشكلة هما التلات سطور دول
          arrOfItemsInContainerSabah[index].classList.add("show");

          arrOfItemsInContainerSabah[
            index
          ].childNodes[9].dataset.countableNumber = 1;
          arrOfItemsInContainerSabah[index].childNodes[11].innerText = "0";
        }
      }
      if (index == 1) {
        for (
          let index = 0;
          index < arrOfItemsInContainerMasaa.length;
          index++
        ) {
          console.log(
            arrOfItemsInContainerMasaa[index].childNodes[9].dataset
              .countableNumber
          );
          // console.log(arrOfItemsInContainerMasaa[index].getAttribute("class"));
          arrOfItemsInContainerMasaa[index].classList.remove("hide");
          arrOfItemsInContainerMasaa[index].classList.remove("hidden");
          // 2-4-2022 اللي حل المشكلة هما التلات سطور دول
          arrOfItemsInContainerMasaa[index].classList.add("show");

          arrOfItemsInContainerMasaa[
            index
          ].childNodes[9].dataset.countableNumber = 1;
          arrOfItemsInContainerMasaa[index].childNodes[11].innerText = "0";
        }
      }

      this.innerText = "Hide All";
      this.style.backgroundColor = "red";
    } else {
      this.innerText = "Show All";
      this.style.backgroundColor = "green";
    }
  });
}
