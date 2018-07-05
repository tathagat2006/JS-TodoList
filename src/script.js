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

// $(() => {
//
//     let assignedby = $('#assignedby')
//     let deadline = $('#deadline')
//     let deadlinebtn = $('#deadlinebtn')
//     let newtask = $('#newtask')
//     let addtask = $('#addtask')
//     let cleartask = $('#cleartask')
//     let todolist = $('#todolist')
//
//     // deadlinebtn.click(() => {
//     //     deadline.dateTime =
//     // })
//
//     addtask.click(() => {
//
//         let by = assignedby.val()
//         let date = deadline.val()
//         let task = newtask.val()
//
//         // todolist.append($('<div>').append(
//         //     $('<li  class="list-group-item  font-weight-bold">').text(task).append($(
//         //         '<span style="margin-left: 10px;">' +
//         //         '<i class="far fa-check-circle" style="color: green;"></i></span>').click(() => $(this.currentTarget).toggleClass('alert alert-success') ))
//         // ))
//
//         // todolist.append($('<div font-weight-bold" >').text(task).append($(
//         //     '<i class="far fa-check-circle" style="color: green; margin-left: 20px;">').click((e) => $(e.currentTarget).parent().toggleClass('alert alert-success'))).append(
//         //         $('<i class="far fa-times-circle" style="color: red; margin-left: 20px;">').click((e) => $(e.currentTarget).parent().toggleClass('alert alert-danger'))))
//
//
//
//     })

// })

// $(() => $('#addtask').click(
//     () => $('#todolist').append(
//         $('<li>')
//             .append(
//                 $('<button class="btn btn-success" style=" margin: 2px;">')
//                     .html('<i class="far fa-check-circle" style=" margin: 2px;"></i>')
//             )
//             .append(
//                 $('<button class="btn btn-danger" style=" margin: 2px;">')
//                     .html('<i class="far fa-times-circle"></i>')
//                     .click(
//                         (e) => $(e.currentTarget).parent().remove()
//                     )
//             )
//             .append(
//                 $('<button class="btn btn-primary" style=" margin: 2px;">')
//                     .html('<i class="far fa-arrow-alt-circle-down"></i>')
//                     .click(
//                         (e) => $(e.currentTarget).parent().insertAfter(
//                             $(e.currentTarget).parent().next()
//                         )
//                     )
//             )
//             .append(
//                 $('<button class="btn btn-primary" style=" margin: 2px;">')
//                     .html('<i class="far fa-arrow-alt-circle-up"></i>')
//                     .click(
//                         (e) => $(e.currentTarget).parent().insertBefore(
//                             $(e.currentTarget).parent().prev()
//                         )
//                     )
//             )
//             .append(
//                 $('<span>')
//                     .text($('#newtask').val())
//                     .click(
//                         (e) => $(e.currentTarget).parent().toggleClass('done')
//                     )
//             )
//     )
// )
//     .click(() => $('#newtask').val(''))
//     .next().click(
//         () => $('.done').remove()
//     ))
//

//Write here

$(() => $('#addtask').click(
    () =>$('#todolist').append(
        $('<li>')
            .append(
            $('<button class="btn btn-success" style=" margin: 2px;">')
                .html('<i class="far fa-check-circle"></i>')
            //     .click(
            //         (e) => $(e.currentTarget).parent().remove()
            // )  
        )
        .append(
            $('<button class="btn btn-danger" style="margin: 2px;">')
                .html('<i class="far fa-times-circle"></i>')
                .click((e) => $(e.currentTarget).parent().remove()
                )
        ).append(
            $('<button class="btn btn-primary" style="margin: 2px;">')
                .html('<i class="far fa-arrow-alt-circle-up"></i>')
                .click(
                    (e) => $(e.currentTarget).parent().insertBefore(
                        $(e.currentTarget).parent().prev()
                    )
                )
        ).append(
            $('<button class="btn btn-primary" style="margin: 2px;">')
                .html('<i class="far fa-arrow-alt-circle-down"></i>')
                .click((e) => $(e.currentTarget).parent().insertAfter(
                    $(e.currentTarget).parent().next()
                ))
        )
            .append(
                $('<span>')
                    .text($('#newtask').val())
                    .click(
                        (e) => (e.currentTarget).parent().toggleClass('.done')
                    )
            )

    ))
    .click(() => $('#newtask').val('')).click(() => $('#dialog').dialog()).next().click(() => $('.done').remove())
)

