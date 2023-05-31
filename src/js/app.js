const todoapp = document.querySelector(".todo-app");
const themebtn = document.querySelector(".switch__input");

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
