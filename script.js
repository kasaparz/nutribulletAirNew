function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("nutriMain");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("nutriNav__tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  tablinks2 = document.getElementsByClassName("nutriNav__tablink2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;

  allbuttons = elmnt.parentNode.getElementsByTagName("button");

  for (i = 0; i < allbuttons.length; i++) {
    document.getElementById(allbuttons[i].id).style.fontWeight = "normal";
  }
  document.getElementById(elmnt.id).style.fontWeight = "bold";
}

document.getElementById("button1").click();
const burger = document.querySelector(".burger");

const activeElement = document.querySelectorAll(".active");

burger.addEventListener("click", function () {
  for (let i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.toggle("show");
  }
});

window.onclick = function (event) {
  if (!event.target.matches(".fas")) {
    var dropdowns = document.getElementsByClassName("nutriNav2__menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
