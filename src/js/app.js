"use strict";
// Theme

const todoapp = document.querySelector(".todo-app");
const themebtn = document.querySelector(".theme-switch__input");

if (localStorage.getItem("theme") === "dark") {
  todoapp.classList.add("dark-theme");
  themebtn.checked = true;
}

function themeChange() {
  const isDark = todoapp.classList.toggle("dark-theme");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    themebtn.checked = true;
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Task Working

const listContainer = document.querySelector(".list-container");
const listItem = document.querySelector(".list-container__item");
const taskInput = document.querySelector(".task-adder__input");
const taskBtn = document.querySelector(".task-adder__btn");

taskBtn.addEventListener("click", addTask);
taskBtn.addEventListener("click", rmTask);

function addTask() {
  const taskValue = document.querySelector(".task-adder__input").value;

  const taskHTML = ` <li class="list-container__item">${taskValue} <span class="rm-task">\u00d7</span></li>`;

  if (taskValue === "") {
    alert("This Empty");
  } else {
    listContainer.insertAdjacentHTML("beforeend", taskHTML);
  }
}

function rmTask() {
  console.log("Удаление задачи");
}
