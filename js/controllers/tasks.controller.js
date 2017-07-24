
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
    console.log(`Added task ${taskTitle}`)
    return new Task(taskTitle, taskPriority, selectedList)
  }

  deleteTask(id, redisplayList) {
    let taskToDelete = Task.find(id)
    let taskInd = taskToDelete.list.tasks.indexOf(taskToDelete)
    taskToDelete.list.tasks.splice(taskInd, 1)
    console.log(`Deleted task ${taskToDelete.id} from list position ${taskInd}`)
    taskInd = Task.all.indexOf(taskToDelete)
    Task.all.splice(taskInd, 1)
    console.log(`Deleted task ${taskToDelete.id} from Task.all position ${taskInd}`)
    List.clearDisplay()
    if(redisplayList === true) {
    taskToDelete.list.display()
    }
  }
}
