// Initialize

$(function() { // on document ready
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();

  List = createLists()
  List.all = []

  Task = createTasks()
  Task.all = []



  $('#add_list').on('submit', (event) => {
    event.preventDefault();
    let listTitle = $('#add_list').children()[1].value
    listController.createNew(listTitle)
  })

  $('#add_task').on('submit', (event) => {
    event.preventDefault();
    tasksController.createNew()
  })

  $('#select_list').on('input', () => {
    let listToDisplay = List.findByTitle($('#select_list').val())
    listToDisplay.display()
  })

  $('#delete_list').on('submit', (event) => {
    console.log('Delete list was clicked')
    event.preventDefault();
    listController.deleteList()
  })






});
