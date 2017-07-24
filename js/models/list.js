// List Model

function createLists() {
  let nextID = 0

  return class List {
    constructor (title, priority) {
      this.title = title;
      this.priority = priority;
      this.id = ++nextID;
      List.all.push(this)
      this.tasks = []
      return this
    }

    static findByTitle(title) {
      return List.all.find((list) => {
        return list.title === title
      })
    }

    static clearDisplay() {
      $('ul').empty()
      $('h4')[0].innerText = ""
    }

    display() {
      $('ul').empty()
      $('h4')[0].innerText = `${this.title} (click a task to remove)`
      this.tasks.forEach((task) => {
        $('ul').append(`<li id="${task.id}">${task.description} - Priority: ${task.priority}</li>`)
        let newListItem = $(`li#${task.id}`)[0]
        $(`li#${task.id}`).on('click', null, task.id, (event) => {
          // event.data is the task.id that was clicked
          tasksController.deleteTask(event.data, true)
        })
      })
    }



  }
}
