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

  $('#select_list').on('input', function () {
    debugger;
    let listToDisplay = List.findByTitle($('#select_list').val())
    listToDisplay.display()
  })

  $('#delete_list').on('submit', (event) => {
    event.preventDefault();
    listController.deleteList()
  })






});
