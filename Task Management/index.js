const taskItems = document.querySelector(".taskItems");
const addTaskBtn = document.querySelector(".add-task");
const btnText = addTaskBtn.innerText;
let edit_id = null;

const getListFromStorage = () => {
  return JSON.parse(localStorage.getItem("item")) || [];
};
const addItemToStorage = (item) => {
  return localStorage.setItem("item", JSON.stringify(item));
};

const addTask = (e) => {
  e.preventDefault();
  taskArray = getListFromStorage();
  const title = document.querySelector('input[name="title"]').value;
  const description = document.querySelector('input[name="description"]').value;
  const date = document.querySelector('input[name="date"]').value;

  if (edit_id != null) {
    taskArray.splice(edit_id, 1, {
      title: title,
      description: description,
      date: date,
    });
  } else {
    taskArray.push({ title: title, description: description, date: date });
  }
  addItemToStorage(taskArray);

  let statement = "";
  taskArray.forEach((element, i) => {
    statement += `<tr>
                            <th scope="row">${i}</th>
                            <td>${element.title}</td>
                            <td>${element.description}</td>
                            <td>${element.date}</td>
                            <td><button class="btn btn-warning mr-3" onclick="editTask(${i})">Edit</button>
                                <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button></td>
                          </tr>`;
    taskItems.innerHTML = statement;
  });
  document.querySelector('input[name="title"]').value = "";
  document.querySelector('input[name="description"]').value = "";
  document.querySelector('input[name="date"]').value = "";
  taskItems.innerHTML = statement;
  addTaskBtn.innerText = btnText;
};

const showTaskList = () => {
  taskArray = getListFromStorage();
  let statement = "";
  taskArray.forEach((element, i) => {
    statement += `<tr>
                            <th scope="row">${i}</th>
                            <td>${element.title}</td>
                            <td>${element.description}</td>
                            <td>${element.date}</td>
                            <td><button class="btn btn-warning mr-3" onclick="editTask(${i})">Edit</button>
                                <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button></td>
                          </tr>`;
    taskItems.innerHTML = statement;
    addTaskBtn.innerText = btnText;
  });
};

const deleteTask = (id) => {
  taskArray.splice(id, 1);
  addItemToStorage(taskArray);
  showTaskList();
};

const editTask = (id) => {
  edit_id = id;
  document.querySelector('input[name="title"]').value = taskArray[id].title;
  document.querySelector('input[name="description"]').value =
    taskArray[id].description;
  document.querySelector('input[name="date"]').value = taskArray[id].date;
  addTaskBtn.innerText = "Save Changes";
};

document.querySelector(".add-task").addEventListener("click", (e) => {
  addTask(e);
});

document
  .querySelector('input[name="search"]')
  .addEventListener("input", (e) => {
    const searchString = e.target.value.toLowerCase();
    taskItems.innerHTML = "";
    taskArray.forEach((element, i) => {
      if (
        element.title.toLowerCase().includes(searchString) ||
        element.description.toLowerCase().includes(searchString)
      ) {
        taskItems.innerHTML += `<tr>
                            <th scope="row">${i}</th>
                            <td>${element.title}</td>
                            <td>${element.description}</td>
                            <td>${element.date}</td>
                            <td><button class="btn btn-warning mr-3" onclick="editTask(${i})">Edit</button>
                                <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button></td>
                          </tr>`;
      }
    });
  });
