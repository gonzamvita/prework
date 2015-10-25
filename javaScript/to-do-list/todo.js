
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    var list = document.querySelector('.todo-list-items');
    var item = document.createElement('li');
    var inputText = document.querySelector("#todo-input").value;

    item.innerHTML = inputText;
    list.appendChild(item)
  }

  function addToDoneItems(item) {
    var list = document.querySelector('.done-list-items');
    item.className = "done";

    list.appendChild(item)
  }

  /*The ‘Done’ button should remove the first list item from
  the To-Do list and add it to the Done list. Remember to
  add the correct class to get the strikethrough.*/
  function markAsDone() {
    var uList = document.querySelector('.todo-list-items');
    var list = uList.getElementsByTagName('li');
    var items = Array.prototype.slice.call(list);
    items.reverse();
    var item = items.pop();

    if (uList.hasChildNodes()) {
      uList.removeChild(item);
    }

    addToDoneItems(item);

    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
  }

}
