window.onload = function () {

    let todos = []
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todocontainer = document.getElementById(('todocontainer'))

    function retrieveTodoList() {

        if(localStorage['todos']) {
            todos = JSON.parse(localStorage['todos'])
        }
    }

    function saveTodo() {

        localStorage['todos'] = JSON.stringify(todos)

    }

    function clearList() {

        while(todocontainer.firstChild) {
            todocontainer.removeChild(todocontainer.firstChild)
        }

    }

    function createListFromTodo(todo , pos) {

        let item = document.createElement('li')
        let taskspan = document.createElement('span')
        let xbtn = document.createElement('button')
        // let upbtn = document.createElement('button')
        // let downbtn = document.createElement('button')

        taskspan.innerText = todo.task
        // taskspan.style.alignSelf = "left"
        xbtn.innerHTML = "&otimes;"
        xbtn.style.fontSize = "15px"
        // upbtn.innerText = "^"
        // downbtn.innerText = "v"

        if(todos[pos].done) {

            taskspan.style.textDecoration = 'line-through'
        }

        xbtn.onclick = function() {

            todos[pos].done = !todos[pos].done
            saveTodo()
            refreshList()
        }

        item.appendChild(taskspan)
        item.appendChild(xbtn)
        // item.appendChild(upbtn)
        // item.appendChild(downbtn)

        return item

    }

    function refreshList() {

        retrieveTodoList()
        clearList()
        for(let i = 0 ; i < todos.length ; i++) {
            todocontainer.appendChild(createListFromTodo(todos[i] , i))
        }
    }

    addtask.onclick = function () {

        todos.push({
            task : newtask.value,
            done : false
        })
        saveTodo()
        newtask.value = ""
        refreshList()

    }

    refreshList()
}
