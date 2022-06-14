import "./style.css";

const body: HTMLElement = document.getElementById("app")!;

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
noteTitle.innerHTML = "<input type='text' />";


const noteBody: HTMLElement = document.createElement("div");
noteBody.classList.add("note-body");
noteBody.innerHTML = "<input type='text' />";

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

body.append(inputLable, note);
