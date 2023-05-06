// Select elements from the DOM
const output_div = document.querySelector('#output_div');
const todo_add_btn = document.querySelector('#todo_add_btn');
const all_delete_btn = document.querySelector('#all_delete_btn');
const todo_input_text = document.querySelector('#todo_input_text');

// Function to delete an item from localStorage and update the page
function delFunc(key) {
  localStorage.removeItem(key);
  // Remove the item from the page by selecting its parent element and removing it
  output_div.querySelector(`[data-key="${key}"]`).remove();
  
}

// Retrieve data from localStorage on page load
window.addEventListener('load', () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    // Add a data-key attribute to each item_div element for later reference
    output_div.innerHTML += `
      <div class="item_div" data-key="${key}">
        ${value}
        <button class="del_btn" onclick="delFunc('${key}')">X</button>
      </div>`;
  }
});

// Add a new todo item to localStorage and the page
todo_add_btn.addEventListener('click', (e) => {
  e.preventDefault();
  let todo = todo_input_text.value.trim();

  if (todo === '') {
    alert('Please enter a todo item');
  } else if (localStorage.getItem(`todo${localStorage.length - 1}`) === todo) {
    alert('Todo item already exists');
  } else {
    let key = 0;
    while (localStorage.getItem(`todo${key}`) !== null) {
      key++;
    }
    localStorage.setItem(`todo${key}`, todo);
    // Add a data-key attribute to the new item_div element
    output_div.innerHTML += `
      <div class="item_div" data-key="todo${key}">
        ${todo}
        <button class="del_btn" onclick="delFunc('todo${key}')">X</button>
      </div>`;
    todo_input_text.value = '';
  }
});

// Remove all items from localStorage and the page
all_delete_btn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  output_div.innerHTML = '';
});


function DelSample(){
  document.getElementById("del_sample").remove()
}
