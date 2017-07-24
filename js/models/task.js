// Task Model

function createTasks() {
  let nextID = 0

  return class Task {
    constructor (description, priority, list) {
      this.description = description;
      this.priority = priority;
      this.id = nextID++;
      this.list = list;
      list.tasks.push(this)
      Task.all.push(this)
      this.list.display()
      return this
    }

    static find(id) {
      return Task.all.find((task) => {
        return task.id === id;
      })
    }

  }
}
