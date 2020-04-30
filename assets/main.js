function changeBg(bg) {
  document.body.style.background = bg;
}

let profileImg = document.querySelector("#profile-img");
profileImg.addEventListener('click', function(event) {
    profileImg.setAttribute("src", "assets/img/profile.jpg");
});
