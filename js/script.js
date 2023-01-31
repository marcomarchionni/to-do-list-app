function newItem() {
  function crossOut() {
    listItem.toggleClass("strike");
  }

  function deleteListItem() {
    listItem.remove();
  }

  let inputValue = $("#input").val();
  if (inputValue === "") {
    alert("Add a valid name");
    return;
  }

  // clear input field
  $("#input").val("");

  // create list item and delete button
  let listItem = $("<li></li>").append(inputValue).on("dblclick", crossOut);
  let deleteButton = $("<span>X</span>").on("click", deleteListItem);

  // append list item and button and make list sortable
  $("#list").append(listItem.append(deleteButton)).sortable();
}

$("#input").keydown(function (e) {
  if (e.which === 13) {
    e.preventDefault();
    newItem();
  }
});
