let box = document.getElementById("cards");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=2");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `<div class="card">
        <div class="card-image">
            <img src="bg.jpg" alt="">
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content">
            <h3>${element.first_name} ${element.last_name}</h3>
         
        </div>
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};

let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `<h2 class='load'>Scanning Users Data.....Please Wait</h2>`;
  setTimeout(() => {
    API();
  }, 3000);
});