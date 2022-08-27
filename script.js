//     <!---- START OF SUBSCRIBE FORM ---->

function subFormToggle() {
  var subscribe = document.getElementById("subform");
  if (subscribe.style.display === "") {
    subscribe.style.display = "block";
  } else {
    subscribe.style.display = "";
  }
}

function subFormClose() {
  subscribe.style.display = "";
}

//     <!---- END OF SUBSCRIBE FORM ---->

//     <!---- START OF SOLUTIONS FORM ---->

function toggleForm() {
  var form = document.getElementById("form");
  if (form.style.display === "") {
    form.style.display = "block";
  } else {
    document.getElementById("form").style.display = "";
  }
}

function submitForm() {
  form.style.display === "";
}

//     <!---- END OF SOLUTIONS FORM ---->

//     <----- START OF TEAM CARD SLIDER----->

let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("team-grid")
}

//     <----- END OF TEAM CARD SLIDER----->



//     <----- START OF FAQ----->

// ICON ROTATE

let changeIcon = function(icon) {
  icon.classList.toggle('rotate')
} 


// HIDE/REVEAL PARAGRAPH

function clickIcon() {
   
  let para = document.getElementById("para1");
  
  if (para.style.display === "") {
    para.style.display = "block";
  } else {
    para.style.display = "";
  } return changeIcon();
}

function clickIcon2() {
  let para2 = document.getElementById("para2");

  if (para2.style.display === "") {
    para2.style.display = "block";
  } else {
    para2.style.display = "";
  } return changeIcon();
}

function clickIcon3() {
  let para3 = document.getElementById("para3");

  if (para3.style.display === "") {
    para3.style.display = "block";
  } else {
    para3.style.display = "";
  } return changeIcon();
}

function clickIcon4() {
  let para4 = document.getElementById("para4");

  if (para4.style.display === "") {
    para4.style.display = "block";
  } else {
    para4.style.display = "";
  } return changeIcon();
}

function clickIcon5() {
  let para5 = document.getElementById("para5");
  
  if (para5.style.display === "") {
    para5.style.display = "block";
  } else {
    para5.style.display = "";
  } return changeIcon();
}

//     <----- END OF FAQ----->

// let form = document.getElementById("form");

// function openForm() {
//     form.classList.add("open-form");
// }

// function closeForm() {
//     form.classList.remove("open-form");
// }

// let clickIcon = function(icon) {
//   if (icon.para.style.display === "none") {
//     icon.style.display = "block";
//   } else {
//     icon.style.display = "none"
//   } return changeIcon()
// }
// function iconClick() {
//   let iconn = document.getElementById("icon");

//   while (iconn.classList.add("rotated")) {
  
//     iconn.classList.remove("rotated");
//   } conn.classList.remove("rotated");
//   // return iconn.classList.remove("rotated")
// } return clickIcon();

// function removeRotate() {
//   document.getElementById("icon").classList.remove("rotated");
// }

// let iconn = document.getElementById("icon");

// function iconClick() {
//     iconn.classList.remove("rotated");
// }
// function iconClick() {
//     iconn.classList.add("rotated");
// }


// function iconClick() {
//   let icon = document.getElementsByClassName("[icons]");
  
//   if (icon.style.display === "block") {
//     icon.style.display = "none";
//   } else {
//     icon.style.display = "block";
//   }
// }

// function hideIcon() {
//   let hideIcon = document.querySelectorAll("icon");
//   while (hideIcon.style.display = "active") {
    
//   }
// }

//ROTATION OF IMAGE

// let toggle = document.getElementById("icon1");

// function iconToggle() {
//     toggle.classList.add("icon-active");
//     // toggle.classList.remove("icon-inactive");
// }

// function closePopup() {
    // popup.classList.remove("open-popup");
// }

// const current_rotation = 0;

// document.getElementById(".icon1").addEventListener('click', function() {
//   current_rotation +=45;
//   document.getElementById(".icon1").style.transform = 'rotate(' + current_rotation + 'deg)';
// });

// function hideIcon() {
//   let hideIcon = document.getElementsById("icon1");
//   if (hideIcon.style.display === "none") {
//     hideIcon.style.display = "block";
//   } else {
//     hideIcon.style.display = "none";
//   }
// }

// function toggleForm() {
//     var form = document.getElementById("form")

//     if (form.style.display === "none") {
//         form.style.display = "initial";
//     } else {
//         form.style.display = "none"
//     }

// }
