// Mendeklarasikan sebuah selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//function
function addTodo(event) {
  //prevent form from submiting
  event.preventDefault();

  const kegiatan = document.createElement("div");
  kegiatan.classList.add("todo");

  const tambahKegiatan = document.createElement("li");
  tambahKegiatan.innerText = todoInput.value;
  tambahKegiatan.classList.add("todo-item");
  kegiatan.appendChild(tambahKegiatan);
  //Tanda cek
  const tombolSelesai = document.createElement("button");
  tombolSelesai.innerHTML = '<i class="fas fa-check"> </i>';
  tombolSelesai.classList.add("complete-btn");
  kegiatan.appendChild(tombolSelesai);
  //tombol hapus
  const tombolHapus = document.createElement("button");
  tombolHapus.innerHTML = '<i class="fas fa-trash"> </i>';
  tombolHapus.classList.add("trash-btn");
  kegiatan.appendChild(tombolHapus);

  //append to list
  todoList.appendChild(kegiatan);
  //clear input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //function untuk menghapus list
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animasi
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //animasi yang akan muncul ketika tombol selesai di klik
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
