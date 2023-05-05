window.addEventListener('load', () => {
    // Retrieve data from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
  
      // Display data on the page
      output_div.innerHTML += `
        <div class="item_div">
          ${value}
          <button class="del_btn">X</button>
        </div>`;
        document.getElementById("hide").style.display = "none";
    }
  });
  // Selectors
  todo_add_btn.addEventListener('click', (e) => {
    e.preventDefault();
    let todo = todo_input_text.value.trim();
  
    // Check if the input is empty or already exists
    if (todo === '') {
      alert('Please enter a todo item');
    } else if (localStorage.getItem(`todo${localStorage.length - 1}`) === todo) {
      alert('Todo item already exists');
    } else {
      // Get the next key
      let key = 0;
      while (localStorage.getItem(`todo${key}`) !== null) {
        key++;
      }
      // Add data to localStorage
      localStorage.setItem(`todo${key}`, todo);
      output_div.innerHTML += `
        <div class="item_div">
          ${todo}
          <button class="del_btn">X</button>
        </div>`;
        // Clear input field
      todo_input_text.value = '';
      // Hide sample
      document.getElementById("hide").style.display = "none";
    }
    
  });
  
  // Delete a single item
  output_div.addEventListener('click', (e) => {
    e.preventDefault();//prevent default action- refresh Prevention
    // Check if the delete button is clicked
    if (e.target.classList.contains('del_btn')) {
      const todoItem = e.target.parentElement.textContent.trim();
      e.target.parentElement.remove();
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        if (value === todoItem) {
          localStorage.removeItem(key);
          break;
        }
      }
    }
  });
  
  // Delete all items
  all_delete_btn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();

    //showing Sample while deleting all
    output_div.innerHTML = `<div class="item_div">
    Sample: 7 Hours of Sleep
    <button class="del_btn">X</button>
  </div>`;

  });
  