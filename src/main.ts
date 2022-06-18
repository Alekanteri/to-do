import "./style.css";

const body: HTMLElement = document.getElementById("app")!;

const ToDoTitle = document.createElement("h1")
ToDoTitle.classList.add("to-do-title")
ToDoTitle.textContent = "ToDo"

const inputLable: HTMLElement = document.createElement("div");
inputLable.classList.add("input-lable");
inputLable.setAttribute("contentEditable", "false");
inputLable.setAttribute("data-text", "New Todo...");

const note: HTMLElement = document.createElement("div");
note.classList.add("note");

const noteContent: HTMLElement = document.createElement("div");
noteContent.classList.add("note-content");

const closeBtn: HTMLElement = document.createElement("span");
closeBtn.innerHTML = "&times;";
closeBtn.classList.add("close-btn");

const noteTitle: HTMLElement = document.createElement("div");
noteTitle.classList.add("note-head");
noteTitle.innerHTML = "<h2>Title</h2><div class='input-content' contentEditable='true'></div>";

const noteBody: HTMLElement = document.createElement("div");
noteBody.classList.add("note-body");
noteBody.innerHTML = "<div id='body-input' class='input-content' contentEditable='true'></div>";

note.append(noteContent);
noteContent.append(noteTitle, noteBody, closeBtn);

inputLable.addEventListener("click", () => {
  note.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  note.style.display = "none";
});

window.addEventListener("click", (e) => {
  e.target === note ? note.style.display = "none" : null;
})

const bodyInput = document.getElementById("body-input");
bodyInput?.addEventListener("keydown", (e) => {
  let tab = e.keyCode;
  if (tab === 13) {
    console.log("agdafg")
    noteBody.innerHTML += "<div id='body-input' class='input-content' contentEditable='true'></div>";
  }
})

body.append(ToDoTitle, inputLable, note);
