// const addTodo = document.querySelector(".add");
// const listItem = document.querySelector(".todos");
// const searchTodo = document.querySelector(".search input");

// const generateTemplate = (todo) => {
//   const html = `
//   <li
//           class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>${todo}</span>
//           <i class="far fa-trash-alt delete"></i>
//         </li>
//   `;

//   listItem.innerHTML += html;
// };

// addTodo.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const todo = addTodo.add.value.trim();

//   if (todo.length) {
//     generateTemplate(todo);
//     addTodo.reset();
//   }
// });

// listItem.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();
//   }
// });

// const filterTodo = (searchInput) => {
//   Array.from(listItem.children).filter((todo) => {
//     return !todo.textContent.includes(searchInput).forEach((todo) => {
//       todo.classList.add("filtered");
//     });
//   });

//   Array.from(listItem.children).filter((todo) => {
//     return todo.textContent.includes(searchInput).forEach((todo) => {
//       todo.classList.remove("filtered");
//     });
//   });
// };
// searchTodo.addEventListener("keyup", () => {
//   const searchInput = searchTodo.value.trim().toLowerCase();
//   filterTodo(searchInput);
// });

const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

const filterTodos = (term) => {
  // add filtered class
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  // remove filtered class
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// add todos event
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos event
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter todos event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
