let mobBtn = document.querySelector(".mob-header-btn");
let mobHeaderContent = document.querySelector(".mob-header-content");
let body = document.querySelector('body')
mobBtn.addEventListener("click", () => {
  mobHeaderContent.classList.toggle("active");
  body.classList.toggle("active")
  mobBtn.classList.toggle("active")
});
