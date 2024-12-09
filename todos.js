"use strict";

// Манипуляции с DOM.

const inner = document.querySelector(".inner");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const filterActive = document.querySelector(".filter-active");
const filterCompleted = document.querySelector(".filter-completed");
const filterAll = document.querySelector(".filter-all");

let arrMessage = [];

function onChange() {
  let inputValue = "";
  input.value = inputValue;

  input.addEventListener("input", function (event) {
    inputValue = event.target.value;
  });

  button.addEventListener("click", function () {
    if (inputValue == "") return;

    arrMessage.push({
      inputValue: inputValue,
      checked: false,
    });
    inputValue = "";
    input.value = "";
    messageList();
  });
  filterActive.addEventListener("click", function () {
    inner.innerHTML = "";
    arrMessage
      .filter((el) => el.checked == false)
      .forEach((el) => {
        const divBlockList = document.createElement("div");
        const text = document.createElement("p");
        const inputCheked = document.createElement("input");
        const buttonDelete = document.createElement("button");
        inputCheked.checked = el.checked;

        divBlockList.classList.add("divBlockList");
        inputCheked.classList.add("inputCheked");
        buttonDelete.classList.add("delete");
        text.classList.add("text");

        divBlockList.style.display = "flex";
        buttonDelete.style.margin = "auto 0";
        buttonDelete.style.height = "40px";
        inputCheked.type = "checkbox";
        buttonDelete.textContent = "Удалить";
        text.textContent = `${el.inputValue}`;

        el.checked
          ? (text.style.textDecoration = "line-through")
          : (text.style.textDecoration = "");

        inputCheked.addEventListener("click", function () {
          el.checked = inputCheked.checked;
          el.checked
            ? (text.style.textDecoration = "line-through")
            : (text.style.textDecoration = "");
        });

        buttonDelete.addEventListener("click", function () {
          arrMessage = arrMessage.filter(
            (item) => item.inputValue !== el.inputValue
          );
          messageList();
        });

        divBlockList.append(text, inputCheked, buttonDelete);
        inner.append(divBlockList);
      });
  });
  filterCompleted.addEventListener("click", function () {
    inner.innerHTML = "";
    arrMessage
      .filter((el) => el.checked == true)
      .forEach((el) => {
        const divBlockList = document.createElement("div");
        const text = document.createElement("p");
        const inputCheked = document.createElement("input");
        const buttonDelete = document.createElement("button");
        inputCheked.checked = el.checked;

        divBlockList.classList.add("divBlockList");
        inputCheked.classList.add("inputCheked");
        buttonDelete.classList.add("delete");
        text.classList.add("text");

        divBlockList.style.display = "flex";
        buttonDelete.style.margin = "auto 0";
        buttonDelete.style.height = "40px";
        inputCheked.type = "checkbox";
        buttonDelete.textContent = "Удалить";
        text.textContent = `${el.inputValue}`;

        el.checked
          ? (text.style.textDecoration = "line-through")
          : (text.style.textDecoration = "");

        inputCheked.addEventListener("click", function () {
          el.checked = inputCheked.checked;
          el.checked
            ? (text.style.textDecoration = "line-through")
            : (text.style.textDecoration = "");
        });

        buttonDelete.addEventListener("click", function () {
          arrMessage = arrMessage.filter(
            (item) => item.inputValue !== el.inputValue
          );
          messageList();
        });

        divBlockList.append(text, inputCheked, buttonDelete);
        inner.append(divBlockList);
      });
    filterAll.addEventListener("click", function () {
      messageList();
    });
  });
}

function messageList() {
  inner.innerHTML = "";
  arrMessage.forEach((el) => {
    const divBlockList = document.createElement("div");
    const text = document.createElement("p");
    const inputCheked = document.createElement("input");
    const buttonDelete = document.createElement("button");
    inputCheked.checked = el.checked;

    divBlockList.classList.add("divBlockList");
    inputCheked.classList.add("inputCheked");
    buttonDelete.classList.add("delete");
    text.classList.add("text");

    divBlockList.style.display = "flex";
    buttonDelete.style.margin = "auto 0";
    buttonDelete.style.height = "40px";
    inputCheked.type = "checkbox";
    buttonDelete.textContent = "Удалить";
    text.textContent = `${el.inputValue}`;

    el.checked
      ? (text.style.textDecoration = "line-through")
      : (text.style.textDecoration = "");

    inputCheked.addEventListener("click", function () {
      el.checked = inputCheked.checked;
      el.checked
        ? (text.style.textDecoration = "line-through")
        : (text.style.textDecoration = "");
    });

    buttonDelete.addEventListener("click", function () {
      arrMessage = arrMessage.filter(
        (item) => item.inputValue !== el.inputValue
      );
      messageList();
    });

    divBlockList.append(text, inputCheked, buttonDelete);
    inner.append(divBlockList);
  });
}

onChange();
