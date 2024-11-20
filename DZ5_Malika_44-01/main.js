const input = document.getElementById("input");
const create_button = document.getElementById("create_button");
const todo_list = document.getElementById("todo_list");

const createTodo = () => {
    if (!input.value.trim()) return alert("напиши что нибудь");
    const div = document.createElement("div");
    const text = document.createElement("h3");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");


    div.setAttribute("class", "block_text");
    deleteBtn.setAttribute("class", "delete_button");
    editBtn.setAttribute("class", "edit_button");

    text.innerHTML = input.value;
    deleteBtn.innerHTML = "DELETE";
    editBtn.innerHTML = "EDIT";

    deleteBtn.onclick = () => div.remove();

    editBtn.onclick = () => {
        const editedText = prompt(`Edit: ${text.innerHTML}`).trim();
        if (editedText) text.innerHTML = editedText;
    }

    div.append(text, deleteBtn, editBtn);
    todo_list.prepend(div);
    input.value = "";
};
create_button.onclick = ()=> createTodo();



input.onkeydown = (e) => {
    if (e.key === "Enter") createTodo();
};