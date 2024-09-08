let task = document.getElementById("task");
let addbtn = document.getElementById("addbtn");
let appbody = document.getElementById("appbody");
// addbtn.addEventListener("click", addTask);
// task.addEventListener("keypress", (e) => {
//   if (e.key == "enter") {
//     addTask();
//   }
// });
function addTask() {
  let div = document.createElement("div");
  div.className = "list";
  let taskInput = document.getElementById("task");
  let taskText = taskInput.value;
  let taskElement = document.createElement("h2");
  taskElement.textContent = taskText;
  taskElement.style.color = cornsilk;
  taskElement.style.fontSize = "2.4rem";
  div.appendChild(taskElement);
  document.getElementById("appbody").appendChild(taskElement);
  taskInput.value = "";
}

addbtn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.className = "list";
  let h2 = document.createElement("h2");
  h2.innerText = task.value;
  div.insertAdjacentElement("beforeend", h2);
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  div.insertAdjacentElement("beforeend", checkbox);
  let dltbtn = document.createElement("button");
  dltbtn.innerText = "delete";
  dltbtn.classList.add("dltbtn");
  div.insertAdjacentElement("beforeend", dltbtn);

  let editbtn = document.createElement("button");
  editbtn.innerText = "edit";
  editbtn.classList.add("editbtn");
  div.insertAdjacentElement("beforeend", editbtn);
  appbody.insertAdjacentElement("beforeend", div);
  //add event listener to checkbox
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      h2.style.textDecoration = "line-through";
    } else {
      h2.style.textDecoration = "none";
    }
  });

  //delete code
  let dltbtns = document.getElementsByClassName("dltbtn");
  for (let i = 0; i < dltbtns.length; i++) {
    dltbtns[i].addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  }
  //edit
  let editbtns = document.getElementsByClassName("editbtn");
  for (let i = 0; i < editbtns.length; i++) {
    editbtns[i].addEventListener("click", (e) => {
      let div = e.target.parentNode;
      let h2 = div.querySelector("h2");
      let text = h2.innerText;
      h2.classList.add("rem");
      // let h2Element = e.target.closest("div.last");
      // let text = h2Element.innerText;
      // text.style.textcolor = white;
      // h2Element.classList.add("rem");
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = text;
      // edit.style.width="80px";
      // let div = e.target.parentNode;
      div.insertAdjacentElement("afterbegin", editInput);
      editInput.focus();
      editInput.addEventListener("keypress", (e) => {
        if (e.key === "enter") {
          h2.innerText = editInput.value;
          h2.classList.remove("rem");
          editInput.remove();
        }
        // let newText = edit.value;
        // h2Element.innerText = edit.value;
        // h2.classList.remove("rem");
        // edit.remove();
      });
      editInput.addEventListener("blur", () => {
        h2.classList.remove("rem");
        editInput.remove();
      });
    });
  }
});
