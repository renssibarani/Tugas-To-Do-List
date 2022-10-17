// Mendeklarasikan selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//function
function addTodo(event) {
    //agar halaman tidak melakukan reload
    event.preventDefault();
    //membuat sebuah inputan kosong
    const kegiatan = document.createElement("div");
    kegiatan.classList.add("todo");
    //menambahkan sebuah kegitan setelah menekan event +
    const tambahKegiatan = document.createElement("li");
    tambahKegiatan.innerText = todoInput.value;
    tambahKegiatan.classList.add("todo-item");
    kegiatan.appendChild(tambahKegiatan);


    //Mencoret list yang sudah diselesaikan
    const tombolSelesai = document.createElement("button");
    tombolSelesai.innerHTML = '<i class="fas fa-check"> </i>';
    tombolSelesai.classList.add("complete-btn");
    kegiatan.appendChild(tombolSelesai);

    //menghapus list
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
    //untuk menghapus list
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //animasi menghapus
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }
    //ketika tombol selesai di klik akan ada animasi
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}