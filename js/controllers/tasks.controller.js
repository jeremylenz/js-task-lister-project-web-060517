
class TasksController {
  init() {

  }

  createNew() {
    let taskTitle = $('#task_description').val()
    if(taskTitle == "") {
      return null
    }
    let taskPriority = $('#task_priority').val()
    let selectedListTitle = $('#select_list').val()
    let selectedList = List.findByTitle(selectedListTitle)
    $('#task_description').val("")
    $('#task_priority').val("")
    return new Task(taskTitle, taskPriority, selectedList)
  }

  deleteTask(id, redisplayList) {
    // Delete the task from its list
    let taskToDelete = Task.find(id)
    let taskInd = taskToDelete.list.tasks.indexOf(taskToDelete)
    taskToDelete.list.tasks.splice(taskInd, 1)
    // Now delete it from Task.all
    taskInd = Task.all.indexOf(taskToDelete)
    Task.all.splice(taskInd, 1)
    List.clearDisplay()
    if(redisplayList === true) {
    taskToDelete.list.display()
    }
  }
}
