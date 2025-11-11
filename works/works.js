

let fsticky = document.getElementById("fsticky").innerHTML;
let wsticky = document.getElementById("wsticky").innerHTML;
let gsticky = document.getElementById("gsticky").innerHTML;

let social = document.getElementById("sticky");

social.addEventListener("click", function () {
  social.style.display = "none";

  let blur = document.getElementById("blurs");
  blur.style.display = "block";
});

blurs.addEventListener("click", function () {
  let blurs = document.getElementById("blurs");
  blurs.style.display = "none";
  social.style.display = "block";
  let cancel = document.getElementById("cancel").innerHTML;
  cancel.style.display = "block";
});





