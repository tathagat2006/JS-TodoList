// window.onload = function () {
//
//     let todos = []
//     let newtask = document.getElementById('newtask')
//     let addtask = document.getElementById('addtask')
//     let todocontainer = document.getElementById(('todocontainer'))
//
//     function retrieveTodoList() {
//
//         if(localStorage['todos']) {
//             todos = JSON.parse(localStorage['todos'])
//         }
//     }
//
//     function saveTodo() {
//
//         localStorage['todos'] = JSON.stringify(todos)
//
//     }
//
//     function clearList() {
//
//         while(todocontainer.firstChild) {
//             todocontainer.removeChild(todocontainer.firstChild)
//         }
//
//     }
//
//     function createListFromTodo(todo , pos) {
//
//         let item = document.createElement('li')
//         let taskspan = document.createElement('span')
//         let xbtn = document.createElement('span')
//         let upbtn = document.createElement('button')
//         let downbtn = document.createElement('button')
//
//         taskspan.innerText = todo.task
//         // taskspan.style.alignSelf = "left"
//         xbtn.innerHTML = "&#9989;"
//         xbtn.style.fontSize = "20px"
//         xbtn.style.cursor = "pointer"
//         upbtn.innerHTML = "&uarr;"
//         upbtn.style.fontSize = "15px"
//         downbtn.innerHTML = "&darr;"
//         downbtn.style.fontSize = "15px"
//
//         if(todos[pos].done) {
//
//             taskspan.style.textDecoration = 'line-through'
//         }
//
//         xbtn.onclick = function() {
//
//             todos[pos].done = !todos[pos].done
//             saveTodo()
//             refreshList()
//         }
//
//         item.appendChild(xbtn)
//         item.appendChild(upbtn)
//         item.appendChild(downbtn)
//         item.appendChild(taskspan)
//
//         return item
//
//     }
//
//     function refreshList() {
//
//         retrieveTodoList()
//         clearList()
//         for(let i = 0 ; i < todos.length ; i++) {
//             todocontainer.appendChild(createListFromTodo(todos[i] , i))
//         }
//     }
//
//     addtask.onclick = function () {
//
//         todos.push({
//             task : newtask.value,
//             done : false
//         })
//         saveTodo()
//         newtask.value = ""
//         refreshList()
//
//     }
//
//     refreshList()
// }

$(() => {

    let assignedby = $('#assignedby')
    let deadline = $('#deadline')
    let deadlinebtn = $('#deadlinebtn')
    let newtask = $('#newtask')
    let addtask = $('#addtask')
    let cleartask = $('#cleartask')
    let todolist = $('#todolist')

    // deadlinebtn.click(() => {
    //     deadline.dateTime =
    // })

    addtask.click(() => {

        // let by = assignedby.val()
        // let date = deadline.val()
        let task = newtask.val()
        todolist.append(
            $('<li  class="list-group-item">').text(task)
        )

    })

})
