// Асинхронное программирование с использованием API.

const divUsers = document.querySelector(".users");
divUsers.classList.add("spanFullName");
divUsers.style.padding = "0 10px";
divUsers.style.display = "flex";
divUsers.style.justifyContent = "space-between";
divUsers.style.flexWrap = "wrap";
divUsers.style.gap = "10px";

let users = [];

function api() {
  const url = "https://randomuser.me/api/?page=3&results=10&seed=abc";
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((data) => {
        users = data.json();
        resolve(users);
      })
      .catch((error) => alert("Не удалось загрузить пользователей", error));
  });
}
function userList() {
  let loading = document.createElement("div");
  if (users.length == false) {
    loading.textContent = "Loading";
    divUsers.append(loading);
  }
  api().then((data) =>
    data.results.forEach((el) => {
      loading.remove();
      let divUsersBlock = document.createElement("div");
      let spanFullName = document.createElement("span");
      let spanEmail = document.createElement("span");
      let imgUser = document.createElement("img");

      let fullName = el.name.title + " " + el.name.first + " " + el.name.last;
      let email = el.email;

      divUsersBlock.classList.add("divUsersBlock");

      spanFullName.textContent = fullName;
      spanEmail.textContent = email;
      imgUser.src = el.picture.large;

      divUsersBlock.style.border = "1px solid black";
      divUsersBlock.style.display = "flex";
      divUsersBlock.style.flexDirection = "column";
      divUsersBlock.style.flexBasis = "18%";

      divUsersBlock.append(spanFullName, spanEmail, imgUser);
      divUsers.append(divUsersBlock);
    })
  );
}
userList();
