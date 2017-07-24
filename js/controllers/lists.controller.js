
class ListsController {
  init() {

  }

  createNew(title) {
    let nl = new List(title);
    let listOfLists = $('#select_list');
    listOfLists.append(`<option value="${nl.title}" id="list_${nl.id}"  selected>${nl.title}</option>`)
    $('#add_list').children()[1].value = ""
    listController.enableButtons()
    nl.display()
  }

  deleteList() {
    let listTitle = $('#select_list').val()
    let listToDelete = List.findByTitle(listTitle);
    let listInd = List.all.indexOf(listToDelete)
    let taskIdsToDelete = listToDelete.tasks.map(function(task) {
      return task.id;
    })
    taskIdsToDelete.forEach((id) => {
      tasksController.deleteTask(id, false)
    })
    List.all.splice(listInd, 1)
    $(`#select_list #list_${listToDelete.id}`).remove()
    List.clearDisplay()
    if(List.all.length === 0) {
      listController.disableButtons()
    } else {
      let listToDisplay = List.findByTitle($('#select_list').val())
      listToDisplay.display()
    }

  }

  enableButtons() {
    $('.list_button_js').each(function() {
      this.disabled = false;
      $(this).removeClass("disabled")
    })
  }

  disableButtons() {
    $('.list_button_js').each(function() {
      this.disabled = true;
      $(this).addClass("disabled")
    })
  }
}
